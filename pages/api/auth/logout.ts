import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', serialize('auth', '', { httpOnly: true, maxAge: 1, sameSite: 'lax', path: '/' }))
    res.json({ authorised: false })
  }
}
