import Button from "./components/Elements/Button"
import Navbar from "./components/layouts/Navbar"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import Hero from "./components/layouts/Hero";

function App() {
  let data = [
    {
      "video": "./videos/1.mp4"
    },
    {
      "video": "./videos/2.mp4"
    },
    {
      "video": "./videos/3.mp4"
    },
    {
      "video": "./videos/4.mp4"
    },
  ]
  return (
    <>
      <Navbar/>
      <main>
        <Hero data={data} />
        <section id="information" className="py-16">
          <div className="container">
            <div className="w-full lg:w-2/3 px-4 py-9 bg-slate-100 mx-auto rounded-md">
              <h1 className="text-center text-3xl uppercase font-semibold text-slate-500 tracking-wide">Trusted By</h1>
              <div className="flex justify-center items-center pt-8">
                <div className="w-full text-center">
                  <h1 className="text-2xl lg:text-3xl font-semibold">20K</h1>
                  <p className="text-base text-slate-400">Members</p>
                </div>
                <div className="w-full text-center">
                  <h1 className="text-2xl lg:text-3xl font-semibold">12</h1>
                  <p className="text-base text-slate-400">Countries</p>
                </div>
                <div className="w-full text-center">
                  <h1 className="text-2xl lg:text-3xl font-semibold">2K</h1>
                  <p className="text-base text-slate-400">Hotels</p>
                </div>
                <div className="w-full text-center">
                  <h1 className="text-2xl lg:text-3xl font-semibold">54</h1>
                  <p className="text-base text-slate-400">Partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reason" className="py-16 rounded-3xl">
          <div className="container">
            <h1 className="uppercase text-3xl text-center font-semibold tracking-wide text-slate-600">WHY CHOOSE US</h1>
            <div className="px-5 flex flex-wrap justify-center items-center pt-24 gap-5">
              <div className="w-full lg:w-5/12 px-3">
                <div className="flex items-center space-x-10">
                  <div className="w-auto border border-slate-700 rounded-full p-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h1 className="text-xl font-semibold text-slate-700 tracking-wide">Lorem, ipsum dolor.</h1>
                    <p className="text-base text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in incidunt omnis aut molestias nemo voluptatum quos, nesciunt aspernatur error?</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 px-3">
                <div className="flex items-center space-x-10">
                  <div className="w-auto border border-slate-700 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  </div>
                  <div className="w-full">
                    <h1 className="text-xl font-semibold text-slate-700 tracking-wide">Lorem, ipsum dolor.</h1>
                    <p className="text-base text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in incidunt omnis aut molestias nemo voluptatum quos, nesciunt aspernatur error?</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 px-3">
                <div className="flex items-center space-x-10">
                  <div className="w-auto border border-slate-700 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>

                  </div>
                  <div className="w-full">
                    <h1 className="text-xl font-semibold text-slate-700 tracking-wide">Lorem, ipsum dolor.</h1>
                    <p className="text-base text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in incidunt omnis aut molestias nemo voluptatum quos, nesciunt aspernatur error?</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 px-3">
                <div className="flex items-center space-x-10">
                  <div className="w-auto border border-slate-700 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                  </div>
                  <div className="w-full">
                    <h1 className="text-xl font-semibold text-slate-700 tracking-wide">Lorem, ipsum dolor.</h1>
                    <p className="text-base text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in incidunt omnis aut molestias nemo voluptatum quos, nesciunt aspernatur error?</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 px-3">
                <div className="flex items-center space-x-10">
                  <div className="w-auto border border-slate-700 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h1 className="text-xl font-semibold text-slate-700 tracking-wide">Lorem, ipsum dolor.</h1>
                    <p className="text-base text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in incidunt omnis aut molestias nemo voluptatum quos, nesciunt aspernatur error?</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 px-3">
                <div className="flex items-center space-x-10">
                  <div className="w-auto border border-slate-700 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h1 className="text-xl font-semibold text-slate-700 tracking-wide">Lorem, ipsum dolor.</h1>
                    <p className="text-base text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in incidunt omnis aut molestias nemo voluptatum quos, nesciunt aspernatur error?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  )
}

export default App
