import React, { useState } from 'react';
import Header from './components/Header';
import BusSchedule from './components/BusSchedule';
import Footer from './components/Footer';
import AnimatedBus from './components/AnimatedBus';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('user')
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
    setShowForgotPasswordForm(false);
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(true);
    setShowLoginForm(false);
    setShowForgotPasswordForm(false);
  };

  const toggleForgotPasswordForm = () => {
    setShowForgotPasswordForm(true);
    setShowLoginForm(false);
    setShowSignUpForm(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsAuthenticated(true);
      setUser(storedUser);
      setShowLoginForm(false);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    setIsAuthenticated(true);
    setShowSignUpForm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onLoginClick={toggleLoginForm}
        isAuthenticated={isAuthenticated}
        userName={user?.name}
        onLogoutClick={handleLogout}
      />
      <main className="flex-grow p-4">
        <AnimatedBus />
        {!isAuthenticated ? (
          showForgotPasswordForm ? (
            /* Forgot Password Form */
            <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Forgot Password</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="forgot-email" className="block text-sm font-medium mb-1">Email:</label>
                  <input type="email" id="forgot-email" className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Enter your email" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-200">Send</button>
              </form>
              <div className="mt-4 text-center text-sm text-blue-600">
                <button onClick={toggleLoginForm} className="hover:underline">Back to Login</button>
              </div>
            </div>
          ) : showLoginForm ? (
            /* Login Form */
            <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium mb-1">Password:</label>
                  <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Enter your password" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-200">Login</button>
              </form>
              <div className="mt-4 flex justify-between text-sm text-blue-600">
                <button onClick={toggleSignUpForm} className="hover:underline">Create an Account</button>
                <button onClick={toggleForgotPasswordForm} className="hover:underline">Forgot Password?</button>
              </div>
            </div>
          ) : showSignUpForm ? (
            /* Sign Up Form */
            <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Sign Up</h2>
              <form onSubmit={handleSignUp}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name:</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium mb-1">Password:</label>
                  <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Create a password" />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password:</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Confirm your password" />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors duration-200">Sign Up</button>
              </form>
              <div className="mt-4 text-center text-sm text-blue-600">
                <button onClick={toggleLoginForm} className="hover:underline">Already have an account? Login</button>
              </div>
            </div>
          ) : (
            <div className="text-center text-lg">Please log in or sign up to view the bus schedule.</div>
          )
        ) : (
          <BusSchedule />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
