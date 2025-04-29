import { useState, useEffect } from 'react';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../services/api/userApi';

export const useUser = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const loginUser = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setLoggedInUser(user);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    } else {
      console.log('Login gagal');
      return false;
    }
  };

  const logoutUser = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };

  const createNewUser = async (newUser) => {
    try {
      const createdUser = await createUser(newUser);
      setUsers((prevUsers) => [...prevUsers, createdUser]);
      setLoggedInUser(createdUser);
      localStorage.setItem('loggedInUser', JSON.stringify(createdUser));
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUserData = async (updatedUser) => {
    try {
      const updatedUsers = await updateUser(updatedUser.id, updatedUser);
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUsers : user))
      );
      setLoggedInUser(updatedUsers);
      localStorage.setItem('loggedInUser', JSON.stringify(updatedUsers));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUserData = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
      setLoggedInUser(null);
      localStorage.removeItem('loggedInUser');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return {
    users,
    loggedInUser,
    loginUser,
    logoutUser,
    createNewUser,
    updateUserData,
    deleteUserData,
  };
};
