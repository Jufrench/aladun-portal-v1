import * as React from "react"
import full_white from '../images/full_white.png';
// import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  fontFamily: "sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      {/* <StaticImage src="../images/full_white.png" alt="Aladun Logo" /> */}
      <img alt="Aladun Logo" src={full_white} style={{ display: "block", width: "40%" }} />
      <h1 style={{ color: "#F2AA52", marginTop: "50px", fontSize: "1.5rem" }}>Portal Coming Soon...</h1>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <body style={{ 
        backgroundColor: "#000",
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: 0,
        width: "90%" }}></body>
    <title>Home Page</title>
  </>
)
