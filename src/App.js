import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input
            type="text"
            placeholder="What need to be done?"
            className="new-todo"
          />
        </header>
        <section className="main">
          <input type="checkbox" className="toggle-all" />
        </section>
      </section>
    </div>
  );
}
