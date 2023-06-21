import React, { ReactNode } from "react";
import earth from "../assets/images/desktop/image-deep-earth.jpg";
import arcade from "../assets/images/desktop/image-night-arcade.jpg";
import teamvr from "../assets/images/desktop/image-soccer-team.jpg";
import grid from "../assets/images/desktop/image-grid.jpg";
import abovevr from "../assets/images/desktop/image-from-above.jpg";
import borealis from "../assets/images/desktop/image-pocket-borealis.jpg";
import fisheye from "../assets/images/desktop/image-fisheye.jpg";
import curiosity from "../assets/images/desktop/image-curiosity.jpg";
import earth_sm from "../assets/images/mobile/image-deep-earth.jpg";
import arcade_sm from "../assets/images/mobile/image-night-arcade.jpg";
import teamvr_sm from "../assets/images/mobile/image-soccer-team.jpg";
import grid_sm from "../assets/images/mobile/image-grid.jpg";
import abovevr_sm from "../assets/images/mobile/image-from-above.jpg";
import borealis_sm from "../assets/images/mobile/image-pocket-borealis.jpg";
import fisheye_sm from "../assets/images/mobile/image-fisheye.jpg";
import curiosity_sm from "../assets/images/mobile/image-curiosity.jpg";

function List({ image, image_sm, text }: { image: string, image_sm:string, text: string }) {
	return (
		<div className="relative w-fit h mx-auto cursor-pointer text-white hover:text-black">
			<picture>
				<source
					srcSet={image_sm}
					media="(max-width: 560px)"
				/>
				<img
					src={image}
					alt={text}
					className="w-[90%] sm:w-[15rem] hover:opacity-50 lg:h-[25rem] md:h-[24rem] mx-auto"
				/>
			</picture>
			<label className="md:ms-4 ms-8 absolute md:w-[66.5%] w-fit leading-10 bottom-5 text-[2.2rem] font-[100] uppercase font-secondary">
				{text}
			</label>
		</div>
	);
}

function Creations() {
	const listData = [
		{ text: "Deep earth", image: earth, image_sm: earth_sm },
		{ text: "Night arcade", image: arcade, image_sm: arcade_sm },
		{ text: "Soccer team VR", image: teamvr, image_sm: teamvr_sm },
		{ text: "The grid", image: grid, image_sm: grid_sm },
		{ text: "From up above VR", image: abovevr, image_sm: abovevr_sm },
		{ text: "Pocket borealis", image: borealis, image_sm: borealis_sm },
		{ text: "The curiosity", image: curiosity, image_sm: curiosity_sm },
		{ text: "Make it fisheye", image: fisheye, image_sm: fisheye_sm },
	];
	return (
		<div className="md:mt-20 mt-10 pb-0 leading-[2.7rem] sm:w-[80%] mx-auto">
			<h2 className="font-secondary mb-8 uppercase text-[2.6rem] md:text-[3.6rem] font-[100] text-center">
				Our Creations
			</h2>
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-7 md:gap-y-4 gap-x-2">
				{listData.map((el: { text: string, image_sm:string, image: string }, index) => (
					<List
					   key={index}
						text={el.text}
						image={el.image}
						image_sm={el.image_sm}
					/>
				))}
			</div>
		</div>
	);
}

export default Creations;
