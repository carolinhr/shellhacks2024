import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <h1>HerTechPath</h1>
      </header>

      <main className="container">
        <section className="explore">
          <h2>Explore Your Future</h2>
          <p>Discover pathways and opportunities that align with your passions and goals.</p>
          <a href="#quiz" className="button">Take the Quiz</a>
        </section>

        <section className="statistics">
          <h2>Statistics</h2>
          <p>Learn about the various pathways and their success rates.</p>
          <a href="#statistics" className="button">View Statistics</a>
        </section>

        <section className="creators">
          <h2>Meet the Creators</h2>
          <p>Find out more about the team behind this platform.</p>
          <a href="#creators" className="button">Meet the Creators</a>
        </section>
      </main>

      <footer>
        <p>
          For more information, contact us at <a href="mailto:info@example.com">info@example.com</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
