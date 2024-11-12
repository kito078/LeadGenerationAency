import "./App.css";
import Case from "./components/Case/Case";
import Contact from "./components/Contact/Contact";
import Facebook from "./components/Facebook/Facebook";
import Footer from "./components/Footer/Footer";
import Generation from "./components/Generation/Generation";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Showcase from "./components/Showcase/Showcase";
import Test from "./components/Testimonial/Test";
import Testimonial from "./components/Testimonial/Testimonial";
import Trusted from "./components/Trusted/Trusted";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container-one cont mxe-auto m-8">
        <Showcase />
        <Trusted />
        <Test />
        <Testimonial />
        <Services />
        <Facebook />
        <Generation />
        <Case />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
