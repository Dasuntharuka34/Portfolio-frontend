'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="bg-background font-sans text-foreground">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section id="hero" className="py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-extrabold tracking-tight text-blue-600 sm:text-6xl md:text-7xl">
                Hello, I&apos;m Dasun Tharuka
              </h1>
              <p className="mt-6 text-xl text-foreground/80 max-w-2xl mx-auto md:mx-0">
                A passionate Computer Science undergraduate building innovative solutions and exploring the world of technology.
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-foreground/20 text-base font-medium rounded-md text-blue-600 bg-background hover:bg-background/50"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <Image
                src="/images/profilePicture2.jpeg"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full border-4 border-blue-600"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-background rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Document tracking system</h3>
                <p className="text-foreground/80 mb-4">
                  A full-stack application built to solve the real-world problem of inefficient, manual document processing. This system provides a centralized platform for secure document submission, automated routing, and real-time tracking through configurable, multi-step approval workflows.
                </p>
                <a href="https://find-my-docs-frontend.vercel.app" className="font-medium text-blue-600 hover:underline">
                  View Details &rarr;
                </a>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-background rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
                <p className="text-foreground/80 mb-4">
                  A brief description of the project, its purpose, and the technologies used.
                </p>
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  View Details &rarr;
                </a>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-background rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title 3</h3>
                <p className="text-foreground/80 mb-4">
                  A brief description of the project, its purpose, and the technologies used.
                </p>
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  View Details &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-background/50 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Java', 'SQL', 'Docker', 'Git'].map((skill) => (
              <span key={skill} className="bg-blue-500/10 text-blue-500 text-sm font-medium px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect!</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
