import React from 'react';

export const UsersTab: React.FC = () => {
  return (
    <div className="admin-tab">
      <h2>Users Management</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Plan</th>
            <th>Campaigns</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>user@example.com</td>
            <td>Pro</td>
            <td>5</td>
            <td>
              <button className="btn btn--sm">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};