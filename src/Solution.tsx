import Content from './components/Content'
import illustration01 from '/illustration01.jpg'
import illustration02 from '/illustration02.jpg'
import React from 'react'

interface Props {
    innerRef: {
        current: HTMLDivElement[]
    }
}

export const Solution = ({innerRef}: Props) => {
    return <Content innerRef={innerRef}>
        <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 flex flex-col gap-10 mt-20">
            <div className="flex">
                <img src={illustration01} className="w-3/4 m-auto"/>
            </div>

        <div className="col-start-2 flex flex-col">
            <h2 className="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fillware RX</h2>
            <div className="h-1 w-12 border-2 border-gray-500 rounded-lg mb-4 mt-2"></div>
            <p className="mb-6 font-mulish font-light text-gray-500 sm:text-md dark:text-gray-400">
                Fillware Rx Management System is a complete software solution for managing all the essential activities of a modern pharmacy. The product is tailored to fit the clients needs and requirements. Understanding client business model is highly crucial for developing custom Rx Management software.
            </p>
            <button className="w-36 h-12 border-blue-500 border-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white z-50">
                Learn More
            </button>
        </div>
        
        <div className="row-start-2 flex flex-col">
            <h2 className="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fillware POS</h2>
            <div className="h-1 w-12 border-2 border-gray-500 rounded-lg mb-4 mt-2"></div>
            <p className="mb-12 font-mulish font-light text-gray-500 sm:text-md dark:text-gray-400">
            Fillware POS is designed with affordability and ease of use toward pharmacy retail business . Fillware POS can take you beyond just managing transactions to managing your entire business helping you improve productivity from checkout to the storeroom and identify areas to increase profitability.
            </p>
            <button className="w-36 h-12 border-blue-500 border-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white z-50">
            Learn More
            </button>
        </div>
        <div>
            <img src={illustration02} className="w-3/4 m-auto"/>
        </div>
        </div>
    </Content>
}