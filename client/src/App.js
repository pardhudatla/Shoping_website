import "./App.css";
import Header from "./components/header";
import Carousels from "./components/Carousels";
import Cards from "./components/Cards";
import Summary from "./components/summary";

function App() {
  return (
    <div>
      <div className="div-header">
        <Header />
      </div>
      <div className="carousel-images">
        <Carousels />
      </div>

      <div className="div-cards">
        <div className="cards-images">
          <Cards />
        </div>
      </div>
      <div className="summary-page">
        <Summary />
      </div>
    </div>
  );
}

export default App;
