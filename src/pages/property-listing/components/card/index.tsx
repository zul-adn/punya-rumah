import React from "react";
import styles from "./card.module.css";
import { PropertyDocument } from "@/server/schema/property.schema";
import { formatToRupiah } from "@/utils/formating";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { kpr } from "@/utils/formula";
import Features from "../features";

interface CardProps<T> {
  data: PropertyDocument[];
}

const Card = <T,>({ data }: CardProps<T>) => {
  return (
    // <div className={styles.wrapper}>
    <>
      {data.map((dt, i) => (
        <div
          key={i}
          className="max-w-sm drop-shadow-md rounded-xl overflow-hidden shadow-md bg-white ">
          <div className="p-2">
            <img
              key={i}
              className="w-full h-48 object-cover rounded-xl"
              src={dt.images[0]}
              alt="Building"
            />
          </div>

          <div className="p-4">
            {/* <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
              Top Match
            </span> */}
            <p className="text-gray-600 text-sm font-bold">{dt.title}</p>
            <h3 className="text-gray-900 font-bold text-md mt-2">
              {formatToRupiah(dt.pricing.salePrice ?? 0)}
            </h3>
            <p className="text-sm text-gray-500">
              {formatToRupiah(kpr(dt.pricing.salePrice ?? 0))} /bulan
            </p>
            <div className="flex items-start text-gray-500 mt-3">
              <HiOutlineLocationMarker />
              <span className="text-sm ml-2">{dt.address.city}</span>
            </div>
            <div className="grid grid-cols-2 mt-3 gap-x-4">
              {Object.entries(dt.features).map(([key, value], i: number) => (
                <Features key={i} keys={key} value={value} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
    // </div>
  );
};

export default Card;
