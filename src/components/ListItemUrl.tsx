import React from 'react';

interface Props {
    item: string,
    id: number,
    goTo: (id: number) => void
}

export default function ListItemUrl({item, id, goTo}: Props) {
    return (
        <li>
            <button  onClick={() => {goTo(id)}} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-blue-600 lg:hover:text-white lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 p-4 lg:w-24 h-10 rounded-md lg:rounded-2xl w-full bg-white lg:bg-transparent">
                {item}
            </button>
        </li>
    )
}