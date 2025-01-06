"use client";
import React from "react";
import { useProperties } from "./hooks/properties.hook";
import Card from "./components/card";

type Props = {};

function PropertyListing({}: Props) {
  const { properties } = useProperties();

  console.log(properties);

  return (
    <div>
      <Card data={properties} />
    </div>
  );
}

export default PropertyListing;
