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
        <div className="space-y-2">
    {data?.length === 0 ? (
        <p className="text-center text-gray-500">No entries found.</p>
    ) : (
        <ul className="list-none space-y-2 text-gray-800">
            {data?.map((entry) => (
                <li key={entry.id} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span> 
                    <Link
                        to={`/dashboard/entrydetails/${entry.id}`}
                        className="text-black-600 hover:text-indigo-800 font-medium text-lg"
                    >
                        {entry.name}
                    </Link>
                </li>
            ))}
        </ul>
    )}
</div>

       
    )
}

export default EntryList
