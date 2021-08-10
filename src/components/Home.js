import style from "./Home.module.css";
import {Link} from "react-router-dom";
const Home = () => {
  window.scrollTo(0, 0);

  return <div className={style.container}>


      <img className={style.dp} src="https://i.ibb.co/dmG6nvb/sagar-black.png" alt="" height="500" ></img>
      <div className={style.content}>
          <h1>Hello</h1>
          <h4 className={style}>A Bit About Me</h4> 
          <p> Taking small steps towards my big aspirations, I am a <b>Frontend Developer </b> with a keen sense of perfection in the work that I do. I am an avid <b>Photographer</b>, and love making pictures anywhere and everywhere I go. <a href="/contact">Hit me up</a>, I can center a div for you</p>
            <div className={style.circles}>
            <Link style={{ textDecoration: 'none' }} to="/projects"><div className={`${style.circle} ${style.fep}`}>WEB Projects</div></Link>
            <Link style={{ textDecoration: 'none' }} to="/photography"><div className={`${style.circle} ${style.photography}`}>Photography</div></Link>
            <Link style={{ textDecoration: 'none' }} to="/contact"><div className={`${style.circle} ${style.contact}`}>Contact</div></Link>
            </div>
      </div>
      
  </div>;
};
export default Home;
