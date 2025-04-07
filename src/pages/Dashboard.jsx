import React from 'react'
import EntryForm from '../Components/EntryForm';
import EntryList from '../Components/EntryList';
// import EntryDetails from '../Components/EntryDetails';

const Dashboard = () => {
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-4 max-w-3xl w-full bg-white p-4 rounded-lg shadow-md overflow-hidden">
                
                
                <div className="flex-1 bg-white border border-gray-300 rounded-lg p-4 shadow-md overflow-auto min-h-0">
                    <EntryForm />
                </div>

                
                <div className="flex-1 bg-white border border-gray-300 rounded-lg p-4 shadow-md overflow-auto min-h-0">
                    <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Your Entries</h3>
                    <EntryList />
                </div>

            </div>
        </div>
    );
      
    }
  

export default Dashboard
