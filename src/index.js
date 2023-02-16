import react from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css'

// icon of app
const link = document.createElement("link");
link.rel = "shortcut icon";
link.href = "./images/honey-bee.ico";

document.head.appendChild(link);



const root = ReactDOM.createRoot ( document.getElementById ( "root" ) )

root.render ( <BrowserRouter>
    <App/>
</BrowserRouter> );
// ReactDOM.render ( <App/> , document.getElementById ( "root" ) );