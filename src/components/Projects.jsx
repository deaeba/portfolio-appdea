import ProjectItem from "./ProjectItem";
import blogoffutureImg from "../assets/blogoffuture.jpg";
import evogymImg from "../assets/evogym.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        My projects include different kinds of websites that I built while
        learning coding. Although I am still in the learning process as a junior
        developer, I would like to present these two apps. Being a self-taught
        developer, I find this field exciting and interesting, which makes the
        learning journey more fun and enjoyable.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={blogoffutureImg}
          title="Blog Of Future App"
          infoHref="https://github.com/deaeba/blog-ai-app"
          imgHref="https://blog-ai-app-3kdk.vercel.app/"
        />
        <ProjectItem
          img={evogymImg}
          title="Evogym App"
          infoHref="https://github.com/deaeba/gym-project"
          imgHref="https://dcec021d.gym-project-5yu.pages.dev/"
        />
      </div>
    </div>
  );
};

export default Projects;
