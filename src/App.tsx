import { useRef, useEffect, useState, useCallback } from 'react'
import { Collapse } from 'flowbite'
import List from './components/List'
import Content from './components/Content'
import illustration from '/illustration.jpg'
import illustration01 from '/illustration01.jpg'
import illustration02 from '/illustration02.jpg'
import icon1 from '/icon1.jpg'
import icon2 from '/icon2.jpg'
import icon3 from '/icon3.jpg'
import icon4 from '/icon4.jpg'
import icon5 from '/icon5.jpg'
import icon6 from '/icon6.jpg'
import vector from '/vector.jpg'
import element from '/element.jpg'
import Paragraph from './components/Paragraph'
import ServiceCard from './components/ServiceCard.jsx'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

function App() {
  const dropdown = useRef();
  const divRef = useRef();
  const office = {
    lat: 43.66370695446159,
    lng: -79.65597855414568
  }

  const warehouse = {
    lat: 43.662166595458984,
    lng: -79.65428924560547
  };

  const [officeCamera, setOfficeCamera] = useState()
  const [warehouseCamera, setWarehouseCamera] = useState()

  const officeCameraChanged = useCallback((ev) => setOfficeCamera(ev.detail));
  const warehouseCameraChanged = useCallback((ev) => setWarehouseCamera(ev.detail));

  function test() {
    // divRef.current.scrollIntoView({behavior: "smooth"});
    // window.scrollTo({
    //   top: divRef.current.offsetTop,
    //   behavior: 'smooth'
    // })
    console.log(officeCamera);
    console.log(warehouseCamera);
  }
  const content1 = 
  <>
    <div id="test" className="basis-2/4 mr-20 mt-40">
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pharmacy Software Solution</h1>
      <Paragraph>
        Fillware Technologies Is a custom software development company that specializes in meeting the needs of your business. We are committed to our clients through listening to their specific needs and by honoring the time-tested business rules and logic that have contributed to their success.
      </Paragraph>
      <button className="rounded-3xl bg-blue-600 w-36 h-12 font-bold text-white hover:animate-jump animate-duration-500" onClick={test}>
        Contact Sales
      </button>
      {/* <Paragraph>
        Fillware Technologies expert strategic planning and attention to your business needs are what give us the edge. You receive the benefit of corporate consultants with years of experience in high-level performance facilitation. We carry your project through from beginning to end with expert care and diligence, creating optimal strategies and helping you get the most from your investment
      </Paragraph> */}
    </div>
    <div className="mt-32">
      <img src={illustration}/>
    </div>
  </>

  const content2 =
  <>
    <img src={vector} className="absolute z-0 -left-20 order-10"/>
    <img src={element} className="absolute z-0 -inset-80 order-10"/>
    <div className="flex flex-col z-20 mt-20">
      <h2 className="mb-2 text-3xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Our services</h2>
      <div className="h-1 w-12 border-2 border-gray-500 rounded-lg mx-auto mb-4 mt-2"></div>
      <p className="mb-12 font-mulish font-light text-gray-500 sm:text-md text-center dark:text-gray-400">
        We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
      </p>
      <div className="flex flex-wrap flex-row gap-10 justify-center">
        <ServiceCard icon={icon1} title="Technical Support" text="Customer support"/>
        <ServiceCard icon={icon2} title="On-site Training" text="Customer support"/>
        <ServiceCard icon={icon3} title="3rd Party Integration" text="Customer support"/>
        <ServiceCard icon={icon4} title="Drug Ordering" text="Customer support"/>
        <ServiceCard icon={icon5} title="Direct Insurance" text="Customer support"/>
        <ServiceCard icon={icon6} title="Software Conversion" text="Customer support"/>
      </div>
      <button className="w-40 h-12 border-blue-500 border-2 rounded-3xl text-blue-500 mx-auto mt-5" onClick={() => test()}>
        Learn More
      </button>
    </div>
  </>

  const content3 = 
  <>
    <div className="grid grid-cols-2 grid-rows-2 z-20 gap-14 mt-20" ref={divRef}>
      <div className="flex ">
        <img src={illustration01} className="w-3/4 m-auto"/>
      </div>

      <div className="col-start-2 flex flex-col">
        <h2 className="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fillware RX</h2>
        <div className="h-1 w-12 border-2 border-gray-500 rounded-lg mb-4 mt-2"></div>
        <p className="mb-6 font-mulish font-light text-gray-500 sm:text-md dark:text-gray-400">
          Fillware Rx Management System is a complete software solution for managing all the essential activities of a modern pharmacy. The product is tailored to fit the clients needs and requirements. Understanding client business model is highly crucial for developing custom Rx Management software.
        </p>
        <button className="w-36 h-12 border-blue-500 border-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white hover:animate-jump">
          Learn More
      </button>
      </div>
      
      <div className="row-start-2 flex flex-col">
        <h2 className="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fillware POS</h2>
        <div className="h-1 w-12 border-2 border-gray-500 rounded-lg mb-4 mt-2"></div>
        <p className="mb-12 font-mulish font-light text-gray-500 sm:text-md dark:text-gray-400">
          Fillware POS is designed with affordability and ease of use toward pharmacy retail business . Fillware POS can take you beyond just managing transactions to managing your entire business helping you improve productivity from checkout to the storeroom and identify areas to increase profitability.
        </p>
        <button className="w-36 h-12 border-blue-500 border-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white">
        Learn More
        </button>
      </div>
      
      <div>
        <img src={illustration02} className="w-3/4 m-auto"/>
      </div>
    </div>
  </>

  const content4 =
  <div className="w-full flex flex-col gap-6">
    <h2 className="text-3xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Our locations</h2>
    <div class="h-1 w-24 border-2 border-gray-500 rounded-lg mx-auto mb-4"></div>
    <APIProvider apiKey={'AIzaSyCJ8M0H-aB7jnZAafRSTcbOdPRHlFxniHk'} onLoad={() => console.log('Maps API has loaded.')}>
        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
          <p className="font-mulish font-light text-gray-900 sm:text-2xl text-center dark:text-gray-400">
            Head Office
          </p>
            <div className="w-96 h-96 overflow-hidden rounded-3xl shadow-lg border-4 border-blue-50 hover:border-blue-400">
              <Map {...officeCamera} defaultCenter={office} defaultZoom={18} mapId="office" onCameraChanged={officeCameraChanged}>
                <AdvancedMarker position={office} />
              </Map>
            </div>
          </div>

        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
          <p className="font-mulish font-light text-gray-900 sm:text-2xl text-center dark:text-gray-400">
            Service Center
          </p>
          <div className="w-96 h-96 overflow-hidden rounded-3xl shadow-lg border-4 border-blue-50 hover:border-blue-400">
            <Map {...warehouseCamera}
              defaultCenter={warehouse}
              defaultZoom={18}
              mapId="warehouse"
              onCameraChanged={warehouseCameraChanged}>
              <AdvancedMarker position={warehouse} />
            </Map>
          </div>
        </div>
      </div>

        </div>
      </APIProvider>
  </div>

  useEffect(() => {
    const dropdownEl = document.getElementById("dropdownMenu");
    const triggerEl = document.getElementById("dropdownButton");

    dropdown.current = new Collapse(dropdownEl, triggerEl);
  }, [])

  return (
    <div className="font-mulish overflow-x-hidden overflow-hidden bg-white">
      <header className="fixed top-4 w-full z-50">
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
          <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
              <div className="bg-blue-600 rounded-full w-10 h-10 flex mr-2">
                <p className="m-auto font-mulish font-bold text-white">FT</p>
              </div>
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Fillware Technologies
              </span>
            </a>

            <div className="flex items-center lg:order-1">
              <button id="dropdownButton" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>

            <div id="dropdownMenu" className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2">
              <List items={['Home', 'Service', 'Solution', 'Support', 'Contact']}/>
            </div>
          </div>
        </nav>
    </header>
    <div className="flex flex-col dark:bg-gray-900">
        <Content>
          {content1}
        </Content>
        <Content>
          {content2}
        </Content>
        <Content>
          {content3}
        </Content>
        <Content>
          {content4}
        </Content>
    </div>

      <footer className="h-60 bg-gradient-to-t to-cyan-400 from-blue-600 flex flex-col">
        <div className="w-full px-60 pt-5 pb-3 grid grid-cols-4">
          <div>
            <a href="#" class="flex items-center">
              <div className="bg-white rounded-full w-10 h-10 flex mr-2">
                <p className="m-auto font-mulish font-bold text-blue-600">FT</p>
              </div>
              <span class="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
                Fillware Technologies
              </span>
            </a>
            <div className="text-white">
              <p className="my-3">
                Fillware provides software solution for pharmacies.
              </p>
              <p>Available</p>
              <p>Monday - Friday (8:30AM - 9PM)</p>
              <p>Weekends & Holiday (9AM - 5PM)</p>

            </div>
          </div>

          <div className="m-auto">
            <div className="text-white m-auto">
              <h2 className="mb-1 text-lg tracking-tight font-bold text-white">Technical Assistant</h2>
              <p>Get in touch with a Fillware technician</p>
              <div className="flex">
                <button className="m-auto w-48 h-12 bg-white text-blue-500 my-4 font-extrabold rounded-2xl shadow-sm hover:animate-wiggle hover:animate-duration-1000 hover:animate-infinite  hover:bg-blue-800 hover:text-white">Contact Now</button>
              </div>


            </div>
          </div>



              <div className="grid grid-rows-4 grid-cols-2 text-white font-mulish text-md m-auto">
                <h2 className="col-span-2 mb-2 text-lg tracking-tight font-bold text-white">Contact Us</h2>
                <p>Phone:</p>
                <p>(905) 564-0501</p>
                <p>Fax:</p>
                <p>(905) 564-9056</p>
                <p>Toll Free</p>
                <p>(866) 764-6443</p>
              </div>


            <div className="flex flex-row-reverse">
              <div  className="grid grid-rows-4 grid-cols-3 text-white font-mulish text-md my-auto">
                  <h2 className="col-span-3 mb-2 text-lg tracking-tight font-bold text-white">Email</h2>
                  <p className="">General</p>
                  <p className="col-span-2">info@fillware.com</p>
                  <p className="">Sales</p>
                  <p className="col-span-2">sales@fillware.com</p>
                  <p className="">Support</p>
                  <p className="col-span-2">support@fillware.com</p>
              </div>
            </div>
        </div>
        <p className="text-white text-xs z-50 h-full align-top text-center">
          Copyright © 2013 Fillware Technologies. All Rights Reserved. All other logos or trademarks used in this site are the property of their respective owners.
        </p>
      </footer>
      
    </div>
  )
}

export default App
        {/* <div className="flex flex-col basis-2/4 text-justify">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Mission</h1>
          <ul>
            <li>
              <Paragraph>Internally, we partner with your company to help define core competencies and identify customers.</Paragraph>
            </li>
            <li>
              <Paragraph>Externally, we analyze the current and future impact of the economy on your industry. We examine the strategies of other companies in your industry to see what lessons might be applied.</Paragraph>
            </li>
            <li>
              <Paragraph>We help you drive down costs and increase profits. This is done by supporting your existing business while seeking additional revenue opportunities.</Paragraph>
            </li>
            <li>
              <Paragraph>We provide an e-services site to help your organization get closer to their customers by building Web-enabled customer service solutions.</Paragraph>
            </li>
          </ul>
        </div> */}