import React from "react";
import { ChatBot, ChatStep}  from "react-chatbotify";
import { ThemeProvider } from "styled-components";

// Define chatbot theme
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, sans-serif",
  headerBgColor: "#007bff",
  headerFontColor: "#fff",
  headerFontSize: "18px",
  botBubbleColor: "#007bff",
  botFontColor: "#fff",
  userBubbleColor: "#e0e0e0",
  userFontColor: "#000",
};

// Define chatbot steps
const steps: ChatStep[] = [
  {
    id: "1",
    message: "Hello! I'm your Goal Tracking Assistant. What's your name?",
    trigger: "name",
  },
  {
    id: "name",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Nice to meet you, {previousValue}! What goal would you like to set?",
    trigger: "goal",
  },
  {
    id: "goal",
    user: true,
    trigger: "5",
  },
  {
    id: "5",
    message: "Great! How long do you plan to achieve this goal?",
    trigger: "duration",
  },
  {
    id: "duration",
    options: [
      { value: "1 week", label: "1 Week", trigger: "final" },
      { value: "1 month", label: "1 Month", trigger: "final" },
      { value: "3 months", label: "3 Months", trigger: "final" },
    ],
  },
  {
    id: "final",
    message: "Awesome! I'll help you stay on track with your goal. Let's do this! 🚀",
    end: true,
  },
];

const GoalChatbot: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} />
    </ThemeProvider>
  );
};

export default GoalChatbot;
