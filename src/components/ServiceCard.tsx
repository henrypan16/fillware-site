import React from 'react'

interface Props {
    icon: string,
    title: string,
    text: string
}

export default function ServiceCard({icon, title, text}: Props) {
  return (
    <div className="bg-white w-72 h-[68] rounded-2xl shadow-xl z-20 p-8">
        <div className="h-24 flex">
            <img src={icon} className="my-auto"/>
          </div>
          <h2 className="my-2 text-xl tracking-tight font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="font-mulish font-light text-justify text-gray-500 sm:text-md dark:text-gray-400">
            {text}
          </p>
    </div>
  )
}
