import React, { useState } from "react";
import Card from "/src/components/ui/Card";
import { FaRegSmile } from "react-icons/fa";
import Accordion from "/src/components/ui/Accordion";
import AccordionItem from "/src/components/ui/AccordionItem";
import Modal from "/src/components/ui/Modal";
import Button from "/src/components/common/buttons/Button";

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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
              <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title="Reusable Modal"
              >
                <p>This is a reusable modal component with custom content.</p>
                <div className="mt-4 text-right">
                  <Button type="secondary" onClick={() => setModalOpen(false)}>
                    Close
                  </Button>
                </div>
              </Modal>
            </AccordionItem>
          </Accordion>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Reusable Modal"
        >
          <p>This is a reusable modal component with custom content.</p>
          <div className="mt-4 text-right">
            <Button type="secondary" onClick={() => setModalOpen(false)}>
              Close
            </Button>
          </div>
        </Modal>
        <Button type="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
      </Card>
    </div>
  );
};

export default Dashboard;
