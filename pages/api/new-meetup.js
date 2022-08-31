// POST /api/new-meetup
import { MongoClient } from "mongodb";

async function hadler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		// const {title, image, address, description } = data;
		const client = await MongoClient.connect(
			"mongodb+srv://Admin:Canada246!@cluster0.dvqbg.mongodb.net/?retryWrites=true&w=majority"
		);
		const db = client.db();

		const meetupsCollection = db.collection("meetups");

		const result = await meetupsCollection.insertOne(data);
		console.log(result);
		client.close();
		res.status(201).json({ message: "Mettup inserted!" });
	}
}

export default hadler;
