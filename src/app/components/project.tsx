import { headerItems, projects } from "../constants/constant";
import Image from "next/image";

const Projects: React.FunctionComponent = () => {
  return (
    <section
      id={headerItems.projects.page}
      className="h-screen flex flex-col text-center justify-center items-center my-40"
    >
      <h1 className="text-6xl my-6">Projects</h1>
      <div className="flex  text-center justify-center items-center flex-colc ">
        {Object.keys(projects).map((key) => (
          <Image
            key={key}
            src={projects[key as keyof typeof projects].image}
            alt="projects"
            width={400}
            height={400}
            className=" mt-4 p-2"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;


