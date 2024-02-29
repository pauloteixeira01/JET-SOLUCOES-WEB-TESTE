'use client'

import React from "react";
import {
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell
} from "@nextui-org/react";

export default async function Home() {
  return (
    <div className="w-full h-lvh flex justify-center">
      <Table className="w-2/3 flex justify-center items-center">
        <TableHeader>
          <TableColumn className="text-gray-400">CAR</TableColumn>
          <TableColumn className="text-gray-400">NEXT RESERVATION</TableColumn>
          <TableColumn className="text-gray-400">STATUS</TableColumn>
          <TableColumn className="text-gray-400">RATING</TableColumn>
          <TableColumn className="text-gray-400">ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className="flex justify-center items-center">
              <img src="/car.jpeg" alt="cara" width="80"/>
              <p className="ml-4">Mini Cooper 2020</p>
            </TableCell>
            <TableCell><p className="flex justify-center items-center text-gray-500">11/07</p></TableCell>
            <TableCell><p className="flex justify-center items-center text-green-700 font-semibold pl-5">Available</p></TableCell>
            <TableCell className="flex justify-center items-center">
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
            </TableCell>
            <TableCell className="pl-6"><img src="/dots-three-vertical.svg" alt="cara" width="40"/></TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell className="flex justify-center items-center">
              <img src="/car.jpeg" alt="cara" width="80"/>
              <p className="ml-4">Mini Cooper 2020</p>
            </TableCell>
            <TableCell><p className="flex justify-center items-center text-gray-500">11/07</p></TableCell>
            <TableCell><p className="flex justify-center items-center text-green-700 font-semibold pl-5">Available</p></TableCell>
            <TableCell className="flex justify-center items-center">
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
            </TableCell>
            <TableCell className="pl-6"><img src="/dots-three-vertical.svg" alt="cara" width="40"/></TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell className="flex justify-center items-center">
              <img src="/car.jpeg" alt="cara" width="80"/>
              <p className="ml-4">Mini Cooper 2020</p>
            </TableCell>
            <TableCell><p className="flex justify-center items-center text-gray-500">11/07</p></TableCell>
            <TableCell><p className="flex justify-center items-center text-green-700 font-semibold pl-5">Available</p></TableCell>
            <TableCell className="flex justify-center items-center">
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
            </TableCell>
            <TableCell className="pl-6"><img src="/dots-three-vertical.svg" alt="cara" width="40"/></TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="flex justify-center items-center">
              <img src="/car.jpeg" alt="cara" width="80"/>
              <p className="ml-4">Mini Cooper 2020</p>
            </TableCell>
            <TableCell><p className="flex justify-center items-center text-gray-500">11/07</p></TableCell>
            <TableCell><p className="flex justify-center items-center text-green-700 font-semibold pl-5">Available</p></TableCell>
            <TableCell className="flex justify-center items-center">
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
            </TableCell>
            <TableCell className="pl-6"><img src="/dots-three-vertical.svg" alt="cara" width="40"/></TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell className="flex justify-center items-center">
              <img src="/car.jpeg" alt="cara" width="80"/>
              <p className="ml-4">Mini Cooper 2020</p>
            </TableCell>
            <TableCell><p className="flex justify-center items-center text-gray-500">11/07</p></TableCell>
            <TableCell><p className="flex justify-center items-center text-green-700 font-semibold pl-5">Available</p></TableCell>
            <TableCell className="flex justify-center items-center">
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
            </TableCell>
            <TableCell className="pl-6"><img src="/dots-three-vertical.svg" alt="cara" width="40"/></TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell className="flex justify-center items-center">
              <img src="/car.jpeg" alt="cara" width="80"/>
              <p className="ml-4">Mini Cooper 2020</p>
            </TableCell>
            <TableCell><p className="flex justify-center items-center text-gray-500">11/07</p></TableCell>
            <TableCell><p className="flex justify-center items-center text-green-700 font-semibold pl-5">Available</p></TableCell>
            <TableCell className="flex justify-center items-center">
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
              <img src="/star-rate.svg" alt="cara" width="30"/>
            </TableCell>
            <TableCell className="bg-slate-500 text-center"><img src="/dots-three-vertical.svg" alt="cara" width="40"/></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}