import { useEffect, useState } from 'react';
import { FilterSortProps } from './FilterSort.types';
import styles from '../../styles/FilterSort.module.scss';
import SearchIcon from '../../assets/icons/SearchIcon';
import ChevronIcon from '../../assets/icons/ChevronIcon';
import { UserProps } from '../../types/user';

const FilterSort = ({ onFilter, onSort }: FilterSortProps) => {
  const [query, setQuery] = useState('');
  const [sortState, setSortState] = useState<{ key: keyof UserProps; ascending: boolean }>({
    key: 'name',
    ascending: true,
  });

  const handleSort = (key: keyof UserProps) => {
    setSortState((prevState) => ({
      key,
      ascending: prevState.key === key ? !prevState.ascending : true,
    }));
  };

  return (
    <div className={styles.filterSortContainer}>
      <div className={styles.filter}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onFilter(e.target.value);
          }}
          placeholder="Filter by name or email"
        />
        <SearchIcon className={styles.searchIcon} />
      </div>
      <div className={styles.sortButtons}>
        <button onClick={() => handleSort('name')}>
          <span>Sort by Name</span>
          <ChevronIcon
            className={
              sortState.key === 'name'
                ? sortState.ascending
                  ? styles.rotateUp
                  : styles.rotateDown
                : ''
            }
          />
        </button>
        <button onClick={() => handleSort('email')}>
          <span>Sort by Email</span>
          <ChevronIcon
            className={
              sortState.key === 'email'
                ? sortState.ascending
                  ? styles.rotateUp
                  : styles.rotateDown
                : ''
            }
          />
        </button>
      </div>
    </div>
  );
};

export default FilterSort;
