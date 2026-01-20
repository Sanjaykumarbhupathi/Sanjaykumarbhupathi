import React from 'react';
import Image from 'next/image';
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Image
        src={image}
        alt={title}
        height={512}
        width={400}
        className="w-full h-128 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-gray-900 dark:bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center px-4 text-center">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 dark:text-gray-300 mb-4 text-sm">{description}</p>
        <div className="flex gap-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            View Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
