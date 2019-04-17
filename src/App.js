import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from "./Joke"

function App() {
  return (
    <div>
      <Joke 
        delivery = {{
                    question: "Knock knock",
                    punchLine: "This is a joke."
                    }}
      />
    </div>
  )
}

export default App;
