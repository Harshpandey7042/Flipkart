import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LoginModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleSignUpClick = () => {
    // Implement your sign-up logic here
    console.log("Redirecting to sign up page...");
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here based on the provider (Google, Facebook, LinkedIn)
    console.log(`Logging in with ${provider}...`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-600 p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-700 text-4xl"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
            placeholder='Enter your Email'
              type="email"
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
            placeholder='Enter your password'
              type="password"
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white p-2 rounded hover:bg-blue-900 transition-all mb-4"
          >
            Login
          </button>
          <p className="text-center mb-4">Or login with</p>
          <div className="flex justify-center mb-4 space-x-4">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faGoogle} />
              <span>Google</span>
            </button>
            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>Facebook</span>
            </button>
            <button
              onClick={() => handleSocialLogin('LinkedIn')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </button>
          </div>
          <p className="text-center">
            Don't have an account?{' '}
            <button
              onClick={handleSignUpClick}
              className="text-white-600 hover:underline"
            >
              Sign up here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
