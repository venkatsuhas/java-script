import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import {BookContextProvider} from './components/BookContext'

ReactDOM.render(
    <div>
      <BookContextProvider>

        <App/>
      </BookContextProvider>

    </div>,document.getElementById("root")
)