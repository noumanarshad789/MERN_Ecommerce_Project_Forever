import React from 'react'
import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-sm '>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum nesciunt incidunt unde laudantium eligendi reprehenderit, vel ea praesentium aperiam culpa? Obcaecati iusto odio quis voluptatem vero, eveniet nemo amet?
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Private Policy</li>
          </ul>

        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-234-567-8900</li>
            <li>example@forever.com</li>
          </ul>

        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright {new Date().getFullYear()} @ forever.com - All rights are reserved.</p>
      </div>

    </div>
  )
}

export default Footer
