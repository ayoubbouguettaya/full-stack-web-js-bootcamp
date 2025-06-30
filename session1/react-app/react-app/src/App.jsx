import Main from "./components/main"
import Navbar from "./components/navbar"
import Sidbar from "./components/sidebar"
import "./App.css"

const App = () => {

  return (<div>

    <Navbar userName="dsdss"  />        
    <div className="container">
      <Sidbar />
      <Main />
    </div>

  </div>)

}

export default App