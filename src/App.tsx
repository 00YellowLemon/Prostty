import Nav  from './Nav/Nav.jsx'
import './App.css'

function App() {

  return (
    <main>
      <Nav />
      <div className="flex min-h-screen items-center gap-[10%] px-10 border-orange-500 bg-white w-full">
        <div className="order-1 w-1/2">
          <img className='w-full h-auto' src="./Group 1.svg" alt="" />
        </div>
        <div className="order-0 w-1/2 px-12">
          <h1 className='font-bold text-5xl leading-normal mb-10 text-sky-900'>
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
      <h2 className='text-xl text-sky-900 font-semibold capitalize mb-4 m-16 '>web Technogies Learned</h2>
      <section className='w-full flex flex-wrap px-16 gap-5' id="tech">
        <div className="border-orange-200 w-1/5 border-2  rounded-md bg-white">
          <div className="p-7">
            <img src="./icons8-html.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>HTML</p>
        </div>
        <div className="border-orange-200 w-1/5 border-2  rounded-md bg-white">
          <div className=" p-7">
            <img src="./icons8-css.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>CSS </p>
        </div>
        <div className="border-orange-200 w-1/5   border-2 rounded-md bg-white">
          <div className=" p-7">
            <img src="./icons8-javascript.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>Javascript</p>
        </div>
        <div className="border-orange-200 w-1/5 border-2  rounded-md bg-white">
          <div className="p-7">
            <img src="./icons8-nextjs.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>NextJs</p>
        </div>
        <div className="border-orange-200 w-1/5 border-2  rounded-md bg-white">
          <div className="p-7">
            <img src="./icons8-tailwindcss.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>Tailwindcss</p>
        </div>
        <div className="border-orange-200 w-1/5 border-2  rounded-md bg-white">
          <div className="p-7">
            <img src="./icons8-react-native.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>ReactJs</p>
        </div>
        <div className="border-orange-200 w-1/5 border-2  rounded-md bg-white">
          <div className=" p-7">
            <img src="./icons8-nodejs.svg" className='w-full mx-auto h-auto' alt="" />
          </div>
          <p className='text-lg text-center text-md  text-sky-950 opacity-70 font-medium '>NodeJs</p>
        </div>
      </section>
      <section id='proj'>
      <h2 className='text-xl text-sky-900 font-semibold capitalize mb-4 m-16 '>Selected Projects</h2>
        
        <div className='w-full flex flex-wrap px-16 gap-5' id="tools">
          <div className="w-[45%] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="img">
              <a href="https://newsletter-seven-beige.vercel.app">
                              <img src="./Frame 23 (1).svg" alt="" />
              </a>  
            </div>
            <h3 className="text-lg font-medium ml-6 mt-6 opacity-80">News Letter Page</h3>
            <p className='text-md font-semibold ml-6 mb-6 text-md capitalize flex gap-4'><span>HTML</span><span>CSS</span></p>
          </div>
          <div className="w-[45%] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="img">
              <a href="https://landin-two.vercel.app">
                              <img src="./Frame 24.svg" alt="" />
              </a>
            </div>
            <h3 className="text-lg font-medium ml-6 mt-6 opacity-80">Room Landing Page</h3>
            <p className='text-md font-semibold ml-6 mb-6 text-md capitalize flex gap-4'><span>React</span><span>Typescript</span></p>
          </div>
          <div className="w-[45%] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="img">
                <a href="https://shorten-url-tan.vercel.app">
                                <img src="./Frame 25.svg" alt="" />
                </a>            
              </div>
            <h3 className="text-lg font-medium ml-6 mt-6 opacity-80">Shortly Landing Page</h3>
            <p className='text-md font-semibold ml-6 mb-6 text-md capitalize flex gap-4'><span>React</span><span>Tailwindcss</span></p>
          </div>
          <div className="w-[45%] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="img">
              <a href="https://intro-drop.vercel.app">
                              <img src="./Frame 26.svg" alt="" />
              </a>
            </div>
            <h3 className="text-lg font-medium ml-6 mt-6 opacity-80">Snap Landing Page</h3>
            <p className='text-md font-semibold ml-6 mb-6 text-md capitalize flex gap-4'><span>React</span><span>Tailwindcssc</span></p>
          </div>
        </div>
      </section>
      <section className='w-full flex p-16' id="hirem">
        <div className="w-1/2 space-y-5 p-6">
          <h2 className='text-4xl font-bold text-sky-900 '>
            Contact
          </h2>
          <p className='text-md text-sky-900 opacity-70'>
            I would love to hear about your projects and how i
            could help. Please fill in the form. I'll be back to you as soon
            as possible
          </p>
        </div>
        <div className="w-1/2 p-6" >
          <form action="" className='space-y-6'>
            <div className="w-full h-6">
              <input type="text" required className='outline-none w-full h-full  invalid:border-red-400 focus:border-black border-2 border-sky-300 rounded-md p-4' placeholder='NAME' />
            </div>
            <div  className="w-full h-6">
              <input type="email" className='outline-none invalid:border-red-400 w-full h-full  focus:border-black border-2 border-sky-300 rounded-md p-4' placeholder="EMAIL" />
            </div>
            <div  className="w-full h-16">
              <textarea required name="" id="" className='outline-none w-full h-full  focus:border-black border-2 border-sky-300 rounded-md p-4'  placeholder='MESSAGE'></textarea>
            </div>
            <input className="px-5 py-2 rounded-md w-40 text-white cursor-pointer  invalid:border-red-400 bg-orange-500" type="submit" value="Shoot Email" />
          </form>
        </div>
      </section>
      <footer className='bg-orange-300 capitalize text-white font-semibold flex justify-between p-16 w-full'>
        <div className="right">
          <h2>
             &#169; Prostty 2024
          </h2>
        </div>
        <div className="flex gap-4">
          <a>
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
