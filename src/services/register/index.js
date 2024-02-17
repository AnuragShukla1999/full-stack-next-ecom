export default registerNewUser = async (formData) => {
    try {
        const response = await fetch("/api/register", {
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const finalData = await response.json();

        return finalData;
    } catch (error) {
        console.log("error", error)
    }
};