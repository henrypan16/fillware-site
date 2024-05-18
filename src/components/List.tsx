import ListItemUrl from './ListItemUrl'

export default function List({items}) {
    return (
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {items.map((item) => 
                <ListItemUrl>
                    {item}
                </ListItemUrl>
            )}
        </ul>
    )
}