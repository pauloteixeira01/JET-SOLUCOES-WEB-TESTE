/** @format */

import { CardContent } from "@/app/components/card";
import SalesCard from "@/app/components/sales-card";
import {userSalesData} from './utils/data-table'
import Image from 'next/image'

export default async function Home() {
  return (
    <div className="h-lvh flex flex-col justify-around items-center">
      <div className="flex flex-none flex-col items-center">
        <Image
          src="/logo-jet-minimalist-white.svg"
          width={90}
          height={90}
          alt="Picture of the author"
        />
        <p>JET SOLUÇÕES WEB</p>
      </div>
      
      <section className="w-full grid grid-cols-1 gap-5 lg:w-2/3">
        <CardContent className="flex justify-between gap-5">
          <h3 className="text-center mb-10">Table responsiva pedida no teste</h3>
          {userSalesData.map((d, i) => (
            <SalesCard key={i} phone={d.phone} name={d.name} date={d.date} />
          ))}
        </CardContent>
      </section>
      
    </div>  
  );
}
