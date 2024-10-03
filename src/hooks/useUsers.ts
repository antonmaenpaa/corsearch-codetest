import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/users';
import { UserProps } from '../types/user';

export const useUsers = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setFilteredUsers(data);
      setLoading(false);
    };
    getUsers();
  }, []);

  const filterUsers = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(lowercasedQuery) ||
      user.email.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredUsers(filtered);
  };

  const sortUsers = (key: keyof UserProps, ascending: boolean) => {
    const sorted = [...filteredUsers].sort((a, b) =>
      ascending ? a[key].toString().localeCompare(b[key].toString()) : b[key].toString().localeCompare(a[key].toString())
    );
    setFilteredUsers(sorted);
  };

  return { users, filteredUsers, filterUsers, sortUsers, loading };
};
