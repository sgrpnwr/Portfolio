import styles from "./Projects.module.css";
import Project from "./Project"

const info="I'm a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
const allProjects=[

{
    title:"Music Player",
    info: info,
    image:"https://i.ibb.co/x7Yrh8f/music.png",
    link:"https://sgrpnwr.github.io/MusicPlayer",
    tech:"JQuery",
    github:"https://github.com/sgrpnwr/MusicPlayer",
    icon:"fab fa-js-square"
},
{
    title:"Recipe App",
    info: info,
    image:"https://i.ibb.co/Nsmm0Cg/recipe.png",
    link:"https://apnikitchen.herokuapp.com",
    tech:"ReactJS",
    github:"https://github.com/sgrpnwr/recipesearch",
    icon:"fab fa-react",
},
{
    title:"Covid Tracker",
    info: info,
    image:"https://i.ibb.co/MDwF4Kw/covid.png",
    link:"https://cvd19india.herokuapp.com",
    tech:"ReactJS",
    github:"https://github.com/sgrpnwr/covidtracker",
    icon:"fab fa-react",
},
{
    title:"Movie Blog Website",
    info: info,
    image:"https://i.ibb.co/GCR0P6v/movie.png",
    link:"https://polar-sea-60600.herokuapp.com",
    tech:"NodeJS",
    github:"",
    icon:"fab fa-node fa-lg",
},




]

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>

      <div className={styles.containerbox}>
        {allProjects.map(project=><Project project={project}/>)}
        
        
      </div>
    </div>
  );
};
export default Projects;
