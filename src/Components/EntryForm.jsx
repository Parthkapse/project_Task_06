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
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-4">Add Entry Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="technology" className="block text-sm font-medium text-gray-700">Technology</label>
                    <input
                        type="text"
                        id="technology"
                        value={formData.technology}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        rows="3"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
    
};

export default EntryForm;
