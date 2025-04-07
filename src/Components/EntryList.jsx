import { useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { getEntries } from '../apiServices/EntryformApi'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EntryList = () => {

    const queryClient = useQueryClient()

    const { isLoading, error, data } = useQuery({
        queryKey: ['entries'],
        queryFn: getEntries,
    });



    return (

        

            <ul >
            {(data ?? []).map((entry) => (
                    <li

                        key={entry.id}
                
                    >
                       <Link to={`/dashboard/entrydetails/${entry.id}`}>{entry.name}</Link>




                    </li>
                ))}
            </ul>
       
    )
}

export default EntryList
