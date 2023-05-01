import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
	const router = useRouter();

	async function addMeetupHandler(enteredMeetupData) {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetupData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		router.push("/");
	}
	return (
		<Fragment>
			<Head>
				<title>Create a new meetup here</title>
				<meta
					name='description'
					content='Add a new amazing networking opportunities'
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</Fragment>
	);
}

export default NewMeetupPage;
