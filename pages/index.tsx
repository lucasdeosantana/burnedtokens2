import axios from 'axios'
import type { NextPage, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home: NextPage<iProps> = (props) => {
  const [burnedTotal, setBurnedTotal] = useState(parseInt(props.today.value.slice(0,-6)))
  const [burnedToday, setBurnedToday] = useState((parseInt(props.today.value.slice(0,-6))-parseInt(props.today.day.slice(0,-6))))
  useEffect(()=>{
    setInterval(()=>{
    axios.get<Itoday>(`http://localhost:3000/api/today?contractaddress=${props.token.contractaddress}`)
    .then(response=>{
      setBurnedTotal(parseInt(response.data.value.slice(0,-6)))
      setBurnedToday((parseInt(response.data.value.slice(0,-6))-parseInt(response.data.day.slice(0,-6))))
    })

    },60000)
  },[])
  return (
    
    <div className="container">
      <div className="container_topic">
        <img src={props.token.icon} alt="" height="80" width="80" />
        <h1>{props.token.name} - ({props.token.initials})</h1>
      </div>
      <div className="container_topic">
        <h1>Total de Tokens Queimados</h1>
        <h1>{burnedTotal.toLocaleString("en")} - {((burnedTotal*100)/parseInt(props.token.supply.slice(0,-6))).toFixed(3)}%</h1>
      </div >
      <div className="container_topic">
        <h1>Total de Tokens Queimados hoje</h1>
        <h1>{burnedToday.toLocaleString("en")} - {((burnedToday*100)/parseInt(props.token.supply.slice(0,-6))).toFixed(5)}%</h1>
      </div>
      <div className="container_topic">
        <h1>Total de Tokens em Circulacao</h1>
        <h1>{ (parseInt(props.token.supply.slice(0,-6))-burnedTotal).toLocaleString("en") }</h1>
      </div>
    </div>
  )
}
export async function getServerSideProps(context:GetServerSidePropsContext) {
  const responseToday = await axios.get(`http://localhost:3000/api/today?contractaddress=${context.query.contractaddress}`)
  const responseToken = await axios.get(`http://localhost:3000/api/token?contractaddress=${context.query.contractaddress}`)
  return {
    props: {
      today:responseToday.data,
      token:responseToken.data
    }, 
  }
}
export default Home
