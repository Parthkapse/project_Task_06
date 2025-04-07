import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEntry } from "../apiServices/EntryformApi";

const EntryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        technology: "",
        company: "",
        description: ""
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addEntry,
        onSuccess: () => {
            queryClient.invalidateQueries(["entries"]);
            alert("Entry added successfully!");
            setFormData({ name: "", technology: "", company: "", description: "" });
        },
        onError: () => {
            alert("Failed to add entry");
        }
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        console.log(formData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, technology, company, description } = formData;

        if (name.length < 3) return alert("Name must be at least 3 characters");
        if (description.length < 20) return alert("Description too short");

        mutation.mutate(formData);
    };

    return (
      <div className="max-w-md mx-auto mt-4 p-4 bg-white h-full flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Add Details</h2>
    
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow justify-between space-y-3">
          <div>
            <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
            />
          </div>
    
          <div>
            <label htmlFor="technology" className="text-gray-700 font-medium">Technology</label>
            <input
              type="text"
              id="technology"
              value={formData.technology}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
            />
          </div>
    
          <div>
            <label htmlFor="company" className="text-gray-700 font-medium">Company</label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
            />
          </div>
    
          <div>
            <label htmlFor="description" className="text-gray-700 font-medium">Description</label>
            <textarea
              id="description"
              rows="2"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
            ></textarea>
          </div>
    
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-sm mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    );
    
};

export default EntryForm;
