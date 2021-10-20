import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Header from "./components/Header";
import HeaderCard from "./components/HeaderCard";
import Service from "./components/Service";
import ProjectStatistics from "./components/ProjectStatistics"
import Pricing from "./components/Pricing"
import Customers from "./components/Customers"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Topbtn from "./components/Topbtn"
function App() {
  return (
    <>
      <Header />
      <HeaderCard />
      <Service />
      <ProjectStatistics/>
      <Pricing/>
      {/* <Customers/> */}
      <Contact/>
      <Footer/>
      <Topbtn/>
    </>
  );
}

export default App;
