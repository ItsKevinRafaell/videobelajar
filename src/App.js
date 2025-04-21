import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import { Navbar, LoggedOutNavbar } from './components/layout/Navbar';
import Button from './components/ui/Button';

function App() {
  const [users, setUsers] = useState([{}]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const createUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]); // Add the new user to the users array
    setLoggedInUser(newUser);
  };

  // Pass `createUser` to RegisterForm
  <Route path='/register' element={<RegisterPage createUser={createUser} />} />;

  // Function to update user information
  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setLoggedInUser(updatedUser); // Optionally update the logged-in user as well
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    setLoggedInUser(null); // Log out the user after deletion (or handle this differently if needed)
  };

  // In App.js

  const loginUser = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setLoggedInUser(user); // Set the logged-in user
      return true; // Return true to indicate successful login
    } else {
      console.log('Invalid credentials');
      return false; // Return false to indicate failed login
    }
  };
  // Pass `loginUser` to LoginForm
  <Route path='/login' element={<LoginPage loginUser={loginUser} />} />;

  const logoutUser = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div>
        {loggedInUser ? (
          <Navbar loggedInUser={loggedInUser} logoutUser={logoutUser} />
        ) : (
          <LoggedOutNavbar />
        )}

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage loginUser={loginUser} />} />
          <Route
            path='/register'
            element={<RegisterPage createUser={createUser} />}
          />
          <Route
            path='/profile'
            element={
              loggedInUser ? (
                <ProfilePage
                  user={loggedInUser}
                  updateUser={updateUser}
                  deleteUser={deleteUser}
                />
              ) : (
                <div>Please login to view your profile</div>
              )
            }
          />
          <Route path='/category' element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
