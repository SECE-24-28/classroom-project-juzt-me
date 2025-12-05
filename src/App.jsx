import React from "react";
import RectangleBox from "./rectangle-box/rectangle-box-component";
import Mycomponent from "./Galance/galance-component";
import ContactSection from "./Contact/ContactSection";

function App() {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%' }}>
      <RectangleBox />
      <Mycomponent />
      <ContactSection />
    </div>
  );
}
export default App;
