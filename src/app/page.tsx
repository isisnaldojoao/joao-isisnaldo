'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png',
    '/logo7.png',
    '/logo8.png',
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [images.length]);

  const project = [
    {
      id: 1,
      title: 'MY TODO LIST',
      image: 'https://dev-portifolio-gold.vercel.app/assets/p-3.jpeg',
      github:'https://github.com/isisnaldojoao/todo_list',
      description:
        'The project was made in order to practice some concepts about React Hooks. todolist was made using localstorage for a better experience.',
    },
    {
      id: 2,
      title: 'DEV CLIMA',
      image: 'https://dev-portifolio-gold.vercel.app/assets/p-4.jpeg',
      github:'https://github.com/isisnaldojoao/project_weather',
      description:
        'During this project I had the opportunity to study the concepts of API requests. Two APIs were requested, one for the weather and the other so that as soon as the city was informed to check the weather, the background would be changed.',
    },
  ];

  return (
    <main>
      {/* Section 1 */}
      <section className="bg-black text-white flex flex-col items-center justify-center min-h-screen w-full px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="lg:text-8xl text-4xl p-5">
            <h1>Hello,</h1>
            <h2>
              I am <span className="text-green-500 font-bold">João Isisnaldo</span>
            </h2>
            <h2 className="fullstack-animation text-2xl lg:text-8xl">Fullstack developer</h2>
          </div>
          <h2 className="hidden lg:block md:w-1/2 lg:w-1/3 text-xl lg:text-2xl mt-4 lg:mt-0">
            With one year of experience, focused on creating innovative and responsive interfaces to meet the needs of your project.
          </h2>
        </div>
      </section>


      {/* Section 2 */}
      <section className="flex items-center min-h-screen w-full px-4" id="about">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-4xl sm:text-6xl lg:text-8xl p-5">
            <h1 className="font-bold text-green-500">ABOUT ME:</h1>
          </div>
          <p className="w-full sm:w-2/3 lg:w-1/2 text-lg sm:text-xl lg:text-2xl px-4 mt-4">
            Hello! I'm João Isisnaldo, and since childhood, my fascination with technology led me to create blogs on Blogspot,
            where I explored HTML, CSS and JS to customize templates. Now, at 22 years old, I'm ready to apply my passion and
            experience in freelance projects of creating websites and web systems. I constantly study in order to improve and
            follow market trends, so that I can generate better performance for the user in my projects.
          </p>
         <div className="container mt-8">
            <ul className="logos flex overflow-x-auto space-x-4 sm:space-x-6">
              {images.map((image, index) => (
                <li key={index} className={currentIndex === index ? 'active' : ''}>
                  <img src={image} alt={`Logo ${index + 1}`} className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
                </li>
              ))}
            </ul>
          </div> 
        </div>
      </section>


      {/* Section 3 */}
      <section className="bg-green-500 flex items-center justify-center min-h-screen w-full px-4 " id="projects">
        <div className="text-4xl lg:text-8xl text-left p-5">
          <h1 className="mt-[80px] font-bold text-black">MY PROJECTS_:</h1>
        </div>
        <div className="flex flex-col mt-[80px] justify-center items-center">
          {project.map((proj) => (
            <div key={proj.id} className="flex flex-col w-full sm:w-80 lg: m-5">
              <h1 className="font-bold  text-xl lg:text-2xl">{proj.title}</h1>
              <img className='w-[500px] h-[150px] rounded-lg  transition-all cursor-pointer hover:scale-90 ' src={proj.image}/>
              <p className="text-sm lg:text-base mt-2">{proj.description}</p>
              <a
                target="_blank"
                href={proj.github}
                className="w-[200px] bg-green-800 text-white p-2 rounded-lg mt-4 text-center"
              >
                Project GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-black text-white flex flex-col items-center justify-center min-h-screen w-full px-4" id="contact">
        <div className="text-left p-5">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Do you have a project in mind? I can help you! Contact methods:
          </h1>
          <div className="flex flex-col w-full sm:w-2/3 lg:w-[500px] gap-5 mt-6 lg:flex-row">
            <div className="h-[100px] flex items-center bg-green-600 p-5 transition-all rounded-lg cursor-pointer hover:scale-90">
              <img className="mr-2 w-10 h-10" src="/github.svg" />
              <h2 className="text-xl font-bold">/isisnaldojoao</h2>
            </div>
            <div className="h-[100px] flex items-center bg-green-600 p-5 transition-all rounded-lg cursor-pointer hover:scale-90">
              <img className="mr-2 w-10 h-10" src="/linkedin.svg" />
              <h2 className="text-xl font-bold">/joao-isisnaldo</h2>
            </div>
          </div>
        </div>
    </section>

    </main>
  );
}
