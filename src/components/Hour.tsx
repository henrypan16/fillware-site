import React from 'react'

export const Hour = () => {
  return (
    <div className="m-auto">
        <a href="#" className="flex items-center">
        <div className="bg-white rounded-full w-10 h-10 flex mr-2">
            <p className="m-auto font-mulish font-bold text-blue-600">FT</p>
        </div>
        <span className="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
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
  )
}
