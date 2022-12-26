import React from 'react'
import BlogCard from '../components/BlogCard'

const dumyData = [1,2,3,4,5,6,7,8,9]

const Dashboard = () => {
  const [favored, setFavored] = React.useState(false);

   
  return (
    <div style={{display: "flex", flexDirection:"row" }}>
      {
       dumyData.map((item, index) => {
        return(
          <BlogCard key={index} favored={favored} setFavored={setFavored}/>
        )
       }) 

      }
    </div>
  )
}

export default Dashboard