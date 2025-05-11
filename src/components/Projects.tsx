import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Heal.in",
      description: "An application crafted to empower users with tools and resources for self-improvement and mental well-being",
      links: [
        { url: "https://github.com/yashrtalele/heal.in-server", label: "Server" },
        { url: "https://github.com/yashrtalele/heal.in-client", label: "Client" },
      ]
    },
    {
      title: "Expense Tracker",
      description: "Track expenses in MERN stack with DevOps precision-powered by Jenkins, Docker, Kubernetes, and live insights through Grafana.",
      links: [
        { url: "https://github.com/yashrtalele/expense_tracker", label: "GitHub" },
      ]
    },
    {
      title: "ArgoCD",
      description: "Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.",
      links: [
        { url: "https://github.com/argoproj", label: "Argo Proj" },
      ]
    }
  ];

  return (
    <section className="py-10">
        <h2 className="inline-block bg-black dark:bg-white text-white dark:text-black px-2 mb-10 text-2xl font-header font-bold">
          Projects / Open Source
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              links={project.links}
            />
          ))}
        </div>
    </section>
  );
};

export default Projects;
