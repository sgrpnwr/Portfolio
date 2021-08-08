import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.contactbox}>
      <div className={style.card}>
        <div className={style.top}>
          <div className={style.picture}>
            <img src="dp.png" alt=""></img>
          </div>
          <div className={style.contact_methods}>
            <form target="_blank" action="https://wa.me/+918629010215/?text=Hey Sagar!">
              <button>
                <i class="fab fa-whatsapp fa-3x"></i>
                Whatsapp
              </button>
            </form>
            <form target="_blank" action="tel:8629010215">
              <button>
                <i class="fas fa-phone-alt fa-3x"></i>
                   Call
              </button>
            </form>
            <form target="_blank" action="mailto:sagarpanwarsd@gmail.com">
              <button>
                <i class=" fas fa-envelope-open-text fa-3x"></i>
                E-mail
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
