export interface Itoken{
    _id:string
    contractaddress:string
    supply:string
    name:string
    initials:string
    icon:string
}
export interface Itoday{
    _id:string
    contractaddress:string
    timer:number
    day:string
    value:string
}

export interface iProps{
    token:Itoken
    today:Itoday
}
