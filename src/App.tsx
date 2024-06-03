import { Home } from './Home'
import { Service } from './Service'
import { Solution } from './Solution'
import { Contact } from './Contact'
import { Header } from './Header'
import { Footer } from './Footer'
import { useRef, React } from 'react'
import fillware from '/fillware.jpg'

function App() {
  const section = useRef<(HTMLDivElement|null)[]>([]);
  return (
    <div className="font-mulish overflow-x-hidden overflow-hidden bg-white">
      <img src={fillware} className="h-screen w-screen fixed border-0 z-40 opacity-5 pointer-events-none"/>
      <Header section={section}/>
      <div className="flex flex-col dark:bg-gray-900">
          <Home innerRef={section}/>
          <Service innerRef={section}/>
          <Solution innerRef={section}/>
          <Contact innerRef={section}/>
      </div>

      <Footer/>
    </div>
  )
}

export default App