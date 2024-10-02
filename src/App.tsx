import React from 'react';
import Dashboard from './pages/Dashboard';
import styles from '../src/styles/Header.module.scss';

function App() {
  return (
    <div className="App" style={{ background: '#fffafa'}}>
      <header className={styles.header}>
        <nav>
          <h1>Users Dashboard</h1>
        </nav>
      </header>
      <main style={{ paddingBottom: "5rem" }}>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
