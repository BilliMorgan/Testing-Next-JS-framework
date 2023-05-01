import { Fragment } from "react";
import  Head  from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Meetup App</title>
				<meta
					name='description'
					content='Browse a huge list of highly active React meetups!'
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
    "mongodb+srv://Andrii:dYtozbPxeHYQ2emW@cluster0.b7qb7.mongodb.net/?retryWrites=true&w=majority"
  )
	const db = client.db();

	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find().toArray();
	client.close();
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
