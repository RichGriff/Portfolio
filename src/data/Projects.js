import exploreImg from "../images/explore_screen.png";
import netflixImg from "../images/netflix_screen.png";
import portfolioImg from "../images/portfolio.png";
import proshopImg from "../images/proshop_screen.png";

export const Projects = [
  {
    title: "Explore",
    desc: "Landing page website for a fictious online travel company, listing out some top travel destinations and services they provide.",
    screen: exploreImg,
    tools: ["React", "Gatsby", "GraphQL", "Styled Components"],
    githubUrl: "https://github.com/RichGriff/travel-site",
    demoUrl: "https://gracious-brattain-546008.netlify.app/",
    imageFirst: false
  },
  {
    title: "Netflix Clone",
    desc: "Simple web application built to mimic the Netflix website using React to list out movies from an API. Potential to build on this site by adding the ability for user to login and save movies to their list.",
    screen: netflixImg,
    tools: ["React", "Firebase", "Movies API"],
    githubUrl: "https://github.com/RichGriff/netflix-clone",
    demoUrl: "https://netflix-clone-5966a.web.app/",
    imageFirst: true
  },
  {
    title: "Proshop",
    desc: "Online ecommerce website around selling electronic devices. Users can sign up and add products to their cart before purchasing them with a sandbox paypal account. Admins can update products and orders made on the site.",
    screen: proshopImg,
    tools: ["React", "Redux", "Node JS", "MongoDB", "Web API"],
    githubUrl: "http://github.com",
    demoUrl: "http://google.com",
    imageFirst: false
  },
  {
    title: "Portfolio Website",
    desc: "Portfolio website built to showcase some recent front end development projects using various technologies.",
    screen: portfolioImg,
    tools: ["React", "GSAP Animations", "Adobe XD"],
    githubUrl: "https://github.com/RichGriff/Portfolio",
    demoUrl: "https://richardgriffiths-portfolio.netlify.app/",
    imageFirst: true
  }
];
