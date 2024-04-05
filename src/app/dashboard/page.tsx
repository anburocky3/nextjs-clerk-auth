import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

const DashboardPage = async () => {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }
  return (
    <div className="bg-white p-5 m-10 border rounded">
      <div className="space-y-10">
        <div>
          <h1 className="font-semibold">Dashboard</h1>
          <p className="text-gray-600">
            This is your dashboard. You can add more components or features
            here.
          </p>
        </div>
        <div className="bg-neutral-200 p-5 rounded">
          <ul className="list-none">
            <li className="mb-2">
              <span className="font-semibold">First Name:</span>{" "}
              {user.firstName}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Last Name:</span> {user.lastName}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              {user.emailAddresses[0].emailAddress}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
