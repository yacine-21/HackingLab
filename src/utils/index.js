export const sendDataToServer = async (data, URL) => {
	console.log("====================================");
	console.log(data, URL);
	console.log("====================================");

	if (veriyfData(data)) {
		const url = "https://hacking-lab-back-yacine-21.vercel.app" + URL;

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		return await response.json();
	} else {
		return "error";
	}
};

const veriyfData = data => {
	const { ipAddress, level } = data;

	if (ipAddress && level) {
		return true;
	}
	return false;
};
