import { NextApiRequest, NextApiResponse } from 'next'
import BlogModel, { IBlog } from '../../../models/Blog.model'
import jwt, { VerifyErrors } from 'jsonwebtoken'
import UserModel, { IUser } from '../../../models/User.model'
// import dbConnect from '../../../utils/dbConnect'

const JWT_SECRET = process.env.JWT_SECRET

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    //--- Extracting token

    const cookie = req.headers.cookie
      ?.split(';')
      .find((cookie) => cookie.trim().startsWith('auth='))
    const token = cookie?.split('=')[1]

    if (!token) res.status(404).json({ _event: 'NO TOKEN FOUND' })
    else {
      //--- Verifying token

      jwt.verify(
        token,
        JWT_SECRET,
        (err: VerifyErrors | null, decoded: any) => {
          if (err) res.status(401).json({ _event: 'INVALID TOKEN' })
          else {
            //--- Finding User in Database

            const authorID: string | undefined = decoded.id
            // console.log(authorID)
            // dbConnect() //? Do i need to connect to database every time i make a request???
            UserModel.findById(authorID, (err: any, doc: IUser) => {
              if (err) console.log('err:::>', err)
              // console.log('doc:::>', doc) //--- If there is no usere, doc returns null
              else if (doc === null)
                res.status(401).json({ _event: "USER DOESN'T EXIST" })
              else {
                //--- Since user exists, Let's create a Blog :}
                const user: IUser = doc
                const { work, title, description, content, mode } = req.body
                if (work === 'SAVE') {
                  const newBlog: IBlog = new BlogModel({
                    title,
                    description,
                    authorID,
                    author: `${user.firstname} ${user.lastname}`,
                    content,
                    mode,
                    state: 'SAVED',
                    votes: 0
                  })
                  newBlog.save().then((doc) => {
                    res.json({ BlogID: newBlog._id, _event: 'SAVED' })
                  })
                } else if (work === 'PUBLISH') {
                  const newBlog: IBlog = new BlogModel({
                    title,
                    description,
                    authorID,
                    author: `${user.firstname} ${user.lastname}`,
                    content,
                    mode,
                    state: 'PUBLISHED',
                    votes: 0
                  })
                  newBlog.save().then((doc) => {
                    res.json({ BlogID: newBlog._id, _event: 'PUBLISHED' })
                  })
                }
              }
            })
          }
        }
      )
    }
  }
}
