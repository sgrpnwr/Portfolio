import styles from "./Projects.module.css";
const Project = (props) => {
    window.scrollTo(0, 0);

  return (
      <>
    <div className={styles.project}>
      <div className={styles.projectinfo}>
        <h3>{props.project.title}</h3>
        <p className={styles.tech}>
          <em>
            <i className={props.project.icon}></i> {props.project.tech}
          </em>
        </p>
        <p className={styles.info}>{props.project.info}</p>
        <form target="_blank" action={props.project.link}>
          <button className="btn btn-outline-dark">
            <i className="fas fa-share-square"></i> See Project
          </button>
        </form>
        <form target="_blank" action={props.project.github}>
          {props.project.github.trim().includes("https") ? (
            <button className="btn btn-outline-dark">
              <i className="fab fa-github"></i> Github
            </button>
          ) : (
            <p></p>
          )}
        </form>
      </div>
      
      <div className={styles.projectimg}>
      <img src={props.project.image} alt=""></img>

      </div>
    </div>
    <hr></hr>
    </>
  );
};

export default Project;
