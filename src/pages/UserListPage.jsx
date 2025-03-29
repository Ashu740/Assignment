import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUserById, updateUser } from "../store/slices/userSlice";
import EditUserModal from "../components/EditUserModal";

const UserList = () => {
  const dispatch = useDispatch();
  const { data: users, page, totalPages, loading, error } = useSelector((state) => state.users);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handleDelete = (id) => {
    dispatch(deleteUserById(id));
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleUserUpdated = (updatedUser) => {
    dispatch(updateUser(updatedUser)); // Dispatch action to update user in Redux state
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="user-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <button onClick={() => handleEditClick(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => dispatch({ type: "users/setPage", payload: page - 1 })}
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => dispatch({ type: "users/setPage", payload: page + 1 })}
        >
          Next
        </button>
      </div>
      {isEditModalOpen && (
        <EditUserModal
          user={selectedUser}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUserUpdated={handleUserUpdated} // Pass the handler to update user
        />
      )}
    </div>
  );
};

export default UserList;
