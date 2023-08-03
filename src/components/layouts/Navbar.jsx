import { Fragment, useState } from 'react'
import Button from '../Elements/Button';


const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    window.onscroll = function(){
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;

        if(window.scrollY > fixedNav){
            header.classList.add('navbar-fixed');
        }else{
            header.classList.remove('navbar-fixed');
        }
    }
  return (
    <Fragment>
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="/" className="font-bold text-lg lg:text-3xl block py-6 text-white tracking-wide uppercase"> Travel.ID </a>
            </div>
            <div className="flex items-center px-4">
              <Button id='button-hamburger' name="button-hamburger" type="button" classname="block absolute right-3 px-2 py-1 lg:hidden text-white" onClick={() => setIsOpenMenu(!isOpenMenu)} >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" 
                  className={`${isOpenMenu ? 'block' : 'hidden'} `}  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" className={`${!isOpenMenu ? 'block' : 'hidden'}`}/>
                </svg>
              </Button>
              <nav id="nav-menu" className={`${isOpenMenu ? 'block': 'hidden'} absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                <ul className="block lg:flex font-normal">
                  <li className="group">
                    <a href="#home" className="text-base lg:font-semibold lg:text-white py-2 mx-6 flex group-hover:opacity-90">Home</a>
                  </li>
                  <li className="group">
                    <a href="#portfolio" className="text-base lg:font-semibold lg:text-white py-2 mx-6 flex group-hover:opacity-90">Explore</a>
                  </li>
                  <li className="group">
                    <a href="#certificate" className="text-base lg:font-semibold lg:text-white py-2 mx-6 flex group-hover:opacity-90">Tour</a>
                  </li>
                  <li className="group">
                    <a href="#certificate" className="text-base lg:font-semibold lg:text-white py-2 mx-6 flex group-hover:opacity-90">Gallery</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Navbar