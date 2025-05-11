import { ExternalLink } from 'lucide-react';

interface ProjectLink {
  url: string;
  label: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  links?: ProjectLink[];
}

const ProjectCard = ({ title, description, links }: ProjectCardProps) => {
  return (
    <div
      className="border border-gray-300 dark:border-gray-700 p-4 h-full"
    >
      <h3 className="text-xl font-semibold font-header mb-2">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 font-ibm">
        {description}
      </p>
      {links && links.length > 0 && (
        <div className="flex flex-wrap space-x-4">
          {links.map((link, index) => (
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
      )}
    </div>
  );
};

export default ProjectCard;
