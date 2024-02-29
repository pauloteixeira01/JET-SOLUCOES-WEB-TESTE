/* eslint-disable @next/next/no-img-element */
/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import React from "react";

export type SalesProps = {
  name: string;
  phone: string;
  date: string;
};

export default function SalesCard(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-3 bg-gray-900">
      <section className="flex justify-between gap-3">
        <div className=" h-12 w-12 rounded-full bg-gray-100 p-1">
          <img width={200} height={200} src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`} alt="avatar" />
        </div>
      </section>
      <div className="text-sm flex flex-col justify-center">
        <p>{props.name}</p>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
          {props.phone}
        </div>
      </div>
      <p>{props.date}</p>
    </div>
  );
}
