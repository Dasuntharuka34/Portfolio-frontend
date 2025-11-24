import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="about" className="py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg font-bold text-foreground/80 mb-8 max-w-2xl mx-auto">
              A little bit about my journey, my passion for technology, and what drives me.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/profilePicture2.jpeg"
                alt="Dasun Tharuka"
                width={400}
                height={400}
                className="rounded-full shadow-lg"
                loading="eager"
              />
            </div>
            <div className="md:w-1/2 text-lg text-foreground/80">
              <p className="mb-4">
                Hello! I&apos;m Dasun Tharuka, a computer science undergraduate with a strong passion for developing innovative software solutions. My journey in the world of programming started with a simple &quot;Hello, World!&quot; and has since grown into a full-fledged passion for building applications that can make a difference.
              </p>
              <p className="mb-4">
                I am proficient in a variety of technologies including React, Next.js, and TypeScript for front-end development, and Node.js for back-end systems. I enjoy tackling complex problems and turning ideas into reality through code.
              </p>
              <p>
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and reading about the latest trends in the tech industry. I am always eager to learn and grow as a developer.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
