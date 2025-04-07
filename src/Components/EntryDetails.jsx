import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleEntry } from "../apiServices/EntryformApi";

const EntryDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["entry", id],
    queryFn: () => getSingleEntry(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching entry</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">{data.name}</h2>
        <p className="text-lg mb-2"><strong>Technology:</strong> {data.technology}</p>
        <p className="text-lg mb-2"><strong>Company:</strong> {data.company}</p>
        <p className="text-lg"><strong>Description:</strong> {data.description}</p>
      </div>
    </div>
  );
  
};

export default EntryDetails;
