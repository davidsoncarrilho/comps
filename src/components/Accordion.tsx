import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

type AccordionType = {
  items: { label: string; content: string; id: string }[];
};

function Accordion({ items }: AccordionType) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    //Function used to avoid a bug when new value depends on olg
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((items, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={items.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {items.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{items.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
