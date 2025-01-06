import React from "react";
import { LuBed, LuBath, LuCircleParking, LuLandPlot } from "react-icons/lu";

type Props = {
  keys: any;
  value: any;
};

function Features({ keys, value }: Props) {
  const icons = (ic: any, v: any) => {
    switch (ic) {
      case "area":
        return (
          <>
            <LuLandPlot /> {v} m&#178;
          </>
        );
      case "bedrooms":
        return (
          <>
            <LuBed /> {v}
          </>
        );
      case "bathrooms":
        return (
          <>
            <LuBath /> {v}
          </>
        );
      case "parkingSpaces":
        return (
          <>
            <LuCircleParking /> {v}
          </>
        );

      default:
    }
  };
  const string = (ic: any) => {
    switch (ic) {
      case "bedrooms":
        return "Kamar Tidur";
      case "bathrooms":
        return "Kamar Mandi";
      case "parkingSpaces":
        return "Parkir";
      case "area":
        return "Luas Tanah";
      default:
        return "";
    }
  };

  return (
    <div
      className="flex items-center gap-2 text-sm text-gray-500  cursor-pointer"
      title={string(keys)}>
      {icons(keys, value)}
    </div>
  );
}

export default Features;
