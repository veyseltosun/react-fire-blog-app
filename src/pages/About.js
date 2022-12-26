import React from 'react'

const data = [
  { id: 1, p: "🔭 I’m currently working on frontend and mobile app development (JavaScript | React | React Native)" },
  { id: 2, p: "🌱 I’m currently learning backend development (Node.js | MongoDB | Django)" },
  { id: 3, p: "💬 Ask me about anything that you want to learn" },
]

const About = () => {

  return (
    <div style={{ marginTop: "100px", marginBottom:"100px", marginRight:"300px", textAlign:"center" , alignItems:"flex-start"}}>
      {data.map((par) => {
        const {id, p} = par;
        return(

          <p key={id} >{p}</p>

        )
      })}
    </div>
  )
}

export default About