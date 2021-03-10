import { serialize } from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.cookies.token)
  //--- I will remove all req.headers.cookie.split find bla bla bla with this method. it will save hell lot of processing time
  //--- I believe this may be a key to login a user itself on request. as i can send automatic get request and handel it here with useSWR
  res.setHeader(`set-cookie`, serialize(`name`, `value=${Math.random()}`))
  res.json({ info: 'check cookies' })
  //--- YES! i can set cookies from here. now next target---> automatic login
}
