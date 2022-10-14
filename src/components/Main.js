import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Main() {

	return (
		<div className='flex w-screen h-screen justify-center items-center flex-col'>
			<div className='mb-32 flex  justify-center items-center flex-col'>
				<h1 className='mb-10 text-3xl font-bold underline text-white text-center'>
					WELCOME TO THE HACKINGLAB
				</h1>

				<p className='text-white text-center'>
					YOU MUST BE A HACKER MEMBER COMMUNITY TO ACCESS THIS PAGE
					<br />
					IF YOU ARE NOT A MEMBER, PLEASE LEAVE IMMEDIATELY OR SEND ME MONEY VIA
					<br />
					<span className='text-2xl text-red-500'>PAYPAL ($1000)</span>
				</p>

				<button className='mt-20 bg-blue hover:bg-blue-dark bg-slate-700 hover:bg-slate-800  text-white font-bold py-2 px-4 rounded'>
					<Link to={"/secondStep"}>NEXT</Link>
				</button>
			</div>
		</div>
	);
}

export default Main;
