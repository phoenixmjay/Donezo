import React from "react";
import Chatbot from "./Chatbot";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f4f4f4" }}>
      <Chatbot />
    </div>
  );
};

export default App;
