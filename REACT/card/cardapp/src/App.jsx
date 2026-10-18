import {Card} from './Card'
function App() {


  const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Crafting engaging and user-friendly websites for modern businesses.",
    tags: ["Landing Page", "Website", "One Page"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces.",
    tags: ["Figma", "Prototype", "Wireframe"],
  },
  {
    id: 3,
    title: "Frontend Development",
    description: "Building fast, responsive, and interactive web applications.",
    tags: ["React", "JavaScript", "Tailwind"],
  },
  {
    id: 4,
    title: "Backend Development",
    description: "Developing secure and scalable REST APIs and server-side applications.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: "Mobile App",
    description: "Creating cross-platform mobile applications with Flutter and React Native.",
    tags: ["Flutter", "Android", "iOS"],
  },
  {
    id: 6,
    title: "SEO Optimization",
    description: "Improving website visibility and search engine rankings.",
    tags: ["SEO", "Analytics", "Marketing"],
  },
  {
    id: 7,
    title: "Cloud Services",
    description: "Deploying and managing applications on cloud platforms.",
    tags: ["AWS", "Azure", "Docker"],
  },
  {
    id: 8,
    title: "E-Commerce",
    description: "Building scalable online stores with secure payment integration.",
    tags: ["Shopify", "Stripe", "React", "Dart"],
  },
];

 console.log("(grandfather)form app.jsx")
 console.log(services)
  return (
    <>
<Card data={services} ></Card>
    </>
  )
}

export default App;
