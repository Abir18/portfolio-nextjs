"use client";

import {AnimatePresence, motion} from "framer-motion";
import {ExternalLink, Github, Linkedin, Mail} from "lucide-react";
import Image from "next/image";
import {useEffect, useState} from "react";
import {TypeAnimation} from "react-type-animation";
import project3 from "/public/images/Agency-Build-Your-Dream.png";
import project1 from "/public/images/Movie-World-Best-Way-of-Entertaiment.png";
import project2 from "/public/images/Nike-Working.png";
import project4 from "/public/images/bycycle.png";
import project5 from "/public/images/doctor-portal.png";
// import profileImg from "/public/images/Abir.png";
import profileImg1 from "/public/images/my-photo.png";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Movie World",
      description:
        "A full-stack application built with React.js, Express.js & MongoDB.",
      image: project1,
      link: "https://movie-world-full-stack-mern.vercel.app"
    },
    {
      id: 2,
      title: "Shoe Website",
      description:
        "A responsive shoe website built with React.js & Tailwind CSS.",
      image: project2,
      link: "https://nike-react393.netlify.app"
    },
    {
      id: 3,
      title: "Agency Website",
      description: "An Agency Website built with Next.js & Typescript.",
      image: project3,
      link: "https://agency-next-alpha.vercel.app"
    },
    {
      id: 4,
      title: "Bycycle Shop",
      description:
        "A Bycycle Shop Website built with React.js, Node.js & Express.js.",
      image: project4,
      link: "https://bicycle-shop-73272.web.app"
    },
    {
      id: 5,
      title: "Doctor Portal",
      description: "A Doctor Portal built with React.js & Express.js.",
      image: project5,
      link: "https://doctors-portal-4f42a.web.app/"
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white ">
      <header className="p-5 bg-gray-800 sm:px-60">
        <nav className="container mx-auto flex justify-between items-center">
          <motion.h1
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="text-2xl font-bold"
          >
            Rifat Salman Abir
          </motion.h1>
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="flex space-x-4"
          >
            <a
              href="#projects"
              className="hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-10 ">
        <section className="py-20 sm:px-60">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{opacity: 0, x: -50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              className="md:w-1/2 mb-8 md:mb-0 max-sm:order-2"
            >
              <h2 className="text-4xl font-bold mb-4">
                Welcome to My Portfolio
              </h2>
              <div className="mb-6">
                <TypeAnimation
                  sequence={[
                    "I'm a Full Stack Developer",
                    1000,
                    "I'm a UI/UX Enthusiast",
                    1000,
                    "I'm a Problem Solver",
                    1000
                  ]}
                  wrapper="h3"
                  speed={10}
                  className="text-2xl text-gray-300"
                  repeat={Infinity}
                />
              </div>
              <p className="text-gray-300 mb-6 text-xl">
                Passionate about creating beautiful and functional web
                applications. With expertise in modern web technologies, I bring
                ideas to life.
              </p>
              <a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
            <motion.div
              initial={{opacity: 0, x: 50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5, delay: 0.2}}
              className="md:w-1/2 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg max-sm:order-1 max-sm:mb-12">
                <Image
                  src={profileImg1}
                  alt="profileImg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-20 sm:px-6">
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="text-3xl font-bold mb-10 text-center"
          >
            My Recent Works
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{opacity: 0, y: 50}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -50}}
                  transition={{duration: 0.5, delay: index * 0.1}}
                  className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <h4 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm text-gray-300 px-4">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-300 hover:text-blue-300 transition-colors"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <motion.h3
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="text-3xl font-bold mb-10"
          >
            Get in Touch
          </motion.h3>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Abir18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rifat-salman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rifatabir21@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-800 text-center p-4">
        <p>&copy; 2024 Rifat Salman Abir. All rights reserved.</p>
      </footer>
    </div>
  );
}
