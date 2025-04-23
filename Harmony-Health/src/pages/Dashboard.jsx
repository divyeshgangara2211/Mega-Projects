import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  
  const moods = ['ok', 'good', 'not good', 'sad', 'angry', 'calm'];
  const experiences = [
    'panic attacks',
    'fear',
    'low energy',
    'lack of sleep',
    'nervousness',
    'negative thinking patterns'
  ];
  
  const toggleMood = (mood) => {
    setSelectedMood(mood === selectedMood ? null : mood);
  };
  
  const toggleExperience = (experience) => {
    setSelectedExperiences(prev => 
      prev.includes(experience)
        ? prev.filter(exp => exp !== experience)
        : [...prev, experience]
    );
  };

  const services = [
    { title: 'Personalized wellness plans', icon: '📋', description: 'Tailored plans for your health journey' },
    { title: 'Personalized meal plans', icon: '🥗', description: 'Nutrition guidance based on your needs' },
    { title: 'Online meetings', icon: '💻', description: 'Virtual sessions with health experts' },
    { title: 'Yoga sessions', icon: '🧘', description: 'Guided yoga for mind-body balance' },
    { title: 'Guided meditation', icon: '🧠', description: 'Mindfulness practices for mental clarity' },
    { title: 'Therapy journey', icon: '🤝', description: 'Support for your mental health path' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold text-white">Hi, {user.username}</p>
                <p className="text-gray-400">Welcome back!</p>
              </div>
            </div>
            
            <nav className="space-y-4">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-md p-2 transition-colors"
                >
                  <span className="mr-3">{service.icon}</span>
                  <span>{service.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold mb-8">Your Wellness Dashboard</h1>
          
          {/* Mood Tracker */}
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">How do you feel today?</h2>
            <p className="text-gray-400 mb-4">Track your mood to help identify patterns</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => toggleMood(mood)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedMood === mood 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Have you experienced any of these this week?</h2>
            <div className="flex flex-wrap gap-3">
              {experiences.map((experience) => (
                <button
                  key={experience}
                  onClick={() => toggleExperience(experience)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedExperiences.includes(experience) 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {experience}
                </button>
              ))}
            </div>
          </div>
          
          {/* Recommendations */}
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Personalized Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2">5-Minute Breathing Exercise</h3>
                <p className="text-gray-400 mb-3">Reduce stress with deep breathing techniques</p>
                <button className="text-purple-500 hover:text-purple-400 font-medium">Start Now →</button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Calming Meditation</h3>
                <p className="text-gray-400 mb-3">10-minute guided session for mental clarity</p>
                <button className="text-purple-500 hover:text-purple-400 font-medium">Start Now →</button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Stress Management Tips</h3>
                <p className="text-gray-400 mb-3">Practical strategies for daily life</p>
                <button className="text-purple-500 hover:text-purple-400 font-medium">Read More →</button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Bedtime Routine Guide</h3>
                <p className="text-gray-400 mb-3">Improve sleep quality with these practices</p>
                <button className="text-purple-500 hover:text-purple-400 font-medium">Read More →</button>
              </div>
            </div>
          </div>
          
          {/* Progress Tracking */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Wellness Progress</h2>
              <select className="bg-gray-800 text-white border border-gray-700 rounded-md py-1 px-3">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-gray-400 mb-1">Meditation</p>
                <p className="text-3xl font-semibold">120 min</p>
                <p className="text-green-500 text-sm">↑ 15% from last week</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-gray-400 mb-1">Mood Score</p>
                <p className="text-3xl font-semibold">7.5/10</p>
                <p className="text-green-500 text-sm">↑ 5% from last week</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-gray-400 mb-1">Completed Activities</p>
                <p className="text-3xl font-semibold">12</p>
                <p className="text-green-500 text-sm">↑ 20% from last week</p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                Generate Detailed Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;