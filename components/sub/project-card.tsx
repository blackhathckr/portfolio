import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  type: string;
  technologies: string[];
  category: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  type,
  technologies,
  category,
}: ProjectCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "full-stack":
        return "from-blue-500 to-purple-600";
      case "ai-ml":
        return "from-green-500 to-teal-600";
      case "ar-vr":
        return "from-pink-500 to-rose-600";
      default:
        return "from-orange-500 to-red-600";
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0C0C0C] hover:shadow-2xl transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(category)} text-white`}>
            {type}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-[#1A1A1A] text-gray-300 rounded-md border border-[#2A0E61]"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2 py-1 text-xs bg-[#1A1A1A] text-gray-400 rounded-md border border-[#2A0E61]">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* View Project Button */}
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
        >
          View Project
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};