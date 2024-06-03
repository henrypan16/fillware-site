import Content from './components/Content'
import illustration from '/illustration.jpg'
import Paragraph from './components/Paragraph'
import React from 'react'

interface Props {
    innerRef: {
        current: HTMLDivElement[]
    }
}

export const Home = ({innerRef} : Props) => {
    return <Content innerRef={innerRef}>
        <div id="test" className="basis-2/4 sm:mr-20 sm:mt-40 mt-20 sm:order-1 order-4">
        <h1 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pharmacy Software Solution</h1>
        <Paragraph>
            Fillware Technologies Is a custom software development company that specializes in meeting the needs of your business. We are committed to our clients through listening to their specific needs and by honoring the time-tested business rules and logic that have contributed to their success.
        </Paragraph>
        <Paragraph>
            Fillware Technologies expert strategic planning and attention to your business needs are what give us the edge. You receive the benefit of corporate consultants with years of experience in high-level performance facilitation. We carry your project through from beginning to end with expert care and diligence, creating optimal strategies and helping you get the most from your investment
        </Paragraph>
        <div className="flex mt-12">
            <button className="rounded-3xl mx-auto bg-blue-600 w-72 h-16 z-50 font-extrabold text-white hover:border-blue-600 hover:border-2 hover:bg-white hover:text-blue-600">
                CONTACT SALE
            </button>
        </div>
        </div>
        <div className="mt-32 order-1 sm:order-4">
            <img src={illustration}/>
        </div>
    </Content>
}