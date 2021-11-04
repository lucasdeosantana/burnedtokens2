import type { NextApiRequest, NextApiResponse } from 'next'
import { getConnection } from './utils/database/connect';
import { getToday } from './utils/database/data';


  
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const todayToken = await getToday(req.query.contractaddress as string)
    res.status(200).json(todayToken)
}
  