import style from "./Contact.module.css";
const Contact = () => {
    window.scrollTo(0, 0);

  return (
    <div className={style.contactbox}>
      <div className={style.card}>
        <div className={style.top}>
          <div className={style.picture}>
            <img src="https://i.ibb.co/dmG6nvb/sagar-black.png" alt=""></img>
          </div>
          <div className={style.contact_methods}>
            <form target="_blank" action="https://wa.me/+918629010215/?text=Hey Sagar!">
              <button className={`${style.whatsapp} ${style.contactbtn} `}>
                <i class="whatsapp fab fa-whatsapp fa-2x"></i>
              </button>
            </form>
            <form target="_system" action="https://instagram.com/sagar_panwar">
              <button className={`${style.instagram} ${style.contactbtn} `}>
                <i id="insta" class="instagram fab fa-instagram fa-2x"></i>
                   
              </button>
            </form>
            <form target="_system" action="https://linkedin.com/in/sagarpanwarsp">
              <button className={`${style.linkedin} ${style.contactbtn} `}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </button>
            </form>
          </div>
        </div>
        <div className={style.bottom}></div>
      </div>
    </div>
  );
};
export default Contact;
