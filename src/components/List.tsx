import ListItemUrl from './ListItemUrl'
import { React } from 'react'

interface Props {
    items: string[],
    goTo: (id: number) => void
}

export default function List({items, goTo}: Props) {
    return (
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {items.map((item, i) => 
                <ListItemUrl key={i} goTo={goTo} item={item} id={i}/>
            )}
        </ul>
    )
}