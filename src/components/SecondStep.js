import React from "react";
import { Link } from "react-router-dom";

function SecondStep() {
	return (
		<div className='flex w-screen h-screen justify-center items-center flex-col'>
			<div className='mb-32 flex  justify-center items-center flex-col'>
				<h1 className='text-red-800 mb-10 text-3xl font-bold underline text-center'>
					EXPLICATION DU SITE
				</h1>

				<p className='text-white text-left'>
					1- PRENEZ L'IP D'UNE TARGET (VOTRE VICTIME)
					<br />
					2- GARDER LE A COTE DE VOUS
					<br />
					3- CHOISISSEZ UN NIVEAU DE HACKING
					<br />
					4- CLIQUEZ SUR HACK
					<br />
					5- ATTENDEZ QUE LE HACKING SOIT TERMINE
					<br />
					6- VOUS POUVEZ TÉLÉCHARGER LE FICHIER DE RÉSULTAT
					<br />
					7- PROFITEZ DE VOTRE HACKING
				</p>

				<div className='mt-20 flex justify-between w-50'>
					<button className=' bg-blue hover:bg-blue-dark bg-slate-700 hover:bg-slate-800  text-white font-bold py-2 px-4 rounded'>
						<Link to={"/"}>PRÉCEDENT</Link>
					</button>
					<button className=' bg-blue hover:bg-blue-dark bg-slate-700 hover:bg-slate-800  text-white font-bold py-2 px-4 rounded'>
						<Link to={"/finalStep"}>NEXT</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default SecondStep;
