"use client";
import React from "react";
import { useProperties } from "./hooks/properties.hook";
import Card from "./components/card";
import Sidebar from "./components/sidebar";

type Props = {};

function PropertyListing({ }: Props) {
  const { properties } = useProperties();


  return (

    <main className="flex-1 p-6">


      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 bg-gray-200 p-2 rounded">
        <select className="border p-2 rounded-md bg-white">
          <option>Filter name</option>
        </select>
        <select className="border p-2 rounded-md bg-white">
          <option>Filter name</option>
        </select>
        <select className="border p-2 rounded-md bg-white">
          <option>Filter name</option>
        </select>
        <button className="bg-gray-200 p-2 rounded-md">Clean filters</button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card data={properties} />
      </div>
    </main>

  )

  // return (
  //   <Card data={properties} />
  // );
}

export default PropertyListing;
