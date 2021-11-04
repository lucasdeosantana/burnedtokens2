// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getConnection } from './utils/database/connect';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  res.status(200).json({ name: 'John Doe' })
}
