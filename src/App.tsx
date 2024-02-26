import Nav  from './Nav/Nav.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const Subject = "Reaching Out"
  const [salue,setSalue] = useState<string>("")

  return (
    <main>
      <Nav />
      <div className="flex min-h-screen flex-col mt-6 sm:flex-row items-center sm:gap-[10%] px-10 border-orange-500 bg-white w-full">
        <div className="sm:order-2 w-full order-1 sm:w-1/2">
          <img className='w-full h-auto' src="./Group 1.svg" alt="" />
        </div>
        <div className="sm:order-1 order-2 w-full sm:w-1/2 sm:px-12 px-4">
          <h1 className='font-bold sm:text-5xl text-3xl leading-normal mb-10 text-sky-900'>
            Crafting with code to build the future
          </h1>
          <p className='font-medium texl-lg text-sky-900 mb-6 opacity-70 leading-loose'>
            I am a skilled web developer with a passion for crafting beautiful and functional websites and applications.
          </p>
          <div className="px-5 py-2 rounded-md w-40 grid place-items-center bg-orange-500">
                <a href="#hirem" className="font-semibold  font-md text-white opacity-60 no-underline">Hire me</a>
            </div>  

        </div>
      </div>
      <h2 className='text-xl text-sky-900 font-semibold capitalize  m-6 sm:m-16 '>web Technogies Learned</h2>
      <section className='w-full flex flex-wrap px-16 gap-5' id="tech">
        <div className="border-orange-200 w-[45%] sm:w-1/5 border-2  rounded-md bg-white">
          <div className="sm:p-7 p-4">
            <img src="./icons8-html.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>HTML</p>
        </div>
        <div className="border-orange-200 w-[45%] sm:w-1/5 border-2  rounded-md bg-white">
          <div className="sm:p-7 p-6">
            <img src="./icons8-css.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>CSS </p>
        </div>
        <div className="border-orange-200 w-[45%] sm:w-1/5   border-2 rounded-md bg-white">
          <div className="sm:p-7 p-4">
            <img src="./icons8-javascript.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>Javascript</p>
        </div>
        <div className="border-orange-200 w-[45%] sm:w-1/5 border-2  rounded-md bg-white">
          <div className="sm:p-7 p-4">
            <img src="./icons8-nextjs.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>NextJs</p>
        </div>
        <div className="border-orange-200 w-[45%] sm:w-1/5 border-2  rounded-md bg-white">
          <div className="p-7">
            <img src="./icons8-tailwindcss.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>Tailwindcss</p>
        </div>
        <div className="border-orange-200 w-[45%] sm:w-1/5 border-2  rounded-md bg-white">
          <div className="sm:p-7 p-4">
            <img src="./icons8-react-native.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>ReactJs</p>
        </div>
        <div className="border-orange-200 w-[45%] sm:w-1/5 border-2  rounded-md bg-white">
          <div className=" sm:p-7 p-4">
            <img src="./icons8-nodejs.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>NodeJs</p>
        </div>
      </section>
      <section id='proj'>
      <h2 className='text-xl text-sky-900 font-semibold capitalize mb-4 m-16 '>Selected Projects</h2>
        
        <div className='w-full block sm:flex flex-wrap px-2 sm:px-16 space-y-4 sm:gap-5' id="tools">
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="img">
              <a href="https://newsletter-seven-beige.vercel.app">
                              <img src="./Frame 23 (1).svg" alt="" />
              </a>  
            </div>
            <h3 className="text-lg font-medium ml-6 mt-6 opacity-80">News Letter Page</h3>
            <p className='text-md font-semibold ml-6 mb-6 text-md capitalize flex gap-4'><span>HTML</span><span>CSS</span></p>
          </div>
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="img">
              <a href="https://landin-two.vercel.app">
                              <img src="./Frame 24.svg" alt="" />
              </a>
            </div>
            <h3 className="text-lg font-medium ml-6 mt-6 opacity-80">Room Landing Page</h3>
            <p className='text-md font-semibold ml-6 mb-6 text-md capitalize flex gap-4'><span>React</span><span>Typescript</span></p>
          </div>
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="img">
                <a href="https://shorten-url-tan.vercel.app">
                                <img src="./Frame 25.svg" alt="" />
                </a>            
              </div>
            <h3 className="text-lg font-medium ml-6 mt-6 opacity-80">Shortly Landing Page</h3>
            <p className='text-md font-semibold ml-6 mb-6 text-md capitalize flex gap-4'><span>React</span><span>Tailwindcss</span></p>
          </div>
          <div className="sm:w-[45%] w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="img">
              <a href="https://intro-drop.vercel.app">
                              <img src="./Frame 26.svg" alt="" />
              </a>
            </div>
            <h3 className="text-lg font-medium ml-6 mt-6 opacity-80">Snap Landing Page</h3>
            <p className='text-md font-semibold ml-6 mb-6 text-md capitalize flex gap-4'><span>React</span><span>Tailwindcss</span></p>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col sm:flex-row sm:p-16 p-4' id="hirem">
        <div className="sm:w-1/2 w-full space-y-5 p-6">
          <h2 className='text-4xl font-bold text-sky-900 '>
            Contact
          </h2>
          <p className='text-md text-sky-900 opacity-70'>
            I would love to hear about your projects and how i
            could help. Please fill in the form. I'll be back to you as soon
            as possible
          </p>
        </div>
        <div className="sm:w-1/2 w-full p-6" >
          <form action="" className='space-y-6'>
            <div className="w-full h-6">
              <input type="text" required className='outline-none w-full h-full  invalid:border-red-400 focus:border-black border-2 border-sky-300 rounded-md p-4' placeholder='NAME' />
            </div>
            <div  className="w-full h-6">
              <input type="email" className='outline-none invalid:border-red-400 w-full h-full  focus:border-black border-2 border-sky-300 rounded-md p-4' placeholder="EMAIL" />
            </div>
            <div  className="w-full h-16">
              <input required name="" id="" value={salue} onChange={(e) => setSalue(e.target.value)} className='outline-none w-full h-full  focus:border-black border-2 border-sky-300 rounded-md p-4'  placeholder='MESSAGE'></input>
            </div>
            

              <a className='mt-4 block' href={`mailto:lemonyellow951@gmail.com?subject=${Subject}%20Here&body=${salue}`}>
                          <input className="px-5 py-2 rounded-md w-40 text-white cursor-pointer  invalid:border-red-400 bg-orange-500" type="submit" value="Shoot Email" />

              </a>
          </form>
        </div>
      </section>
      <footer className='bg-orange-300 capitalize text-white font-semibold flex justify-between p-6 sm:p-16 w-full'>
        <div className="right">
          <h2>
             &#169; Prostty 2024
          </h2>
        </div>
        <div className="flex gap-4">
          <a href='https://github.com/00YellowLemon'>
            github
          </a>
          <a>
            twitter
          </a>
          
          
        </div>
      </footer>
    </main>
  )
}

export default App
