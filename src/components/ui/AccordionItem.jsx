// AccordionItem.jsx
import { useAccordion } from "./Accordion";
import { FaChevronDown } from "react-icons/fa";

export default function AccordionItem({ index, title, children }) {
  const { openIndex, setOpenIndex } = useAccordion();
  const isOpen = openIndex === index;

  const toggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border rounded-md overflow-hidden">
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full p-4 font-medium text-left bg-gray-100 dark:bg-body"
      >
        {title}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out px-4 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
