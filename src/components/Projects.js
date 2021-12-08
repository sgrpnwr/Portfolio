import styles from "./Projects.module.css";
import Project from "./Project"

const allProjects=[

{
    title:"Music Player",
    info: "Made a music player with the interactive UI for the easy access for user.This application can be used to play mp3 songs. Apart from standard music player features, also worked on some extra features such as Autoplay/Loop.",
    image:"https://i.ibb.co/x7Yrh8f/music.png",
    link:"https://sgrpnwr.github.io/MusicPlayer",
    tech:"JQuery",
    github:"https://github.com/sgrpnwr/MusicPlayer",
    icon:"fab fa-js-square"
},
{
    title:"Recipe App",
    info: "Fetched data from edamam API and rendered all the data using ReactJS.",
    image:"https://i.ibb.co/Nsmm0Cg/recipe.png",
    link:"https://recipeapp-2c554.web.app",
    tech:"ReactJS",
    github:"https://github.com/sgrpnwr/recipesearch",
    icon:"fab fa-react",
},
{
  title:"Todo List App",
  info: "Made a standard Todo List app using ReactJS and CSS animations",
  image:"https://i.ibb.co/6sz40Hq/todoicon.png",
  link:"https://todolist-117b5.web.app",
  tech:"ReactJS",
  github:"https://github.com/sgrpnwr/Todo-List",
  icon:"fab fa-react",
},
{
    title:"NewsLetter Signup using MailChimp API",
    info: "Posted data using MailChimp API. Allowed the user to submit a form by entering their name and email address.After the successfully submission, the user will be subscribed to the newsletter",
    image:"https://i.ibb.co/fQhyZZP/mailchimp.png",
    link:"https://boiling-sierra-02890.herokuapp.com/",
    tech:"NodeJS",
    github:"https://github.com/sgrpnwr/covidtracker",
    icon:"fab fa-node fa-lg",
},
{
    title:"Movie Blog Website",
    info: "Allowed the user to post a movie recommendation via HTML form and rendered the home page with the updated list of movie recommendation using EJS, Added extra feature to read the full review on the separate page using Router parameter in NODE JS.",
    image:"https://i.ibb.co/nzbTGhK/dd.png",
    link:"https://dry-reef-34137.herokuapp.com/",
    tech:"NodeJS",
    github:"",
    icon:"fab fa-node fa-lg",
},




]

const Projects = () => {
  window.scrollTo(0, 0);

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
