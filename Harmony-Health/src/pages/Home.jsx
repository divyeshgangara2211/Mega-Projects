import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  const features = [
    { title: 'Personalized wellness plans', description: 'Customized plans tailored to your specific health needs and goals' },
    { title: 'Personalized meal plans', description: 'Nutrition guidance designed for your unique dietary requirements' },
    { title: 'Online meetings', description: 'Connect with health professionals from the comfort of your home' },
    { title: 'Yoga sessions', description: 'Expert-guided practices for physical and mental well-being' },
    { title: 'Guided meditation', description: 'Mindfulness practices to reduce stress and improve focus' },
    { title: 'Therapy journey', description: 'Supportive mental health resources for your personal growth' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          {user ? (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome Back, {user.username}!</h1>
              <p className="text-xl mb-6">Continue your wellness journey with us.</p>
              <div className="flex space-x-4">
                <Link to="/dashboard" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Go to Dashboard
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Journey to Wellness Starts Here</h1>
              <p className="text-xl mb-6">Discover a holistic approach to health and well-being.</p>
              <div className="flex space-x-4">
                <Link to="/register" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Get Started
                </Link>
                <Link to="/about" className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold">
                  Learn More
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-1 rounded-lg shadow-2xl">
            <div className="bg-black rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">How do you feel today?</h2>
                <p className="text-gray-400 mb-2">- my mood</p>
                <div className="flex flex-wrap gap-2">
                  {['ok', 'good', 'not good', 'sad', 'angry', 'calm'].map((mood) => (
                    <button key={mood} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
                      {mood}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Harmony Health?</h2>
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Holistic Approach</h3>
              <p className="text-gray-300 mb-6">We believe in treating the whole person - integrating mental, physical, and emotional wellness for complete harmony.</p>
              
              <h3 className="text-2xl font-semibold mb-4">Personalized Care</h3>
              <p className="text-gray-300">Every wellness journey is unique. Our AI-driven platform provides customized plans that adapt to your changing needs.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-300 mb-6">Access to professional resources, from nutrition experts to mental health counselors.</p>
              
              <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-300">Join a community of like-minded individuals on their journey to better health and wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {!user && (
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 mb-6">Ready to start your wellness journey?</p>
          <Link 
            to="/register" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Join Harmony Health Today
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;