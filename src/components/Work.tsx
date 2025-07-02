import { ProjectCard } from "./ProjectCard";

const works = [
  {
    imgSrc: "https://i.ibb.co/n8C8N3W1/SKINET.jpg",
    title: "Full stack eCommerce web",
    tags: ["API", "MVC", "Payment Platform"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "https://i.ibb.co/jkL9ZMM4/blog.jpg",
    title: "Full stack blog site",
    tags: ["API", "SPA", "MVC"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "https://i.ibb.co/fzhD7rt9/ARCHIVOREGIONAL.jpg",
    title: "Sistema de gestión de información",
    tags: ["MVC", "Mini-ERP"],
    projectLink: "",
  },
  // {
  //   imgSrc: "/images/project-4.jpg",
  //   title: "Real state website",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee-org/wealthome",
  // },
  // {
  //   imgSrc: "/images/project-5.jpg",
  //   title: "eCommerce website",
  //   tags: ["eCommerce", "Development"],
  //   projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  // },
  // {
  //   imgSrc: "/images/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  // },
];

export const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Mi portafolio</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
