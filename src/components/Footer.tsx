import React from 'react'
import facebook from '../assets/img/icon-facebook.svg';
import twitter from '../assets/img/icon-twitter.svg';
import pinterest from '../assets/img/icon-pinterest.svg';
import instagram from '../assets/img/icon-instagram.svg';

function Footer() {
	const year = new Date().getFullYear()
  return (
			<div className="bg-black text-white px-5 mt-5 py-5">
				<div className='mx-auto w-fit'>
					<h2 className="font-bold text-2xl mb-4">loopstudios</h2>
					<ul className='text-center text-gray-300'>
						<li className='mt-2'>About</li>
						<li className='mt-2'>Careers</li>
						<li className='mt-2'>Events</li>
						<li className='mt-2'>Products</li>
						<li className='mt-2'>Support</li>
					</ul>
				</div>
				<div className='w-fit mx-auto mt-8'>
					<div className="mx-auto flex gap-x-4 w-fit">
						<img src={facebook} alt="" />
						<img src={twitter} alt="" />
						<img src={pinterest} alt="" />
						<img src={instagram} alt="" />
					</div>
					<p className='mt-2 text-gray-300'>© {year} Loopstudios. All rights reserved</p>
				</div>
			</div>
		);
}

export default Footer