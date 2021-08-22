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
          <input type="checkbox" id="toggle-all" className="toggle-all" />
          <label htmlFor="toggle-all" />
          <ul className="todo-list" />
        </section>
      </section>
    </div>
  );
}
