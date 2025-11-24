import Header from '@/components/Header';
import Footer from '@/components/Footer';

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Leravel'],
  backend: ['Node.js', 'Express.js'],
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  tools: ['Git', 'Docker', 'ESLint'],
};

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-background/50 rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-bold mb-4 text-blue-600">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-blue-500/10 text-blue-500 text-sm font-medium px-4 py-2 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="skills" className="py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
              A collection of technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard title="Frontend" skills={skills.frontend} />
            <SkillCard title="Backend" skills={skills.backend} />
            <SkillCard title="Languages" skills={skills.languages} />
            <SkillCard title="Tools & Platforms" skills={skills.tools} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
