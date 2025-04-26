import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import { Navbar } from './components/layout/Navbar';

function App() {
  const [users, setUsers] = useState([{}]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const createUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setLoggedInUser(newUser);
  };

  <Route path='/register' element={<RegisterPage createUser={createUser} />} />;

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setLoggedInUser(updatedUser);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    setLoggedInUser(null);
  };

  const loginUser = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setLoggedInUser(user);
      return true;
    } else {
      console.log('Invalid credentials');
      return false;
    }
  };
  <Route path='/login' element={<LoginPage loginUser={loginUser} />} />;

  const logoutUser = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar loggedInUser={loggedInUser} logoutUser={logoutUser} />

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
                <div className='text-center text-2xl font-bold poppins p-6'>
                  Silahkan login terlebih dahulu
                </div>
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
