import React from 'react'
import EntryForm from '../Components/EntryForm';
import EntryList from '../Components/EntryList';
// import EntryDetails from '../Components/EntryDetails';

const Dashboard = () => {
  
    //   <div>

    //     <form >
    //     <h3>form</h3>
    //       <div>
    //         <label>Name </label>
    //         <input
    //           type="text"

    //           required
    //         />
    //       </div>
    //       <br />
    //       <div>
    //         <label>Technology </label>
    //         <input
    //           type="Text"


    //           required
    //         />
    //       </div>
    //       <br />
    //       <div>
    //         <label>Company </label>
    //         <input
    //           type="text"


    //           required
    //         />
    //       </div>
    //       <br />
    //       <div>
    //         <label>Description </label>
    //         <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
    //       </div>
    //       <button type="submit">Login</button>
    //     </form>

    //   <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>

    //   {/* Form Box */}
    //   <div style={{
    //     flexGrow: 1, 
    //     padding: '20px', 
    //     border: '1px solid #ddd', 
    //     borderRadius: '8px', 
    //     marginRight: '20px', 
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'space-between' // To make the content align well
    //   }}>
    //     <form>
    //       <h3 style={{ textAlign: 'center' }}>Form</h3>

    //       <div style={{ marginBottom: '15px' }}>
    //         <label htmlFor="name">Name:</label>
    //         <input 
    //           type="text" 
    //           id="name" 
    //           required 
    //           style={{ width: '100%' }} 
    //         />
    //       </div>

    //       <div style={{ marginBottom: '15px' }}>
    //         <label htmlFor="technology">Technology:</label>
    //         <input 
    //           type="text" 
    //           id="technology" 
    //           required 
    //           style={{ width: '100%' }} 
    //         />
    //       </div>

    //       <div style={{ marginBottom: '15px' }}>
    //         <label htmlFor="company">Company:</label>
    //         <input 
    //           type="text" 
    //           id="company" 
    //           required 
    //           style={{ width: '100%' }} 
    //         />
    //       </div>

    //       <div style={{ marginBottom: '15px' }}>
    //         <label htmlFor="description">Description:</label>
    //         <textarea 
    //           id="description" 
    //           rows="4" 
    //           cols="50" 
    //           required 
    //           style={{ width: '100%' }} 
    //         ></textarea>
    //       </div>

    //       <div style={{ textAlign: 'center' }}>
    //         <button 
    //           type="submit"
    //           style={{ padding: '5px 10px' }}
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>

    //   {/* Parallel Box */}
    //   <div style={{
    //     flexGrow: 1, 
    //     padding: '20px', 
    //     border: '1px solid #ddd', 
    //     borderRadius: '8px', 
    //     marginLeft: '20px', 
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center' // Align content in the center of the parallel box
    //   }}>
    //     <h3>Box Content</h3>
    //     <p>This is the parallel box.</p>
    //     <p>Feel free to add any content here.</p>
    //   </div>

    // </div>
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center px-4 py-12 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:gap-4 gap-4 w-full max-w-6xl h-full">
          
          <div className="flex-1 bg-white border border-gray-300 rounded-2xl p-4 shadow-lg overflow-auto min-h-0">
            <EntryForm />
          </div>
    
          <div className="flex-1 bg-white border border-gray-300 rounded-2xl p-4 shadow-lg overflow-auto min-h-0">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Your Entries</h3>
            <EntryList />
          </div>
    
        </div>
      </div>
    );
      
    }
  

export default Dashboard
