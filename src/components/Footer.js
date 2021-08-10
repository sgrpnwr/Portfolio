import style from "./Footer.module.css";

const Footer = () => {
  window.scrollTo(0, 0);

  return <div className={style.footer}>
      <div className={style.footerinfo}>
        <h3 className={style.infohead}>Phone</h3>

        <p className={style.subtext}>+91-8629010215</p>
      </div>
      <div className={style.footerinfo}>
        <h3 className={style.infohead}>Email</h3>
        <p className={style.subtext}>sagarpanwarsd@gmail.com</p>
      </div>
      <div className={style.footerinfo}>
        <h3 className={style.infohead}>Follow me</h3>
        <p className={style.subtext2}>
          <a href="https://www.linkedin.com/in/sagarpanwarsp"><i class="fab fa-linkedin-in fa-2x"></i></a>
          <a href="https://www.instagram.com/sagar_panwar"><i class="instagram fab fa-instagram fa-2x"></i></a>
        </p>
      </div>
      <div className={style.watermark}>
      <p className={style.subtext}>
© {new Date().getFullYear()} By Sagar Panwar. </p>
        
      </div>
    </div>
  
};
export default Footer;
