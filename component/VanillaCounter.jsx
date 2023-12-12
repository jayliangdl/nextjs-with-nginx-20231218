import React from "react";
import Counter from "./CounterComponent";
import { createRoot } from 'react-dom/client';

export default (domElement)=>{
  const root = createRoot(domElement);
  root.render(<Counter componentName={"VanillaCounter.js"}/>);
}