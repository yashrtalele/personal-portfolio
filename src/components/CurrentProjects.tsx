import { ExternalLink } from "lucide-react";

const CurrentProjects = () => {
  const projects = [
    {
      title: "Not-Uber",
      description: {
        main: "End-to-end development of ride hailing application with real-time ride notifications, live location tracking, seamless payments, and in-app messaging with voice call support. Built on a scalable architecture and powered by a complete DevOps pipeline.",
        technologies: "Expo · Node.js · Socket.IO · PostgreSQL · Redis · RabbitMQ · Kafka · Docker · Kubernetes · Nginx"
      },
      links: [
        { url: "https://github.com/yashrtalele/not-uber-backend", label: "Server" },
        { url: "https://github.com/yashrtalele/not-uber-user-frontend", label: "Client" },
      ]
    },
    {
      title: "Crypto-Subs",
      description: {
        main: "Crypto Subs is a decentralized platform for creators to offer exclusive content via crypto-based subscriptions with transparent access control through smart contracts.",
        technologies: "Solana · Anchor · React · Clerk · Node.js · PostgreSQL · Prisma · IPFS · Docker · Kubernetes · CI/CD (Jenkins)"
      },
      links: [
        { url: "https://github.com/yashrtalele/crypto-subs", label: "GitHub" }
      ]
    }
  ];

  return (
    <section className="py-8">

      <h2 className="inline-block bg-black dark:bg-white text-white dark:text-black px-2 mb-6 text-2xl font-header font-bold">
        What am I building?
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-8 last:border-0 last:pb-0">
            <h3 className="text-xl font-semibold font-header mb-2">{project.title}</h3>

            <div className="mb-2">
              <p className="text-sm font-ibm text-gray-700 dark:text-gray-300">
                {project.description.main}
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold font-ibm mb-1">Technologies:</div>
              <p className="text-sm text-gray-700 font-ibm dark:text-gray-300 mb-2">
                {project.description.technologies}
              </p>
            </div>
            <div className="flex flex-wrap space-x-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center text-xs hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <ExternalLink size={12} className="ml-1" />
                </a>
              ))}

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CurrentProjects;
