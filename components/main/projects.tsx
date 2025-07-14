'use client'

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { useState } from "react";

export const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  const categories = [
    { id: "all", label: "All Projects", count: PROJECTS.length },
    { id: "full-stack", label: "Full Stack", count: PROJECTS.filter(p => p.category === "full-stack").length },
    { id: "ai-ml", label: "AI/ML", count: PROJECTS.filter(p => p.category === "ai-ml").length },
    { id: "ar-vr", label: "AR/VR", count: PROJECTS.filter(p => p.category === "ar-vr").length },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my diverse portfolio of projects spanning full-stack development, AI/ML, and cutting-edge AR/VR technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-[#1A1A1A] text-gray-300 border border-[#2A0E61] hover:border-purple-500/50 hover:text-white"
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                type={project.type}
                technologies={project.technologies}
                category={project.category}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No projects found</div>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always open to discussing new opportunities and innovative projects
            </p>
            <a
              href="mailto:neerajvn1@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get in touch
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};