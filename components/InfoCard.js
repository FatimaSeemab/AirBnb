import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import React from "react"
function InfoCard({img,location,title,description,star,price,total}) {
    return (
        <div className="flex px-2 py-7 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
                <Image  className="rounded-2xl" src={img} layout="fill" objectFit="cover" />
            </div>
            <div className="ml-10 flex flex-col flex-grow">
                <div className="flex  justify-between">
                    <p>
                        {location}
                    </p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400 "/>
                    </p>
                    <div className="">
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
