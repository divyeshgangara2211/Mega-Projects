import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ashwaniImage from '../assets/images/Ashwani Deswal.jpg';
import maheshImage from '../assets/images/Dr.Mahesh Desai.jpg';
import ellieImage from '../assets/images/Nutrition Expert.jpg';
import lucyaImage from '../assets/images/Lucya.jpg';

const AboutUs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/register');
    }
  };

  const team = [
    {
      name: 'Dr. Mahesh Desai',
      role: 'Chief Medical Officer',
      bio: 'Leading our medical initiatives with extensive experience in integrative healthcare approaches.',
      image: maheshImage
    },
    {
      name: 'Mr. Ashwani Deswal',
      role: 'Wellness Program Director',
      bio: 'A certified wellness coach with expertise in behavioral psychology and lifestyle modification techniques.',
      image: ashwaniImage
    },
    {
      name: 'Dr. Lucya',
      role: 'Psychiatrist and Mental Health Specialist',
      bio: 'Clinical psychologist specializing in stress management and anxiety reduction therapies.',
      image: lucyaImage
    },
    {
      name: 'Ms. Ellie Krieger',
      role: 'Nutrition Expert',
      bio: 'Registered dietitian with a passion for helping people develop sustainable eating habits.',
      image: ellieImage
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Harmony Health</h1>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            At Harmony Health, we believe in a holistic approach to wellness that integrates mental, emotional, and physical health. 
            Our mission is to empower individuals to achieve balanced lifestyles and long-term wellness through personalized tools, 
            resources, and guidance.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-300">
            We envision a world where everyone has access to personalized wellness solutions that address their unique needs. 
            By bridging the gap between mental and physical health and providing practical tools to sustain healthy habits, 
            we aim to help people lead more fulfilled and healthy lives.
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Holistic Approach</h3>
            <p className="text-gray-300">
              We address all aspects of well-being, recognizing that mental, emotional, and physical health are deeply interconnected.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Personalized Solutions</h3>
            <p className="text-gray-300">
              Our AI-driven platform adapts to your unique needs, preferences, and progress, creating truly tailored wellness plans.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Evidence-Based Practices</h3>
            <p className="text-gray-300">
              We combine ancient wisdom with modern science, ensuring all our recommendations are backed by research.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Supportive Community</h3>
            <p className="text-gray-300">
              Join like-minded individuals on their wellness journey, sharing experiences and providing mutual encouragement.
            </p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center">Our Expert Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-[350px] relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-full h-full object-cover ${
                    index <= 1 ? 'object-top scale-105' : 'object-center'
                  } transition-transform duration-300 hover:scale-110`}
                  style={{
                    maxHeight: '100%',
                    width: '100%'
                  }}
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800">
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-purple-400 mb-3 font-medium">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-gray-100 mb-6">
            Become part of our community and start your path to holistic wellness today.
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-purple-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            {user ? 'Go to Dashboard' : 'Get Started Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;