import HelpContainer from "@/components/helpContainer";
import Image from "next/image";
import runitBrowseEventsPic from "../../assets/runit-browse-events.png";
import runitEventCardZoomed from "../../assets/runit-event-card-zoomed.png";
import runitEventSuggestions from "../../assets/runit-event-suggestions.png";
import runitCreateEvent from "../../assets/runit-create-event.png";
import runitJoinEvent from "../../assets/runit-join-event.png";
import runitEventPage from "../../assets/runit-event-page.png";
import runitCommentMention from "../../assets/runit-comment-mention.png";
import runitLikeComment from "../../assets/runit-like-comment.png";
import runitViewMembers from "../../assets/runit-view-members.png";
import runitManageApplicants from "../../assets/runit-manage-applicants.png";
import runitEventNotifications from "../../assets/runit-event-notifications.png";
import { CustomImg } from "@/components/customImg";

export default function Event() {
  return (
    //add title and children (modifiable)
    <HelpContainer title={"Events"}>
      <h4 className="subtitle">
        Explore the Events section to dive into the heart of collaborative
        experiences. Discover the dynamic features that empower you to create,
        join, and manage events seamlessly. From crafting personalized events to
        joining real-time happenings, this section provides a comprehensive
        overview of the tools and functionalities at your disposal.
      </h4>
      <div className="container mt-8">
        <div id="Browsing-Events" className="anchor">
          <h3 className="mb-0">Browsing Events</h3>
          <p>
            Navigate through the main page to explore events efficiently. The
            list is organized chronologically, presenting event cards with
            pertinent indicators. At the end of each scroll, you can find a
            'show more' button which is a type of loading feature we implemented
            for more efficient rendering.
          </p>
          <CustomImg path={runitBrowseEventsPic} alt="runit collab gif" />
          Each card includes details like the event creator's username, creation
          timestamp, join status, event title, and a WYSIWYG event description.
          Keep an eye on event statuses—pending, underway, ended, or canceled.
          To delve into detailed event information, click the 'Details' button
          for an in-depth technical overview.
          <CustomImg path={runitEventCardZoomed} alt="runit collab gif" />
        </div>

        <div id="Event-Suggestions" className="anchor">
          <h3 className="mb-0">Event Suggestions</h3>
          <p>
            On the left panel, you can see a list of suggested events curated
            from eventfinda.com. These events are live and can be used as
            templates for creating your own events. You can invite people to
            join you in attending these events. The templates provide essential
            details such as a link, time, and more, enabling you to efficiently
            use this information for your event.
          </p>
          <CustomImg path={runitEventSuggestions} alt="runit collab gif" />
        </div>

        <div id="Creating-An-Event" className="anchor">
          <h3 className="mb-0">Creating An Event</h3>
          <p>
            Effortlessly craft your events on the home page with our
            user-friendly interface. Utilize features like a concise event
            title, a convenient dropdown for selecting date and time, and a
            versatile WYSIWYG editor. The editor empowers you to seamlessly
            incorporate links, emphasize text with bold characters, and tailor
            the content to your preferences. Your event creation experience,
            simplified and customizable, starts here.
          </p>
          <CustomImg path={runitCreateEvent} alt="runit collab gif" />
        </div>

        <div id="Joining-An-Event" className="anchor">
          <h3 className="mb-0">Joining An Event</h3>
          <p>
            Joining events is simple – just click the '+ Join' button on the top
            right corner of each event card or in the event details. After
            clicking join, the event creator receives a notification, giving
            them the option to either accept or decline your request. Your
            status on each event will be displayed on the join button once
            you've become involved.
          </p>
          <CustomImg path={runitJoinEvent} alt="runit collab gif" />
        </div>

        <div id="Event-Page" className="anchor">
          <h3 className="mb-0">Event Page</h3>
          <p>
            Clicking on 'Details' opens the event page, where you can explore
            the full event description, comments, and the list of participants.
            Additionally, you can post comments directly from this page. If
            you're the event creator, you have the authority to accept or
            decline participation requests right here.
          </p>
          <CustomImg path={runitEventPage} alt="runit collab gif" />
        </div>

        <div id="Writing-Comments" className="anchor">
          <h3 className="mb-0">Writing Comments</h3>
          <p>
            After being accepted into an event or if you're the event owner,
            contribute to the conversation by writing comments under the event.
            Your comments will appear on the left panel of the event details.
            Utilize features like tagging users with the @ symbol followed by
            their username or a suggested username from event members. Once
            tagged, the target user will be notified of your message. Notify
            everyone by using @everyone.
          </p>
          <CustomImg path={runitCommentMention} alt="runit collab gif" />
          <p>
            You can also express appreciation by liking comments – simply click
            the heart symbol under the comment, and the user will be notified if
            someone likes their contribution.
          </p>
          <CustomImg path={runitLikeComment} alt="runit collab gif" />
        </div>

        <div id="Viewing-Members" className="anchor">
          <h3 className="mb-0">Viewing Members</h3>
          <p>
            Once you're in the event, explore a list of all accepted members by
            clicking the Gravatar image circles under the event description.
            Each member is displayed with their username and Gravatar images.
            From here, you can conveniently navigate to their profiles for
            further details.
          </p>
          <CustomImg path={runitViewMembers} alt="runit collab gif" />
        </div>

        <div id="Managing-Applicants" className="anchor">
          <h3 className="mb-0">Managing Applicants</h3>
          <p>
            As an event creator, efficiently manage applicants who've requested
            to join your event. Find the applicant panel right under the create
            comment section within the event details page. You have the
            flexibility to either tick to accept a request or cross to decline
            it. Both actions will notify the applicant. By accepting an
            applicant, you grant them the ability to create comments under your
            event, facilitating their active participation.
          </p>
          <CustomImg path={runitManageApplicants} alt="runit collab gif" />
        </div>

        <div id="Notifications" className="anchor">
          <h3 className="mb-0">Notifications</h3>
          <p>
            Stay informed with notifications for key event actions, including
            requests to join your event, your requests to join other users'
            events, and the creation of comments. Access these notifications
            conveniently located at the top right of your navigation bar.
          </p>
          <CustomImg path={runitEventNotifications} alt="runit collab gif" />
        </div>
      </div>
    </HelpContainer>
  );
}
