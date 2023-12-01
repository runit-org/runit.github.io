import HelpContainer from "@/components/helpContainer";
import Image from "next/image";
import runitChangePassword from "../../assets/runit-change-password.png";
import runitUnverifiedHomepage from "../../assets/runit-unverified-homepage.png";
import runitVerifyAccountToken from "../../assets/runit-verify-account-token.png";
import runitConfirmationEmail from "../../assets/runit-confirmation-email.png";
import runitEmailVerified from "../../assets/runit-email-verified.png";

export default function Security() {
  return (
    //add title and children (modifiable)
    <HelpContainer title={"Security"}>
      <p id="Change-Password">
        <b>Change Password</b>
        <br />
        To change your password, navigate to the Security Settings tab under
        your profile page. Here, provide your current password and confirm your
        new password.
        <Image
          priority={true}
          src={runitChangePassword}
          alt="runit collab gif"
          className="w-1/2"
        />
      </p>
      <br />
      <p id="Unverified-Account-Restricted-Access">
        <b>Unverified Account Restricted Access</b>
        <br />
        After registration, you'll initially be an unverified user until you've
        confirmed your email address. As an unverified account, you'll notice
        the 'Verify your account' box on the main homepage and your profile
        page. Access to certain features, like the 'Create Event' box, is
        restricted, and you won't be able to request to join events.
        <Image
          priority={true}
          src={runitUnverifiedHomepage}
          alt="runit collab gif"
          className="w-1/2"
        />
      </p>
      <br />
      <p id="Verifying-Account">
        <b>Verifying Account</b>
        <br />
        To verify your account, click on the 'Verify' button under the 'Verify
        Account' box. You'll be redirected to the following page, where you can
        enter the token sent to your email.
        <Image
          priority={true}
          src={runitVerifyAccountToken}
          alt="runit collab gif"
          className="w-1/2"
        />
        The email sent to you will look something like this:
        <Image
          priority={true}
          src={runitConfirmationEmail}
          alt="runit collab gif"
          className="w-1/2"
        />
        Once you've completed that, your email will be verified, granting you
        full access to the application.
        <Image
          priority={true}
          src={runitEmailVerified}
          alt="runit collab gif"
          className="w-1/2"
        />
      </p>
    </HelpContainer>
  );
}
