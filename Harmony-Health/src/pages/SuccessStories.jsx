import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SuccessStories = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleTransformationClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/register');
    }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer K.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      age: 34,
      occupation: 'Marketing Executive',
      quote: 'Harmony Health has transformed my approach to wellness. The personalized meditation exercises helped me reduce anxiety, and the meal plans have given me more energy throughout the day.',
      rating: 5,
      program: 'Stress Management'
    },
    {
      id: 2,
      name: 'Mark T.',
      avatar: 'https://randomuser.me/api/portraits/men/63.jpg',
      age: 42,
      occupation: 'Software Engineer',
      quote: 'After months of poor sleep, the sleep hygiene program and guided meditations have made a dramatic difference. I\'m sleeping better and feeling more productive during the day.',
      rating: 5,
      program: 'Sleep Improvement'
    },
    {
      id: 3,
      name: 'Sophia L.',
      avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
      age: 29,
      occupation: 'Teacher',
      quote: 'The yoga sessions and mindfulness practices have been a lifesaver during stressful school periods. I appreciate how everything is tailored to my schedule and energy levels.',
      rating: 4,
      program: 'Mindfulness & Yoga'
    },
    {
      id: 4,
      name: 'David R.',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      age: 51,
      occupation: 'Business Owner',
      quote: 'As someone who was skeptical about holistic approaches, I\'m amazed by how effective the Harmony Health program has been. The combination of physical activities and mental exercises has improved my overall well-being.',
      rating: 5,
      program: 'Executive Wellness'
    },
    {
      id: 5,
      name: 'Emma W.',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      age: 38,
      occupation: 'Nurse',
      quote: 'Working night shifts was taking a toll on my health until I found Harmony Health. The personalized plan helps me maintain balance despite my irregular schedule. The nutrition guidance has been particularly helpful.',
      rating: 4,
      program: 'Shift Worker Wellness'
    },
    {
      id: 6,
      name: 'James L.',
      avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
      age: 45,
      occupation: 'Architect',
      quote: 'The mood tracking feature helped me identify patterns I wasn\'t aware of. Combined with the recommended activities, I\'ve seen a significant improvement in my mental health over the past few months.',
      rating: 5,
      program: 'Mental Wellness'
    }
  ];

  // Function to render the star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Success Stories</h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Discover how Harmony Health has helped people from all walks of life achieve balance, improve their well-being, and live healthier, more fulfilled lives.
      </p>
      
      <div className="bg-gray-900 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <p className="text-gray-300 mb-4">Since launching Harmony Health, we've helped thousands of people improve their physical and mental well-being:</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-400">94%</p>
                <p className="text-gray-400">Report reduced stress levels</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-400">87%</p>
                <p className="text-gray-400">Experience better sleep quality</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-400">91%</p>
                <p className="text-gray-400">Report improved mood</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-400">89%</p>
                <p className="text-gray-400">Sustain healthy habits long-term</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gradient-to-r from-purple-800 to-blue-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Featured Success Story</h3>
            <div className="flex items-center mb-4">
              <img 
                src="https://randomuser.me/api/portraits/women/33.jpg" 
                alt="Lisa Johnson" 
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Lisa Johnson</p>
                <p className="text-gray-300">Anxiety & Burnout Recovery</p>
              </div>
            </div>
            <p className="text-gray-100 italic mb-4">
              "After experiencing burnout at work, I was struggling with anxiety and insomnia. The Harmony Health approach was exactly what I needed - it didn't just address my symptoms but helped me create sustainable lifestyle changes. Six months later, I feel like a different person."
            </p>
            <div className="flex">
              {renderStars(5)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}, {testimonial.age}</p>
                  <p className="text-gray-400 text-sm">{testimonial.occupation}</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              
              <div className="flex justify-between items-center">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="bg-purple-900 text-purple-200 text-xs font-medium px-2 py-1 rounded">
                  {testimonial.program}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-300 mb-6">Ready to start your wellness journey?</p>
        <button 
          onClick={handleTransformationClick}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          {user ? 'Continue Your Journey' : 'Begin Your Transformation'}
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;