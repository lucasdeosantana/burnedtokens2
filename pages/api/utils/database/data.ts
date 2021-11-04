const api_key = "QUXAPVPTZT4D6Z9VU59I2JIA7KP7ISVYBV"
import axios from "axios"
import { getConnection } from "./connect"

interface Itoday{
    contractaddress:string
    timer:number
    day:string
    value:string
}


export async function getToday(contractaddress:string, address:string = "0x000000000000000000000000000000000000dead") {
    const db = await getConnection<Itoday>("today")
    const todaytoken = await db.findOne({contractaddress})
    if(todaytoken){
        if(Date.now()-todaytoken?.timer>60000){
            const response = await axios.get("https://api.bscscan.com/api", {params:{
                apikey:api_key,
                module:"account",
                action:"tokenbalance",
                contractaddress,
                address
            }})
            await db.updateMany({contractaddress}, {$set:{
                timer:Date.now(),
                value:response.data.result
            }})

            return todaytoken
        }
        return todaytoken
    }
    return null        
}

