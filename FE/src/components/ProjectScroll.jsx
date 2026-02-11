export default function ProjectScroll() {
  const projects = ["Project A", "Project B", "Project C", "Project D"];

  return (
    <div className="w-full overflow-x-scroll flex gap-6 px-10 py-4">
      {projects.map((p, i) => (
        <div key={i} className="min-w-[250px] h-[150px] bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
          {p}
        </div>
      ))}
    </div>
  );
}
