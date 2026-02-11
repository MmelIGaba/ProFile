import ProjectScroll from "../components/ProjectScroll";

export default function Projects() {
  return (
    <section id="projects" className="h-screen bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <ProjectScroll />
    </section>
  );
}
