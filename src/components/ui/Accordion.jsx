import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export default function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
}

export function useAccordion() {
  return useContext(AccordionContext);
}
