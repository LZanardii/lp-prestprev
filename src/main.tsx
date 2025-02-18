import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from 'src/pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { APIProvider } from "@vis.gl/react-google-maps";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <APIProvider apiKey={"AIzaSyCPC4wTuAmLszYGEcpgkwHjz8uvrYlmx08"}>
      <Home />
    </APIProvider>
  </React.StrictMode>,
)
