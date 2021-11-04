import type { NextApiRequest, NextApiResponse } from 'next'
import { getConnection } from './utils/database/connect';
import { getToday } from './utils/database/data';

type Data = {
    name: string
}
  
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Itoken>
  ) {
    const db = await getConnection<Itoken>("tokens")
    const token = await db.findOne({contractaddress:req.query.contractaddress})
    if(token){
        return  res.json(token)
    }
    return res.status(203)
}
  