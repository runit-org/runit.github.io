import HelpContainer from "@/components/helpContainer";
import Image from "next/image";
import runitProfileView from "../../assets/runit-profile-view.png";
import runitCalendar from "../../assets/runit-calendar.png";
import runitStarredList from "../../assets/runit-starred-list.png";
import runitGivingStar from "../../assets/runit-giving-star.png";
import runitSendFeedback from "../../assets/runit-send-feedback.png";
import { CustomImg } from "@/components/customImg";

export default function Account() {
  return (
    //add title and children (modifiable)
    <HelpContainer title={"Account"}>
      <h4 className="subtitle">
        The Accounts section is your gateway to managing and personalizing your
        user profile within the application. Explore the essential features that
        empower you to control your account settings, enhance security, and
        connect with other users. Whether you're updating your profile details,
        starring users, or changing your password, this section provides a
        comprehensive guide to optimizing your user experience.
      </h4>
      <div className="container mt-8">
        <div id="Profile" className="anchor">
          <h3 className="mb-0">Profile</h3>
          <p>
            Access your profile page by clicking your Gravatar profile symbol at
            the top right corner of the navigation bar. This will show a
            dropdown; click 'Profile.' On your profile, view your past
            activities with dates and details. Scroll down to reveal more
            entries for better rendering. On the right side, find a card
            displaying your profile details, allowing you to easily update your
            information. You can also update your status message here. When
            viewing another user's profile, private activities such as event
            join requests, etc., won't be shown.
          </p>
          <CustomImg path={runitProfileView} alt="runit collab gif" />
        </div>

        <div id="Calendar" className="anchor">
          <h3 className="mb-0">Calendar</h3>
          <p>
            The second tab you can navigate to is the Calendar. Here, you can
            view events based on a given date. Choose the date on the right
            panel side calendar. Dates where you have events will have dots
            under the date, making it easier for you to navigate. You can go to
            the event page from here as well.
          </p>
          <CustomImg path={runitCalendar} alt="runit collab gif" />
        </div>

        <div id="View-List-of-Starred-Users" className="anchor">
          <h3 className="mb-0">View List of Starred Users</h3>
          <p>
            The third tab is the Starred tab. Here, find a list of users you
            have starred. View the list, with the option to show more entries
            for better rendering. You can also unstar users directly from this
            tab.
          </p>
          <CustomImg path={runitStarredList} alt="runit collab gif" />
        </div>

        <div id="Giving-Stars" className="anchor">
          <h3 className="mb-0">Giving Stars</h3>
          <p>
            To star a user, choose either to hover over their Gravatar image and
            click the star button, or go to their profile and give them a star
            on the top right corner of the user card.
          </p>
          <CustomImg path={runitGivingStar} alt="runit collab gif" />
        </div>

        <div id="Sending-Feedback" className="anchor">
          <h3 className="mb-0">Sending Feedback</h3>
          <p>
            Share your feedback about the app on the Feedback & Support tab.
            Here, options include support or feedback, along with selecting a
            category. If something breaks or doesn't work, choose support and
            specify the bug's category. If you have improvement ideas or believe
            something can be done better, select feedback and specify the
            category where we can improve.
          </p>
          <CustomImg path={runitSendFeedback} alt="runit collab gif" />
        </div>
      </div>
    </HelpContainer>
  );
}
