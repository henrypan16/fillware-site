export const MainPage = () => {
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
}