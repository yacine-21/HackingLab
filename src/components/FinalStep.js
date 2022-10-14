import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sendDataToServer } from "../utils";

function FinalStep() {
	const [vitcimIp, setVitcimIp] = useState();
	const [levelHacking, setLevelHacking] = useState(1);
	const [submit, setSubmit] = useState(false);

	const getData = async () => {
		const data = await sendDataToServer(
			{
				ipAddress: vitcimIp,
				level: levelHacking
			},
			"/post/getInfo"
		);
		console.log(data);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setSubmit(true);
	};

	const handleIpChange = e => {
		setVitcimIp(e.target.value);
	};

	const handleLevelChange = e => {
		setLevelHacking(e.target.value);
	};

	const resetFields = () => {
		if (submit) {
			setVitcimIp("");
			setLevelHacking(1);
			setSubmit(false);
		}
	};

	useEffect(() => {
		if (submit) {
			getData();
		}
	}, [submit]);

	return (
		<div className='flex w-screen h-screen justify-center items-center flex-col'>
			<div className='mb-32 flex  justify-center items-center flex-col'>
				<h1 className='text-red-800 mb-10 text-3xl font-bold underline text-center'>
					THIS IS THE FINAL STEP
				</h1>

				<div>
					<form id='form' className='flex flex-col' onSubmit={handleSubmit}>
						<label className='text-white mb-2' htmlFor='level'>
							CHOISISSEZ UN NIVEAU DE HACKING
						</label>
						<select
							defaultValue={levelHacking}
							onChange={e => handleLevelChange(e)}
							className='mb-10'
							name='level'
							id='level'
						>
							<option value={1}>LOW</option>
							<option value={2}>MEDIUM</option>
							<option value={3}>HIGH</option>
						</select>
						<label className=' mt-10 mb-2 text-white' htmlFor=''>
							IP DE LA VICTIME
						</label>
						<input
							placeholder='0.0.0.0'
							onChange={e => {
								handleIpChange(e);
							}}
							type='text'
						/>
						<button
							type='submit'
							className=' mt-10 bg-blue hover:bg-blue-dark bg-slate-700 hover:bg-slate-800  text-white font-bold py-2 px-4 rounded'
						>
							HACK
						</button>
					</form>
				</div>

				<div className='mt-20 flex justify-between w-50'>
					<button className=' bg-blue hover:bg-blue-dark bg-slate-700 hover:bg-slate-800  text-white font-bold py-2 px-4 rounded'>
						<Link to={"/secondStep"}>PRÉCEDENT</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default FinalStep;
