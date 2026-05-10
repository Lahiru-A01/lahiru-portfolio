import Image from 'next/image';
import { Mail, Code2, BookOpen, Cpu, ExternalLink } from 'lucide-react';

function GitHubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      
      {/* HERO SECTION */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-200">
            <Image 
              src="/lahiru.jpg" 
              alt="Jayasinghe Achchige Lahiru Avishka" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm Lahiru
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
              Computer Science & Engineering @ DTU
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              <a href="https://github.com/Lahiru-A01" target="_blank" className="text-slate-600 hover:text-blue-500 transition-colors">
                <GitHubIcon size={26} />
              </a>
              <a href="https://www.linkedin.com/in/lahiruavishka" target="_blank" className="text-slate-600 hover:text-blue-500 transition-colors">
                <LinkedInIcon size={26} />
              </a>
              <a href="mailto:lahiruavishka01@gmail.com" className="text-slate-600 hover:text-blue-500 transition-colors">
                <Mail size={26} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-24 pb-24 text-left">
        
        {/* ABOUT SECTION */}
        <section id="about" className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 uppercase tracking-wide">
            <BookOpen className="text-blue-500" size={24} /> About
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              I’m passionate about both AI-driven technologies and modern web development. I enjoy exploring areas like artificial intelligence, computer vision, and machine learning while also building clean, responsive, and interactive frontend experiences.
            </p>
            <p>
              I’m especially interested in combining AI with web technologies to create smarter and more impactful digital products. I’m constantly learning and challenging myself with projects that help me grow as both a developer and problem solver.
            </p>
          </div>
        </section>

        {/* TECH STACK */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 uppercase tracking-wide">
            <Cpu className="text-blue-500" size={24} /> Technical Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-blue-600 uppercase text-xs tracking-widest">AI & Vision</h3>
              <ul className="space-y-2 text-sm font-medium opacity-80">
                <li>PyTorch • Scikit-learn</li>
                <li>OpenCV • MediaPipe</li>
                <li>BlazeFace</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-blue-600 uppercase text-xs tracking-widest">Web Development</h3>
              <ul className="space-y-2 text-sm font-medium opacity-80">
                <li>React • Next.js</li>
                <li>Tailwind CSS • JavaScript</li>
                <li>HTML • CSS</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-blue-600 uppercase text-xs tracking-widest">Languages & DB</h3>
              <ul className="space-y-2 text-sm font-medium opacity-80">
                <li>C • C++ • Python</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WORKING SAMPLES */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 uppercase tracking-wide">
            <Code2 className="text-blue-500" size={24} /> Working Samples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 transition-all shadow-sm">
              <h3 className="text-xl font-bold mb-2 uppercase">Expression-Invariant Face Recognition System</h3>
              <p className="text-xs text-blue-600 font-semibold mb-4">AI / Computer Vision</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                A modular system utilizing BlazeFace for detection and Affine Transformations for facial alignment and identity matching.
              </p>
              <a href="https://github.com/Lahiru-A01" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold group-hover:text-blue-500">
                View Repository <ExternalLink size={14} />
              </a>
            </div>
            <div className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 transition-all shadow-sm">
              <h3 className="text-xl font-bold mb-2 uppercase">ZYLA Branding</h3>
              <p className="text-xs text-blue-600 font-semibold mb-4">E-commerce / Design</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                Gen Z-focused fashion branding centering on Western street aesthetics and Instagram marketing strategies.
              </p>
              <a href="https://ecommerce-app-eight-rouge.vercel.app/" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-500">
                View Project <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem]">
          <h2 className="text-2xl font-bold mb-10 uppercase tracking-wide">EDUCATION</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-bold">Delhi Technological University (DTU)</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium italic">B.Tech in Computer Science and Engineering</p>
              <p className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-bold">Undergraduate</p>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700">
              <div className="absolute w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-bold">Bandaranayake College Gampaha</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium italic">G.C.E Advanced Level - Physical Science Stream (2020)</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-20 bg-slate-900 text-white rounded-[3rem] overflow-hidden">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wide">{"Let's Connect"}</h2>
          <p className="mb-10 text-slate-400 max-w-sm mx-auto">
            {"I'm open to collaborations in AI research and Modern Web development."}
          </p>
          <a href="mailto:lahiruavishka01@gmail.com" className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform inline-block">
            Get in Touch
          </a>
        </footer>

      </main>
    </div>
  );
}