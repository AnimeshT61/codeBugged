import './App.css';
import Navbar from "./components/Navbar.js"
import Introduction from "./components/Introduction.js"
import Team from './components/Team.js'
import Plans from "./components/Plans.js"
import Template from "./components/Template.js"
import Help from "./components/Help.js"
import Footer from "./components/Footer.js"
import "./index.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction />
      <Template />
      <Team />
      <Plans/>
      <Help />
      <Footer />
    </div>
  );
}

export default App;
