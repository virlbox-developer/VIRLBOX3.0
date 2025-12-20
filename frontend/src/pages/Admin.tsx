import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Index.css';
import './Admin.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'User' });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers([
        ...users,
        {
          id: users.length + 1,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          status: 'Active',
        },
      ]);
      setNewUser({ name: '', email: '', role: 'User' });
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <h1 className="admin-title">Admin Panel</h1>
        <button onClick={() => navigate('/dashboard')} className="admin-back-btn">
          ← Back to Dashboard
        </button>
      </div>

      {/* Add User Form */}
      <div className="admin-form-card">
        <h2>Add New User</h2>
        <form onSubmit={handleAddUser} className="admin-form">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="admin-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="admin-input"
          />
          <label htmlFor="role-select" className="admin-label">
            Role
          </label>
          <select
            id="role-select"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="admin-input"
          >
            <option>User</option>
            <option>Admin</option>
          </select>
          <button type="submit" className="admin-submit-btn">
            Add User
          </button>
        </form>
      </div>

      {/* Users Table */}
      <div className="admin-table-card">
        <h2>User Management</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="admin-delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;