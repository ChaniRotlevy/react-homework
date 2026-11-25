import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { getAllUsersAxios } from '../services/userApi.services';
import UserCard from '../components/UserCard';
import AddUserForm from '../components/AddUserForm';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';

  useEffect(() => {
    getAllUsersAxios()
      .then((data) => setUsers(data.users))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAddUser = (newUser) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {});
  };

  const filteredUsers = users.filter((u) =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>משתמשים</h2>

      <AddUserForm onAddUser={handleAddUser} />

      <TextField
        label="חיפוש לפי שם"
        size="small"
        value={search}
        onChange={handleSearch}
        sx={{ mb: 3, bgcolor: 'background.paper' }}
      />

      {loading && <CircularProgress />}
      {error && <p>שגיאה בטעינה: {error}</p>}

      {!loading && !error && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {filteredUsers.map((user) => (
            <UserCard key={user.id} data={user} />
          ))}
        </Box>
      )}
    </div>
  );
}

export default Users;