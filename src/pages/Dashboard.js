import React from 'react'

import CardList from '../components/CardList'

const dumyData = [1,2,3,4,5]

const Dashboard = () => {
  const [favored, setFavored] = React.useState(false);
  const handleFavored = () => {

    setFavored((prev) => !prev);
};
console.log(favored)
   
  return (
    <div style={{display: "flex", flexDirection:"row" }}>
      <CardList dumyData={dumyData} favored={favored} setFavored={setFavored} handleFavored={handleFavored}/>
    </div> 
  )
}

export default Dashboard