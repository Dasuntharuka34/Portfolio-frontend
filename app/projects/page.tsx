import Header from '@/components/Header';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Document tracking system',
    description: 'A full-stack application built to solve the real-world problem of inefficient, manual document processing. This system provides a centralized platform for secure document submission, automated routing, and real-time tracking through configurable, multi-step approval workflows.',
    link: 'https://find-my-docs-frontend.vercel.app',
    technologies: ['React', 'Node.js', 'MongoDB', 'Vercel'],
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project showcases advanced front-end development techniques and a clean user interface.',
    link: '#',
    technologies: ['TypeScript', 'Node.js', 'Express.js'],
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three. This is a full-stack application that demonstrates both front-end and back-end skills.',
    link: '#',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
];

const ProjectCard = ({ title, description, link, technologies }: typeof projects[0]) => (
  <div className="bg-background/50 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-2xl font-bold mb-2 text-blue-600">{title}</h3>
    <p className="text-foreground/80 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech) => (
        <span key={tech} className="bg-blue-500/10 text-blue-500 text-sm font-medium px-3 py-1 rounded-full">
          {tech}
        </span>
      ))}
    </div>
    <a href={link} className="font-medium text-blue-600 hover:underline">
      View Project &rarr;
    </a>
  </div>
);

export default function Projects() {
  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="projects" className="py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Feel free to explore them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
