import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";

function Profile() {
  const [user, setUser] = useState<CognitoUser | null>(null);
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();
    setUser(user);
  }
  if (!user) return null;
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">Profile</h1>
      <h3 className="font-medium text-gray-500 my-2">
        Username: {user.getUsername}
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Email: {user.getUserAttributes}
      </p>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Profile);
