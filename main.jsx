import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
 React.createElement(
  "div",
  {className:"main-cont"},
  React.createElement("h4",{className:"loginto"},"Log Into Facebook"),
  React.createElement("input",{type:"mail",placeholder:"enter your email",className:"inp1"}),
  React.createElement("input",{type:"password",placeholder:"enter your password",className:"inp2"}),
  React.createElement("button",{className:"btn"},"Log In")
  
 ),
 
)
