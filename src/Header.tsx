import List from './components/List'
import { useRef, useEffect, useState } from 'react'
import { Collapse } from 'flowbite'
import React, {RefObject} from 'react'

export const Header = ({section} : {section: RefObject<HTMLElement[]>}) => {
  const dropdown = useRef();
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleWheel = (wheel: WheelEvent): void => {
      wheel.preventDefault();
      if (wheel.deltaY > 0) {
        if(y < 3) setY(y + 1)
      } else {
        if(y > 0) setY(y - 1)
      }
    }
  
    document.addEventListener('wheel', handleWheel, { passive: false });
  
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('wheel', handleWheel);
    }
  }, [y]);

  useEffect(() => {
    goTo(y)
  })
  

  useEffect(() => {
    const dropdownEl = document.getElementById("dropdownMenu");
    const triggerEl = document.getElementById("dropdownButton");

    dropdown.current = new Collapse(dropdownEl, triggerEl);
  }, [])

  const goTo = (i: number): void => {
    window.scrollTo({
      top: section.current[i].offsetTop - 24,
      behavior: 'smooth'
    })
  }

  return <header className="fixed w-full h-24 py-4 z-50">
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
          <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <div className="bg-blue-600 rounded-full w-10 h-10 flex mr-2">
                <p className="m-auto font-mulish font-bold text-white">FT</p>
              </div>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Fillware Technologies
              </span>
            </a>

            <div className="flex items-center lg:order-1">
              <button id="dropdownButton" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>

            <div id="dropdownMenu" className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2">
              <List items={['Home', 'Service', 'Solution', 'Contact']} goTo={goTo}/>
            </div>
          </div>
        </nav>
    </header>
}