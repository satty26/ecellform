import "./styles.css";
import topLeftGradient from "./images/Asset 2.svg";
import bottomRightGradient from "./images/Asset 1.svg";
import LeftCard from './components/left-card.jsx';
import RightCard from './components/right-card.jsx';

function App() {
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="1000">
      <img className="asset-2" src={topLeftGradient} alt="Design-shape" />
      <img className="asset-1" src={bottomRightGradient} alt="Design-shape" />
      <LeftCard />
      <RightCard />
    </div>
  );
}

export default App;
