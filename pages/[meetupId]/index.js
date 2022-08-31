import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { Fragment } from "react";

function MeetupDetails(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta name='description' content={props.meetupData.description}/>
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				title={props.meetupData.title}
				description={props.meetupData.description}
				address={props.meetupData.address}
			/>
		</Fragment>
	);
}
export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://Admin:Canada246!@cluster0.dvqbg.mongodb.net/?retryWrites=true&w=majority"
	);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
	client.close();
	return {
		fallback: false,
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(
		"mongodb+srv://Admin:Canada246!@cluster0.dvqbg.mongodb.net/?retryWrites=true&w=majority"
	);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");
	const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				description: selectedMeetup.description,
				image: selectedMeetup.image
			},
		},
	};
}

export default MeetupDetails;
