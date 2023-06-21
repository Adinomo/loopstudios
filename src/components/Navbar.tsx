import React, { useState } from 'react';
import menu from '../../src/assets/img/icon-hamburger.svg';
import close from '../assets/img/icon-close.svg';

function Navbar() {
	const [open, setOpen] = useState(false)
  return (
			<nav className={`navbar ${open ? "bg-black md:bg-transparent" : ""}`}>
				<label className="font-bold text-2xl md:text-md ms-4 md:ms-0">
					loopstudios
				</label>
				<img
					src={open ? close : menu}
					alt="menu"
					className="block text-md absolute top-[1.6rem] right-7 md:hidden cursor-pointer"
					onClick={() => setOpen(!open)}
				/>
				<ul className={`nav-items ${open ? "opacity-100 md:opacity" : "opacity-0 md:opacity-100"}`}>
					<li className="px-3 md:text-sm text-2xl font-[100] font-secondary uppercase md:lowercase md:font-primary pt-3 md:pt-0">
						About <div></div>
					</li>
					<li className="px-3 md:text-sm text-2xl font-[100] font-secondary uppercase md:lowercase md:font-primary pt-3 md:pt-auto md:pt-0">
						Careers <div></div>
					</li>
					<li className="px-3 md:text-sm text-2xl font-[100] font-secondary uppercase md:lowercase md:font-primary pt-3 md:pt-auto md:pt-0">
						Events <div></div>
					</li>
					<li className="px-3 md:text-sm text-2xl font-[100] font-secondary uppercase md:lowercase md:font-primary pt-3 md:pt-auto md:pt-0">
						Products <div></div>
					</li>
					<li className="px-3 md:text-sm text-2xl font-[100] font-secondary uppercase md:lowercase md:font-primary pt-3 md:pt-auto md:pt-0">
						Support <div></div>
					</li>
				</ul>
			</nav>
		);
}

export default Navbar