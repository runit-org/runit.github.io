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
      <h4 className="subtitle">
        The Security section is dedicated to ensuring the safety and integrity of 
        your user account. Explore features that empower you to manage your account's 
        security settings, change passwords, and provide valuable feedback for continuous 
        improvement. Learn about the verification process and essential actions you can 
        take to safeguard your experience within the application.
      </h4>
      <div className="container mt-2">
        <div id="Change-Password" className="anchor">
          <h3 className="mb-0">Change Password</h3>
          <p>
            To change your password, navigate to the Security Settings tab under
            your profile page. Here, provide your current password and confirm
            your new password.
          </p>
          <Image
            priority={true}
            src={runitChangePassword}
            alt="runit collab gif"
            className="w-1/2 my-8 rounded-xl"
          />
        </div>

        <div id="Unverified-Account-Restricted-Access" className="anchor">
          <h3 className="mb-0">Unverified Account Restricted Access</h3>
          <p>
            After registration, you'll initially be an unverified user until
            you've confirmed your email address. As an unverified account,
            you'll notice the 'Verify your account' box on the main homepage and
            your profile page. Access to certain features, like the 'Create
            Event' box, is restricted, and you won't be able to request to join
            events.
          </p>
          <Image
            priority={true}
            src={runitUnverifiedHomepage}
            alt="runit collab gif"
            className="w-1/2 my-8 rounded-xl"
          />
        </div>

        <div id="Verifying-Account" className="anchor">
          <h3 className="mb-0">Verifying Account</h3>
          <p>
            To verify your account, click on the 'Verify' button under the
            'Verify Account' box. You'll be redirected to the following page,
            where you can enter the token sent to your email.
          </p>
          <Image
            priority={true}
            src={runitVerifyAccountToken}
            alt="runit collab gif"
            className="w-1/2 my-8 rounded-xl"
          />
          <p>The email sent to you will look something like this:</p>
          <Image
            priority={true}
            src={runitConfirmationEmail}
            alt="runit collab gif"
            className="w-1/2 my-8 rounded-xl"
          />
          <p>
            Once you've completed that, your email will be verified, granting
            you full access to the application.
          </p>
          <Image
            priority={true}
            src={runitEmailVerified}
            alt="runit collab gif"
            className="w-1/2 my-8 rounded-xl"
          />
        </div>
      </div>
    </HelpContainer>
  );
}
