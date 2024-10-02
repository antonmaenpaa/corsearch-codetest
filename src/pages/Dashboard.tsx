import React from 'react';
import { useUsers } from '../hooks/useUsers';
import UserCard from '../components/UserCard';
import styles from '../styles/Dashboard.module.scss';
import FilterSort from '../components/FilterSort';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const UsersDashboard: React.FC = () => {
  const { filteredUsers, filterUsers, users, sortUsers, loading } = useUsers();

  return (
    <div className={styles.dashboard}>
      <FilterSort onFilter={filterUsers} onSort={sortUsers} />
      <div className={styles.gridContainer}>
        {loading || users.length === 0 || filteredUsers.length === 0 ? (
          Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} count={1} height={250} style={{ borderRadius: '1.1rem'}} />
          ))
        ) : (
          filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
        )))}

      </div>
    </div>
  );
};

export default UsersDashboard;
