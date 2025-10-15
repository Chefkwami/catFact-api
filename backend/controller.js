import axios from "axios";

export const info = async(req, res, next) => {
    try {
        const catUrl = "https://catfact.ninja/fact";
        const response = await axios.get(catUrl);
        const catFact = response.data;

        const currrentTime = new Date();
        await res.status(200).send({
            status: "success",
            user: {
                email: "sitsofefeyi28@gmail.com",
                name: "Sitsofe Feyi Kwami",
                stack: "Node.js/Express/MongoDB/Mongoose",
            },
            timeStamp: currrentTime,
            fact: catFact.fact,

        });

    } catch (error) {
        next(error);
    }
};