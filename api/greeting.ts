import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'Asad' } = req.query
  return res.json({
    message: `My name is ${name}!`,
  })
}
