import Button from "./components/Elements/Button"
import Navbar from "./components/layouts/Navbar"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import Hero from "./components/layouts/Hero";

function App() {
  let destinations = [
    {
      "nama": "Bali",
      "gambar": "./images/bali.png"
    },
    {
      "nama": "Borobudur",
      "gambar": "./images/borobudur.png"
    },
    {
      "nama": "Raja Ampat",
      "gambar": "./images/rajaampat.png"
    },
    {
      "nama": "Kawah Ijen",
      "gambar": "./images/kawahijen.jpg"
    },
    {
      "nama": "Monas",
      "gambar": "./images/monas.png"
    },
    {
      "nama": "Bromo",
      "gambar": "./images/bromo.png"
    },
    {
      "nama": "Danau Toba",
      "gambar": "./images/danautoba.png"
    },
    {
      "nama": "Labuan Bajo",
      "gambar": "./images/labuanbajo.png"
    },
    {
      "nama": "Pulau Komodo",
      "gambar": "./images/pulaukomodo.png"
    },
    {
      "nama": "Wae Rebo",
      "gambar": "./images/waerebo.png"
    },
  ];
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

        <section id="explore" className="pt-36 pb-16">
          <div className="container">
            <h1 className="px-5 py-10 lg:px-0 uppercase text-3xl font-bold tracking-wide text-slate-600 text-center">Destination</h1>
            <div className="px-5 py-5 lg:px-0 flex flex-wrap justify-center items-center gap-4 " >
            {
              destinations?.map((dest, i) => (
                <>
                <div className="w-[13rem] lg:w-1/6 rounded-md group relative" key={i}>
                  <img src={dest.gambar} alt={dest.nama} className="rounded-md object-cover object-center" />
                  <div className="invisible bg-slate-950 group-hover:visible absolute top-0 bottom-0 left-0 right-0 opacity-40 group-hover:backdrop-blur-xl ">
                  </div>
                  <h1 className="absolute bottom-0 left-0 right-0 text-center invisible group-hover:visible text-white text-xl tracking-wide group-hover:transition group-hover:-translate-y-10 group-hover:ease-in-out group-hover:duration-300 drop-shadow-2xl">{dest.nama}</h1>
                </div>
                </>
              ))
            }
            </div>
            
          </div>
          
        </section>

        <section id="testimoni" className="pt-36 pb-16 bg-slate-700 mt-10">
        <h1 className="px-5  lg:px-0 uppercase text-3xl font-bold tracking-wide text-white text-center">Testimony</h1>
        <div className="w-full px-4 lg:px-0 py-20">
          <div className="testimony-wraper">
            <div className="inline-block">
              <div className="testimony-to-left">
                  <div className="slide p-4 rounded-lg w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
              </div>
              <div className="testimony-to-left">
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="testimony-wraper">
            <div className="inline-block">
              <div className="testimony-to-right">
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
              </div>
              <div className="testimony-to-right">
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
                  <div className="slide p-4 rounded-lg w-1/5 lg:w-1/5 shadow-lg border-dark  items-center bg-white border">
                    <div className="w-full">
                      <div className="flex justify-start gap-2">
                      <div className="w-auto ">
                        <img src="./images/avatar/avatar-2.png" alt="Avatar 1" width='50' />
                      </div>
                      <div className="w-full ">
                        <h1 className="font-rubik text-md text-slate-800 font-medium">Ahmad Jourji Zaidan</h1>
                        <span className="text-sm text-slate-500">Jepang</span>
                      </div>
                      </div>
                      <p className="py-3 text-slate-600 text-[.92rem] tracking-wide ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut velit odio nam possimus error ipsum voluptatibus rem iure exercitationem commodi.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </div>
        </section>
        
      </main>
      <footer className="bg-dark pt-24 pb-12 bg-slate-900">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                    <h2 className="text-4xl font-bold text-white mb-5">TRAVEL.ID</h2>
                    <h3 className="font-bold text-2xl mb-2">Contact</h3>
                    <p className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="ml-2">travel.id@gmail.com</span></p>
                    <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span className="ml-2">0812-3456-7890</span></p>
                </div>
                <div className="w-full px-4 mb-12 md:w-1/3 hidden lg:block">
                    <h3 className="font-semibold text-xl text-white mb-5">Blog</h3>
                    <ul className="text-slate-300">
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Upcomming</a>    
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Upcomming</a>    
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Upcomming</a>    
                        </li>
                    </ul>
                </div>
                <div className="w-full px-4 mb-12 md:w-1/3">
                    <h3 className="font-semibold text-xl text-white mb-5">Visit</h3>
                    <ul className="text-slate-300">
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Home</a>    
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Explore</a>    
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Tour</a>    
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Gallery</a>    
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full pt-10 border-t border-slate-800">
                <div className="flex items-center justify-center mb-5">
                        <a href="#" target="_blank" className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white ">
                          <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                        </a>
                        <a href="#" target="_blank" className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white ">
                            <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                        </a>
                        <a href="#" target="_blank" className="w-9 h-9 mr-3 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white ">
                        <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                </div>
                <p className="font-medium text-xs text-slate-500 text-center">TRAVEL.ID  &copy; 2023. All Right Reserved</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App
