import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import ChatbotIcon from './ChatbotIcon';
import ChatbotWindow from './ChatbotWindow';
import './Chatbot.css';

// Health-related pre-defined responses
const healthResponses = {
  greetings: [
    "Hello! I'm your Health & Wellness Assistant. How can I help you today?",
    "Hi there! I'm here to assist with your health and wellness questions. What would you like to know?",
    "Welcome! I'm your personal health assistant. Ask me anything about yoga, meditation, or health topics!"
  ],
  yoga: [
    "Yoga is a mind and body practice that combines physical postures, breathing exercises, and meditation. It offers many benefits including improved flexibility, strength, and mental well-being.",
    "There are many yoga styles to explore, from gentle Hatha to more vigorous Vinyasa. The best style depends on your fitness level and goals.",
    "Regular yoga practice can help reduce stress, improve sleep quality, and enhance overall physical health."
  ],
  meditation: [
    "Meditation is a practice that involves focusing your mind on a particular object, thought, or activity to train attention and awareness.",
    "Regular meditation can reduce stress, control anxiety, promote emotional health, and enhance self-awareness.",
    "To start meditating, find a quiet place, sit comfortably, focus on your breath, and gently bring your attention back whenever your mind wanders."
  ],
  nutrition: [
    "A balanced diet typically includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.",
    "Staying hydrated is essential for overall health. Aim to drink about 8 glasses of water daily, adjusting based on activity level and climate.",
    "Portion control is key to maintaining a healthy weight. Pay attention to hunger cues and avoid eating out of boredom or stress."
  ],
  exercise: [
    "Regular physical activity offers numerous benefits, including weight management, reduced disease risk, stronger bones, and improved mental health.",
    "Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week, plus muscle-strengthening activities twice weekly.",
    "Find activities you enjoy to make exercise a sustainable habit. This could be walking, swimming, dancing, cycling, or team sports."
  ],
  sleep: [
    "Adults typically need 7-9 hours of quality sleep per night. Consistent sleep schedules help optimize sleep quality.",
    "Good sleep hygiene includes limiting screen time before bed, creating a comfortable sleep environment, and avoiding caffeine and large meals close to bedtime.",
    "Quality sleep is essential for physical health, cognitive function, and emotional well-being."
  ],
  default: [
    "I'm here to help with health and wellness topics. Could you provide more details about what you'd like to know?",
    "I'm not sure I understand. Could you rephrase your question about health, yoga, meditation, or nutrition?",
    "I'm still learning! For specific medical advice, please consult with a healthcare professional."
  ]
};

// Function to get a response based on user input
const getResponse = (input) => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
    return getRandomResponse(healthResponses.greetings);
  } else if (lowerInput.includes('yoga')) {
    return getRandomResponse(healthResponses.yoga);
  } else if (lowerInput.includes('meditation') || lowerInput.includes('meditate')) {
    return getRandomResponse(healthResponses.meditation);
  } else if (lowerInput.includes('food') || lowerInput.includes('nutrition') || lowerInput.includes('diet')) {
    return getRandomResponse(healthResponses.nutrition);
  } else if (lowerInput.includes('exercise') || lowerInput.includes('workout') || lowerInput.includes('fitness')) {
    return getRandomResponse(healthResponses.exercise);
  } else if (lowerInput.includes('sleep') || lowerInput.includes('insomnia') || lowerInput.includes('rest')) {
    return getRandomResponse(healthResponses.sleep);
  } else {
    return getRandomResponse(healthResponses.default);
  }
};

// Function to get a random response from an array
const getRandomResponse = (responses) => {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
};

// Format current time for message timestamps
const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const Chatbot = () => {
  const authContext = useAuth();
  const user = authContext?.user;
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm your Health & Wellness Assistant. How can I help you today with yoga, meditation, or health questions?",
      time: getCurrentTime()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // If no user is logged in, don't render the chatbot
  if (!user) {
    return null;
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = {
      sender: 'user',
      text: inputValue,
      time: getCurrentTime()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking with setTimeout
    setTimeout(() => {
      const botResponse = {
        sender: 'bot',
        text: getResponse(userMessage.text),
        time: getCurrentTime()
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 800); // Faster response time for better UX
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Add a message about the uploaded file
    const fileMessage = {
      sender: 'user',
      text: `Uploaded: ${file.name}`,
      time: getCurrentTime()
    };
    
    setMessages(prev => [...prev, fileMessage]);

    // Bot response to file upload
    setTimeout(() => {
      let responseText = "";
      
      // Generate appropriate responses based on file type
      if (file.type.includes('image')) {
        responseText = `I've received your image: ${file.name}. This looks like a health-related image. Would you like me to analyze it or suggest related wellness content?`;
      } else if (file.type.includes('video')) {
        responseText = `Thanks for sharing the video: ${file.name}. It appears to be about health or wellness. Would you like recommendations for similar content?`;
      } else if (file.type.includes('pdf') || file.type.includes('document')) {
        responseText = `I've received your document: ${file.name}. It seems to contain health information. Do you have specific questions about the content?`;
      } else {
        responseText = `I've received your file: ${file.name}. If you have any questions about it related to health or wellness, please let me know.`;
      }
      
      const botResponse = {
        sender: 'bot',
        text: responseText,
        time: getCurrentTime()
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 800);
    
    // Reset the file input
    e.target.value = '';
  };

  return (
    <>
      <ChatbotIcon onClick={toggleChatbot} isOpen={isOpen} />
      <ChatbotWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSendMessage={handleSendMessage}
        handleKeyPress={handleKeyPress}
        handleFileUpload={handleFileUpload}
      />
      <div ref={messagesEndRef} />
    </>
  );
};

export default Chatbot; 