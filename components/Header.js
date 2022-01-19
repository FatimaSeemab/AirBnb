import React from 'react';
import {SearchIcon} from "@heroicons/react/outline";
import {GlobeAltIcon,MenuIcon,UserIcon,UserCircleIcon} from "@heroicons/react/solid";
import Image from 'next/image';
import { useState } from 'react';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from 'next/dist/client/router';
import { DateRangePicker } from 'react-date-range';


function Header({placeholder}) {
  const [searchInput,setSearchInput]=useState("")
  const [startDate, setstartDate] = useState(new Date());
  const [noOfGuests, setnoOfGuests] = useState(1)
  const [endDate, setendDate] = useState(new Date());
  const SelectionRange={
      startDate:startDate,
      endDate:endDate,
      key:'selection'
  }
  const resetInput = ()=>{setSearchInput("")}
  const handleSelect=(ranges)=>{
   setstartDate(ranges.selection.startDate);
   setendDate(ranges.selection.endDate);
  }
  const search=()=>{router.push(
      {pathname:"/search",
       query:{
           location:searchInput,
           startDate:startDate.toISOString(),
           endDate:endDate.toISOString(),noOfGuests,
       }}
)}
  const router=useRouter();
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 '>
            <div onClick={()=>{router.push("/")}}
            className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src="https://links.papareact.com/qd3" 
                layout='fill'
                objectFit='contain'
                objectPosition="left" />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm  '>
              <input value={searchInput}  
              onChange={(e)=>{setSearchInput(e.target.value)}}
              type="text" 
              className="text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none" placeholder={placeholder||'start your search'}/>
            {/* { console.log(searchInput)} */}
              <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full  p-2 cursor-pointer md:mx-2' />
            </div>
            
            <div className='flex text-gray-500 space-x-4 items-center justify-end'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 text' />
                <div className='flex items-center border-2 p-2 rounded-full space-x-2'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
            {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto mt-10'>
                <DateRangePicker ranges={[SelectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}/>
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl flex-grow font-semibold'>
                        Number of Guests
                    </h2>
                    <UserIcon className='h-5'/>
                    <input type="number" className='w-12 pl-2 text-lg outline-none text-red-400' value={noOfGuests} 
                    onChange={(e)=>{setnoOfGuests(e.target.value)}}/>  

                </div>
                <div className='flex'>
                    <button onClick={resetInput}className='flex-grow text-gray-400'>
                      Cancel
                    </button>
                    <button 
                    onClick={search}
                    className='flex-grow text-red-400'>
                      Search
                    </button>
                </div>

            </div>
            
            )}
            
        </header>
        
    )
}

export default Header
