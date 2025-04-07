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
    <div >
      <h2 >{data.name}</h2>
      <p><strong>Technology:</strong> {data.technology}</p>
      <p><strong>Company:</strong> {data.company}</p>
      <p><strong>Description:</strong> {data.description}</p>
    </div>
  );
};

export default EntryDetails;
