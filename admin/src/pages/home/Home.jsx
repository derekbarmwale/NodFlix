import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import {userData} from '../../dummyData'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { useMemo } from "react";
import './home.css'

export default function Home() {
  const MONTHS = useMemo(() => ["January","February","March","April","May","June","July",
  "August","September","October","November","December"],[]);

  const[userStats, setUserStats] = useState([])

  useEffect(() =>{
    const getStats = async () =>{
      try{
        const res = await axios.get("/users/stats",
          {
            headers:{
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWQ5OGNlY2VmNGQ2YjY5NzFmNmQ3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjU5ODM1MywiZXhwIjoxNjU3MDMwMzUzfQ.LKCqP2KCjVqCYJgj3a5RCBe0BnkC9wWpjVA0mEcaMXE"
            },
          }
        )
        const statsList = res.data.sort(function(a,b) {
          return a._id - b._id
        })
        statsList.map(item=> setUserStats(prev=>[...prev,{name:MONTHS[item._id-1], "New User":item.total}]))
      }catch(error){
        console.log(error)
      }
    }
    getStats()
  },[MONTHS])

  console.log(userStats)
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
        <div className="homeWidget">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}