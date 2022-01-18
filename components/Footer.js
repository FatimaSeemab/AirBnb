import React from 'react'

function Footer() {
    return (
       <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
           <div className='space-y-4 text-gray-800'>
               <h5 className='font-bold'>About</h5>
               <p>How Airbnb Works</p>
               <p>Newsroom</p>
               <p>Investors</p>
               <p>Airbnb Plus</p>
               <p>Airbnb Luxe</p>
           </div>
           <div className='space-y-4 text-gray-800'>
               <h5 className='font-bold'>About</h5>
               <p>Accessibility</p>
               <p>E commerce</p>
               <p>A pretty Awesome Clone</p>
               <p>Referrals Accepted</p>
               <p>Favorites</p>
           </div>
           
           <div className='space-y-4 text-gray-800'>
           <h5 className='font-bold'>Host</h5>
               <p>Web Developer</p>
               <p>Full Stack</p>
               <p>Next Js </p>
               <p>React JS </p>
           </div>
           
       </div>

    );
}

export default Footer
