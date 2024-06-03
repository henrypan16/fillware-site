import icon1 from '/icon1.jpg'
import icon2 from '/icon2.jpg'
import icon3 from '/icon3.jpg'
import icon4 from '/icon4.jpg'
import icon5 from '/icon5.jpg'
import icon6 from '/icon6.jpg'
import vector from '/vector.jpg'
import element from '/element.jpg'
import Content from './components/Content'
import ServiceCard from './components/ServiceCard.jsx'
import React from 'react'

interface Props {
    innerRef: {
        current: HTMLDivElement[]
    }
}

export const Service = ({innerRef} : Props) => {
    return <Content innerRef={innerRef}>
        <img src={vector} className="absolute z-0 -left-20 order-10"/>
        <img src={element} className="absolute z-0 -inset-80 order-10"/>
        <div className="flex flex-col z-20 mt-10">
            <h2 className="mb-2 text-3xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Our services</h2>
            <div className="h-1 w-12 border-2 border-gray-500 rounded-lg mx-auto mb-4 mt-2"></div>
            <p className="mb-12 font-mulish font-light text-gray-500 sm:text-md text-center dark:text-gray-400">
                We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
            </p>
            <div className="flex flex-wrap flex-row gap-10 justify-center">
                <ServiceCard icon={icon1} title="Technical Support" text="Provide same day tech visit, and 7 days customer support"/>
                <ServiceCard icon={icon2} title="On-site Training" text="Provide on-site training for Fillware RX and Fillware POS software"/>
                <ServiceCard icon={icon3} title="3rd Party Integration" text="Support multiple 3rd party application interagration for better workflow"/>
                <ServiceCard icon={icon4} title="Hardware Provider" text="Please visit cashmycart.com for more info about Fillware computers"/>
                <ServiceCard icon={icon5} title="Some Service" text="I run out of idea for what to put here some I put some random text"/>
                <ServiceCard icon={icon6} title="Software Conversion" text="Support conversion from other software"/>
            </div>
        </div>
    </Content>
}