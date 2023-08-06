import { useState } from 'react'
import Button from '../Elements/Button';

const Hero = ({data}) => {
  const [slide, setSlide] = useState(0);
  if(!data){
    return <div>loading...</div>
  }
  return (
    <section id="hero" className="hero">
            {data.map((item, i) => {
                return (
                  <video key={i}  className={slide === i ? "video-slide object-cover object-center" : "slide slide-hidden"} src={item.video} loop autoPlay muted></video>
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
                  <h1 className="uppercase text-4xl lg:text-5xl font-bold tracking-wider drop-shadow-md">ayo healing untuk kesehatanmu!</h1>
                  <p className="py-6 lg:py-12 drop-shadow-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugiat asperiores quod officia hic fugit soluta quisquam debitis quas ut eaque quo, esse possimus illo veniam quidem blanditiis provident voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nesciunt consequatur corrupti fugiat fuga! Facere voluptate harum sint atque eligendi.</p>
                  <Button classname='px-6 py-2 font-medium border bg-white text-slate-700 rounded-md hover:bg-slate-100 transition ease-out '>Go Explore</Button>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero