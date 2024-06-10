import React from 'react';
import MainNavigator from "./src/components/MainNavigator";
import utilities from "./tailwind.json";
import {TailwindProvider} from "tailwind-rn";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <MainNavigator />
    </TailwindProvider>
  );
}
