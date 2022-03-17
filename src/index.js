import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import Quiz from './screens/Quiz'
import reportWebVitals from './reportWebVitals'
<<<<<<< HEAD
import { Auth0Provider } from "@auth0/auth0-react";
=======
import App from './App'
>>>>>>> dev

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider 
      domain="dev-lb3zdv8j.us.auth0.com"
      clientId="XTMCBFDqZPVMzypH15VE8qYYzY6F0jnA"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
