import React from 'react'
import style from "./Dashboard.module.scss"
const Dashboard = ({children}) => {
    const colors = ["black","red","blue","green"]
  return (
    <div className={style.container}>
        {children}
    </div>
  )
}

export default Dashboard