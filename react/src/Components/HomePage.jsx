import React from 'react';
import './HomePage.css';
import PhotoSquares from './PhotoSquares';

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <h1>Explore Your Future</h1>
      </header>

      <main className="container">
        <section className="explore">
          <h2>Explore Your Future</h2>
          <p>Tech is for everyone. Take a personality 
          quiz to discover the best pathway for you</p>
          <a href="#quiz" className="button">Take the Quiz</a>
        </section>

        <section style={{backgroundColor:'#081E3F', color:'white' }}className="statistics">

          <h2>The Opportunities are endless</h2>
          <p>Learn about the various pathways and their success rates.</p>
          <a href="#statistics" className="button">View Statistics</a>
          <ul style = {{color: 'white'}}className="horizontal-list">
                    <li><a href="/">25%</a></li>
                    <li><a href="/pathways">Women in Tech Organizations</a></li>
                    <li><a href="/conect">Women in Computing Majors</a></li>
                </ul>
          <ul style = {{color: 'white'}}className="horizontal-list">
                    <li><a href="/">Women currently working in tech</a></li>
                    <li><a href="/pathways">Women in Tech Organizations</a></li>
                    <li><a href="/conect">Women in Computing Majors</a></li>
                </ul>
        </section>

        <section className="creators">
          <h2>Meet Alumni</h2>
          <p>You can do it too.</p>
          <div className="photo-container">
       <PhotoSquares />
       <PhotoSquares />
       <PhotoSquares />
       </div>
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
