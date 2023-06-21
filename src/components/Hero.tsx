import React from 'react'
import img from "../assets/images/desktop/image-interactive.jpg";

function Hero() {
  return (
			<div className="mt-20 w-[90%] sm:w-[80%] mx-auto relative mb-5">
				<div className="h-fit">
					<img
						src={img}
						alt="Interactive"
						className="sm:h-[25rem] h-[16rem] md:w-[37rem] mx-auto lg:mx-0"
					/>
					<div className="lg:absolute mx-auto lg:mx-0 md:w-[35rem] right-0 bottom-0 h-fit lg:bg-white text-center lg:px-[4.3rem] pt-14">
						<h3 className="font-secondary text-[2.6rem] md:text-[3.6rem] leading-[3rem] font-[100]">
							THE LEADER IN INTERACTIVE VR
						</h3>
						<p className="mt-4 text-[0.9rem] font-[100] text-gray-400">
							Founded in 2011, Loopstudios has been producing world-class virtual
							reality projects for some of the best companies around the globe. Our
							award-winning creations have transformed businesses through digital
							experiences that bind to their brand.
						</p>
					</div>
				</div>
			</div>
		);
}

export default Hero