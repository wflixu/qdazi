export const login = async (params) => {
	const url = "http://127.0.0.1:8443/passport/login";
	try {
		const response = await fetch(url, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(params),
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error.message);
	}
};
