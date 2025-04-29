import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import { Navbar } from './components/layout/Navbar';
import { useUser } from './hooks/useUser';

function App() {
  const {
    users,
    loggedInUser,
    loginUser,
    logoutUser,
    createNewUser,
    updateUserData,
    deleteUserData,
  } = useUser();

  return (
    <Router>
      <div>
        <Navbar loggedInUser={loggedInUser} logoutUser={logoutUser} />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage loginUser={loginUser} />} />
          <Route
            path='/register'
            element={<RegisterPage createUser={createNewUser} />}
          />
          <Route
            path='/profile'
            element={
              loggedInUser ? (
                <ProfilePage
                  user={loggedInUser}
                  updateUser={updateUserData}
                  deleteUser={deleteUserData}
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
