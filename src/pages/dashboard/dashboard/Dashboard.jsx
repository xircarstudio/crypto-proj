import React from "react";
import Card from "../../../components/ui/Card";
import { FaRegSmile } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
      <Card
        title="Welcome Back!"
        icon={<FaRegSmile size={24} className="text-primary" />}
        footer={
          <button className="text-primary hover:underline">See more</button>
        }
      >
        We're glad to see you. This card is fully reusable and styled for both
        light and dark themes.
      </Card>

      <Card
        title="Another Card"
        className="border border-gray-200 dark:border-gray-700"
      >
        You can customize the content, style, and actions.
      </Card>

      <Card
        title="Another Card"
        className="border border-gray-200 dark:border-gray-700"
      >
        You can customize the content, style, and actions.
      </Card>

      <Card
        title="Another Card"
        className="border border-gray-200 dark:border-gray-700"
      >
        You can customize the content, style, and actions.
      </Card>
    </div>
  );
};

export default Dashboard;
