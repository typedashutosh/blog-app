import { serialize } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import BlogModel from '../../../models/Blog.model'
import jwt, { VerifyErrors } from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req.headers)
  //--- I will remove all req.headers.cookie.split find bla bla bla with this method. it will save hell lot of processing time
  //--- I believe this may be a key to login a user itself on request. as i can send automatic get request and handel it here with useSWR
  // res.setHeader(`set-cookie`, serialize(`name`, `value=${Math.random()}`))
  // res.json({ info: 'check cookies' })
  //--- YES! i can set cookies from here. now next target---> automatic login

  if (req.method === 'GET') {
    const token: string = req.cookies.auth
    jwt.verify(token, process.env.JWT_SECRET, async (err: VerifyErrors | null, decoded: any) => {
      if (err) res.status(401).json({ authorised: false })
      else {
        const authorID: string = decoded.id
        const result = await BlogModel.find(
          { authorID, state: 'PUBLISHED' },
          ['title', 'description', '_id', 'votes', 'createdAt'],
          { sort: { createdAt: -1 } }
        )
        result.map((doc) => {
          const blog = doc.toObject()
          blog._id = blog._id.toString()
          blog.createdAt = blog.createdAt.toString()
          return blog
        })
        res.status(200).json(result)
      }
    })
  }
}
