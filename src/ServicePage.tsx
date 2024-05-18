export const ServicePage = () => {
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
}