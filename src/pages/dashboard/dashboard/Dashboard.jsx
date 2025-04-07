import React from "react";
import Card from "../../../components/ui/Card";
import { FaRegSmile } from "react-icons/fa";
import Accordion from "../../../components/ui/Accordion";

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
        <div className="max-w-md mx-auto mt-10 p-4">
          <Accordion title="What is this?">
            This is a reusable accordion built with React and Tailwind CSS.
          </Accordion>

          <Accordion title="Is it animated?">
            Yes! The open/close animation uses Tailwind's transition utilities.
          </Accordion>

          <Accordion title="Can I put anything inside?">
            Absolutely. You can include text, images, links—anything valid JSX.
          </Accordion>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
