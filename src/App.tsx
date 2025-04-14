import Nav from './Nav/Nav.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const Subject = "Reaching Out"
  const [message, setMessage] = useState<string>("")

  return (
    <main className="bg-gray-50">
      <Nav />
      {/* Hero Section - Improved layout and typography */}
      <div className="flex min-h-screen flex-col mt-6 sm:flex-row items-center sm:gap-[10%] px-10 bg-gradient-to-br from-white to-sky-50 w-full">
        <div className="sm:order-2 w-full order-1 sm:w-1/2 transition-all hover:scale-[1.02] duration-300">
          <img className='w-full h-auto drop-shadow-lg' src="./Group 1.svg" alt="Developer illustration" />
        </div>
        <div className="sm:order-1 order-2 w-full sm:w-1/2 sm:px-12 px-4">
          <h1 className='font-bold sm:text-5xl text-3xl leading-normal mb-6 text-sky-900 animate-fade-in'>
            Crafting with code to build the future
          </h1>
          <p className='font-medium text-lg text-sky-900 mb-8 opacity-80 leading-relaxed'>
            I am a skilled web developer with a passion for crafting beautiful and functional websites and applications.
          </p>
          <div className="px-6 py-3 rounded-md w-40 grid place-items-center bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg">
            <a href="#hirem" className="font-semibold text-lg text-white no-underline">Hire me</a>
          </div>  
        </div>
      </div>

      {/* Skills Section - Improved and added new skills */}
      <div className="bg-white py-16">
        <h2 className='text-2xl text-sky-900 font-semibold capitalize mb-10 text-center'>Technologies & Skills</h2>
        <section className='w-full flex flex-wrap px-6 sm:px-16 gap-5 justify-center' id="tech">
          {/* Frontend */}
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-html.svg" className='w-full mx-auto h-auto' alt="HTML icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>HTML</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-6">
              <img src="./icons8-css.svg" className='w-full mx-auto h-auto' alt="CSS icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>CSS</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-javascript.svg" className='w-full mx-auto h-auto' alt="JavaScript icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>JavaScript</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-react-native.svg" className='w-full mx-auto h-auto' alt="React icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>React</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-nextjs.svg" className='w-full mx-auto h-auto' alt="Next.js icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>Next.js</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="p-7">
              <img src="./icons8-tailwindcss.svg" className='w-full mx-auto h-auto' alt="Tailwind CSS icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>Tailwind CSS</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-typescript.svg" className='w-full mx-auto h-auto' alt="TypeScript icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>TypeScript</p>
          </div>
          
          {/* Backend */}
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-nodejs.svg" className='w-full mx-auto h-auto' alt="Node.js icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>Node.js</p>
          </div>
          
          {/* AI & ML */}
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-ai.svg" className='w-full mx-auto h-auto' alt="AI icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>AI</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-langchain.svg" className='w-full mx-auto h-auto' alt="LangChain icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>LangChain</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-langgraph.svg" className='w-full mx-auto h-auto' alt="LangGraph icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>LangGraph</p>
          </div>
          
          <div className="border-orange-200 w-[45%] sm:w-1/5 border-2 rounded-md bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="sm:p-7 p-4">
              <img src="./icons8-fastapi.svg" className='w-full mx-auto h-auto' alt="FastAPI icon" />
            </div>
            <p className='text-lg text-center pb-3 text-sky-950 opacity-80 font-medium'>FastAPI</p>
          </div>
        </section>
      </div>

      {/* Projects Section - Improved with better cards */}
      <section id='proj' className="py-16 bg-gray-50">
        <h2 className='text-2xl text-sky-900 font-semibold capitalize mb-10 text-center'>Selected Projects</h2>
        
        <div className='w-full flex flex-wrap px-6 sm:px-16 gap-8 justify-center' id="tools">
          {/* New AI Wingman Chat Project */}
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="img relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg font-medium">
                Featured
              </div>
              <a href="https://chat-ai-eta-drab.vercel.app/">
                <img src="./assets/image.png" alt="AI Wingman Chat App" className="w-full transition-transform hover:scale-105 duration-500" />
              </a>            
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-sky-900">AI Wingman Chat App</h3>
              <p className="text-sky-800 opacity-80 mt-2 mb-4">
                A modern chat application with an AI assistant that helps users communicate better.
                Built with a robust tech stack for a seamless experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">Tailwind</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">Firebase</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">FastAPI</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">LangChain</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">Gemini</span>
              </div>
              <a href="https://ai-wingman-chat.vercel.app" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Existing projects with improved styling */}
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="img relative overflow-hidden">
              <a href="https://newsletter-seven-beige.vercel.app">
                <img src="./Frame 23 (1).svg" alt="Newsletter Page" className="w-full transition-transform hover:scale-105 duration-500" />
              </a>  
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-sky-900">Newsletter Page</h3>
              <p className="text-sky-800 opacity-80 mt-2 mb-4">
                A clean and responsive newsletter subscription page designed for optimal user engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">HTML</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">CSS</span>
              </div>
              <a href="https://newsletter-seven-beige.vercel.app" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="img relative overflow-hidden">
              <a href="https://landin-two.vercel.app">
                <img src="./Frame 24.svg" alt="Room Landing Page" className="w-full transition-transform hover:scale-105 duration-500" />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-sky-900">Room Landing Page</h3>
              <p className="text-sky-800 opacity-80 mt-2 mb-4">
                An elegant landing page for a furniture company with modern design and smooth animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">TypeScript</span>
              </div>
              <a href="https://landin-two.vercel.app" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="img relative overflow-hidden">
              <a href="https://shorten-url-tan.vercel.app">
                <img src="./Frame 25.svg" alt="Shortly Landing Page" className="w-full transition-transform hover:scale-105 duration-500" />
              </a>            
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-sky-900">Shortly Landing Page</h3>
              <p className="text-sky-800 opacity-80 mt-2 mb-4">
                A URL shortening service landing page with a clean interface and responsive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">Tailwind CSS</span>
              </div>
              <a href="https://shorten-url-tan.vercel.app" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="img relative overflow-hidden">
              <a href="https://intro-drop.vercel.app">
                <img src="./Frame 26.svg" alt="Snap Landing Page" className="w-full transition-transform hover:scale-105 duration-500" />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-sky-900">Snap Landing Page</h3>
              <p className="text-sky-800 opacity-80 mt-2 mb-4">
                A modern landing page for a productivity tool with interactive elements and smooth transitions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">Tailwind CSS</span>
              </div>
              <a href="https://intro-drop.vercel.app" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Improved form and layout */}
      <section className='w-full flex flex-col sm:flex-row sm:p-16 p-6 bg-white' id="hirem">
        <div className="sm:w-1/2 w-full space-y-5 p-6">
          <h2 className='text-4xl font-bold text-sky-900 border-b-4 border-orange-500 pb-4 inline-block'>
            Contact
          </h2>
          <p className='text-lg text-sky-900 opacity-70 leading-relaxed mt-6'>
            I would love to hear about your projects and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex items-center space-x-3 text-sky-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>lemonyellow951@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sky-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <a href="https://github.com/00YellowLemon" className="hover:text-orange-500 transition-colors">github.com/00YellowLemon</a>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full p-6" >
          <form action="" className='space-y-8'>
            <div className="w-full">
              <label htmlFor="name" className="text-sm font-medium text-sky-900 block mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                required 
                className='outline-none w-full h-12 invalid:border-red-400 focus:border-orange-500 border-2 border-sky-200 rounded-md p-4 transition-colors' 
                placeholder='Your name' 
              />
            </div>
            
            <div className="w-full">
              <label htmlFor="email" className="text-sm font-medium text-sky-900 block mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                required
                className='outline-none invalid:border-red-400 w-full h-12 focus:border-orange-500 border-2 border-sky-200 rounded-md p-4 transition-colors' 
                placeholder="Your email address" 
              />
            </div>
            
            <div className="w-full">
              <label htmlFor="message" className="text-sm font-medium text-sky-900 block mb-2">Message</label>
              <textarea 
                required 
                id="message"
                name="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                rows={5}
                className='outline-none w-full focus:border-orange-500 border-2 border-sky-200 rounded-md p-4 resize-none transition-colors'  
                placeholder='Your message'
              ></textarea>
            </div>
            
            <a className='block' href={`mailto:lemonyellow951@gmail.com?subject=${Subject}%20Here&body=${message}`}>
              <button 
                type="submit" 
                className="px-6 py-3 rounded-md text-white cursor-pointer bg-orange-500 hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg flex items-center"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </a>
          </form>
        </div>
      </section>

      {/* Footer - Improved design */}
      <footer className='bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium flex flex-col sm:flex-row justify-between items-center p-8 sm:p-12 w-full'>
        <div className="mb-4 sm:mb-0">
          <h2 className="text-xl font-bold">
            Prostty
          </h2>
          <p className="text-white opacity-80 text-sm mt-1">
            &#169; 2025 - All rights reserved
          </p>
        </div>
        <div className="flex gap-6">
          <a href='https://github.com/00YellowLemon' className="flex items-center hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
          <a href='#' className="flex items-center hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
            Twitter
          </a>
          <a href='#' className="flex items-center hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App