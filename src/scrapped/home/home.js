import "./home.css";
import develop from "../../assets/images/development.jpg";
import design from "../../assets/images/design.jpg";
import market from "../../assets/images/marketing.jpg";


const home = () => {
  return (
    <>
      <div className="home-development">
        <p id="home-animate-text1">Development</p>
        <img className="home-img develop" src={develop} alt="develop"></img>
      </div>
      <div className="home-designing">
        <p id="home-animate-text2">Designing</p>
        <img className="home-img design" src={design} alt="design"></img>
      </div>
      <div className="home-marketing">
        <p id="home-animate-text3">Marketing</p>
        <img className="home-img market" src={market} alt="market"></img>
      </div>
      <div id="overlay"></div>
    </>
  );
};

export default home;
