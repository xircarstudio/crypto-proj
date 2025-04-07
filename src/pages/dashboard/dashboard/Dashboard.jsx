import React from "react";
import Card from "../../../components/ui/Card";
import { FaRegSmile } from "react-icons/fa";
import Accordion from "../../../components/ui/Accordion";
import AccordionItem from "../../../components/ui/AccordionItem";

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
          <Accordion>
            <AccordionItem index={0} title="What is this?">
              This is a reusable accordion with only one open at a time.
            </AccordionItem>
            <AccordionItem index={1} title="Is it animated?">
              Yes! It's using Tailwind transitions and conditional classes.
            </AccordionItem>
            <AccordionItem index={2} title="Can I add anything inside?">
              Of course! You can add text, images, links, or even other
              components.
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
