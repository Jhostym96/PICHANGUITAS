const url = "https://6363105c66f75177ea3c9307.mockapi.io/users"

export const postUser = async (user) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    };
};


export const getUsers = async () => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};