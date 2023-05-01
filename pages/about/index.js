import { Fragment } from "react";

  function About(){
    return (
      <Fragment>
        <h1>Review of the project prototype</h1>
        <p>
          Current project was created to prototype Meetup application using Next
          JS framework. Server side rendering was used, as well as MongoDB. The
          project hosted by Vercel. All questions should be addressed to the
          author :
          <br />
          <br />
          <a href="https://billimorgan.github.io/"> Link to Author's portfolio</a>
          <br />
          <br />
          <p>Feel free to add your meetups to the list :)</p>
          <p>Cheers!</p>
        </p>
      </Fragment>
    )
  }

  export default About