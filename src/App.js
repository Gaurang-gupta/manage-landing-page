import "./App.css"
import Articles from "./components/Articles";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SubFooter from "./components/SubFooter";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Features />
      <Articles />
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
