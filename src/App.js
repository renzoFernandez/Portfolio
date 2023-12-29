import logo from "./logo.svg";
import "./App.css";

import {
  NavBar,
  AboutMe,
  Skills,
  Work,
  Contact,
  Footer,
  Side,
} from "./Pages/Index";

function App() {
  return (
    <div class="bg-slate-100 ">
      <NavBar />
      <Side />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
