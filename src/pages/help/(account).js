import HelpContainer from "@/components/helpContainer";
import Image from "next/image";
import runitProfileView from "../../assets/runit-profile-view.png";
import runitCalendar from "../../assets/runit-calendar.png";
import runitStarredList from "../../assets/runit-starred-list.png";
import runitGivingStar from "../../assets/runit-giving-star.png";
import runitSendFeedback from "../../assets/runit-send-feedback.png";

export default function Account() {
  return (
    //add title and children (modifiable)
    <HelpContainer title={"Account"}>
      <hr />
      <br />
      <p id="Profile">
        <b>
          Profile
        </b>
        <br />
        Access your profile page by clicking your Gravatar profile symbol at the top right corner of the navigation bar. 
        This will show a dropdown; click 'Profile.' On your profile, view your past activities with dates and details. 
        Scroll down to reveal more entries for better rendering. 
        On the right side, find a card displaying your profile details, allowing you to easily update your information.
        You can also update your status message here. 
        When viewing another user's profile, private activities such as event join requests, etc., won't be shown.
        <Image
          priority={true}
          src={runitProfileView}
          alt="runit collab gif"
          className="w-1/2"
        />
      </p>
      <br />
      <p id="Calendar">
        <b>
          Calendar
        </b>
        <br />
        The second tab you can navigate to is the Calendar. 
        Here, you can view events based on a given date. 
        Choose the date on the right panel side calendar. 
        Dates where you have events will have dots under the date, 
        making it easier for you to navigate. 
        You can go to the event page from here as well.
        <Image
          priority={true}
          src={runitCalendar}
          alt="runit collab gif"
          className="w-1/2"
        />
      </p>
      <br />
      <p id="View List of Starred Users">
        <b>
          View List of Starred Users
        </b>
        <br />
        The third tab is the Starred tab. 
        Here, find a list of users you have starred. 
        View the list, with the option to show more entries for better rendering. 
        You can also unstar users directly from this tab.
        <Image
          priority={true}
          src={runitStarredList}
          alt="runit collab gif"
          className="w-1/2"
        />
      </p>
      <br />
      <p id="Giving Stars">
        <b>
          Giving Stars
        </b>
        <br />
        To star a user, choose either to hover over their Gravatar image and click 
        the star button, or go to their profile and give them a star on the top 
        right corner of the user card.
        <Image
          priority={true}
          src={runitGivingStar}
          alt="runit collab gif"
          className="w-1/2"
        />
      </p>
      <br />
      <p id="Sending Feedback">
        <b>
          Sending Feedback
        </b>
        <br />
        Share your feedback about the app on the Feedback & Support tab. 
        Here, options include support or feedback, along with selecting a category. 
        If something breaks or doesn't work, choose support and specify the bug's category. 
        If you have improvement ideas or believe something can be done better, select feedback and specify the category where we can improve.
        <Image
          priority={true}
          src={runitSendFeedback}
          alt="runit collab gif"
          className="w-1/2"
        />
      </p>
    </HelpContainer>
  );
}
