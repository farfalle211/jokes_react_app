import React from "react"

function Joke(props) {
  return(
    <div>
      <p> {props.delivery.question} </p>
      <p> {props.delivery.punchLine} </p>
    </div>
  )
}

export default Joke