import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store/redux/userReducer'; // Import action
import {
  getUsers,
  updateUser,
  deleteUser,
  createUser,
} from '../services/api/userApi'; // Import API function

const useUserManagement = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch users on mount and dispatch them to the Redux store
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const usersData = await getUsers();
        dispatch(setUsers(usersData)); // Dispatch the users to Redux store
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [dispatch]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSaveUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation for password match
    if (formData.password !== formData.confirmPassword) {
      setError('Kata sandi tidak cocok.');
      setLoading(false);
      return;
    }

    try {
      if (selectedUser) {
        // Update user
        const updatedUser = { ...formData, id: selectedUser.id };
        await updateUser(updatedUser.id, updatedUser);
        setError('');
      } else {
        // Create new user
        const newUser = { ...formData, id: Date.now() }; // Generating ID, replace with actual API logic if needed
        await createUser(newUser);
        setError('');
      }
    } catch (err) {
      console.error('Error saving user:', err);
      setError('Gagal menyimpan pengguna.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteUser(id);
      setError('');
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('Gagal menghapus pengguna.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectUserForEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: '',
      confirmPassword: '',
    });
    setSelectedUser(user);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
    setSelectedUser(null); // Clear selected user for editing
  };

  return {
    formData,
    handleChange,
    handleSaveUser,
    handleDeleteUser,
    handleSelectUserForEdit,
    selectedUser,
    resetForm,
    error,
    loading, // Track loading status
  };
};

export default useUserManagement;
