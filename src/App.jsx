import Button from "./components/Elements/Button"
import Navbar from "./components/layouts/Navbar"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';

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
  console.log(data.length);
  const [slide, setSlide] = useState(0);
  return (
    <>
      <Navbar/>
      <main>
        <section id="hero" className="hero">
            {data.map((item, i) => {
                return (
                  <video key={i}  className={slide === i ? "video-slide object-contain object-center" : "slide slide-hidden"} src={item.video} loop autoPlay muted></video>
                );
            })}          
            {
                data.length > 1 &&  
                  <span className="indicators">
                      {data.map((_, idx) => {
                      return (
                          <button
                          key={idx}
                          className={
                              slide === idx ? "indicator" : "indicator indicator-inactive"
                          }
                          onClick={() => setSlide(idx)}
                          ></button>
                      );
                      })}
                  </span>
            }
        <div className="content">
            <div className="container">
              <div className="flex flex-wrap">
                <div className="w-full  px-4 lg:w-1/2 text-white ">
                  <h1 className="uppercase text-5xl font-bold tracking-wider">Lorem ipsum dolor sit amet.</h1>
                  <p className="py-12 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugiat asperiores quod officia hic fugit soluta quisquam debitis quas ut eaque quo, esse possimus illo veniam quidem blanditiis provident voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nesciunt consequatur corrupti fugiat fuga! Facere voluptate harum sint atque eligendi.</p>
                  <Button classname='px-6 py-2 font-medium border bg-white text-slate-700 rounded-md hover:bg-slate-100 transition ease-out '>Go Explore</Button>
                </div>
              </div>
            </div>
        </div>
        </section>







        <section>
          <div className="py-12">
            <h1>hello world</h1>
          </div>
        </section>
      </main>
      
    </>
  )
}

export default App
