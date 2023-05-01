// POST /api/new-meetup
import { MongoClient } from "mongodb"
const uri =
  "mongodb+srv://Andrii:dYtozbPxeHYQ2emW@cluster0.b7qb7.mongodb.net/?retryWrites=true&w=majority"

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body
      const client = await MongoClient.connect(uri)
      const db = client.db()
      const meetupsCollection = db.collection("meetups")
      const result = await meetupsCollection.insertOne(data)
      client.close()
      res.status(201).json({ message: "Meetup inserted!" })
    }
  } catch (err) {
    console.error(err)
		return res
      .status(500)
      .json({ message: "Internal Server Error. Failed to add the item" })
  }
}

export default handler
