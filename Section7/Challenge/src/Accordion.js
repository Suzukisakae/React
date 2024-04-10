import React from "react";
import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          key={index}
          num={index}
          currOpen={currOpen}
          onOpen={setCurrOpen}
          title={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      {/* Test children */}
      <AccordionItem
        num={23}
        currOpen={currOpen}
        onOpen={setCurrOpen}
        title="Test"
      >
        <p>Test</p>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
