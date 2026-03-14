import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Skydaysctf from "./components/Skydaysctf";
import Questions from "./components/Questions";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <About />
        <Speakers />
        <Sponsors />
        <Skydaysctf />
        <Questions />
      </main>
      <Footer />
    </>
  );
}

export default App;
