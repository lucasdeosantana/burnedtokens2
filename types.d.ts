interface Itoday{
    _id:string
    contractaddress:string,
    day:string,
    value:string
}

interface Itoken{
    _id:string
    contractaddress: string
    supply: string
    name: string
    initials: string
    icon: string
}

interface iProps{
    today:Itoday
    token:Itoken
  }