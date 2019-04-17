import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from "./Joke"

function App() {
  return (
    <div>
      <Joke 
        delivery = {{
                    question: "Hello",
                    punchLine: "This is a joke."
                    }}
      />
    </div>
  )
}

export default App;
