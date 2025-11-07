import React from "react";

function About() {
  return (
    <main className="main">
      <section className="welcome-section">
        <h2>About This App</h2>
        <p>
          This React application was built to learn and test fundamental React
          concepts.
        </p>
      </section>

      <section className="counter-section">
        <h3>What I'm Learning:</h3>
        <ul style={{ textAlign: "left", lineHeight: "2" }}>
          <li>✅ React Components</li>
          <li>✅ State Management with useState</li>
          <li>✅ Event Handling</li>
          <li>✅ Conditional Rendering</li>
          <li>✅ React Router for Navigation</li>
          <li>✅ Video Player Integration</li>
        </ul>
      </section>

      <section className="input-section">
        <h3>Technologies Used:</h3>
        <ul style={{ textAlign: "left", lineHeight: "2" }}>
          <li>⚛️ React 19</li>
          <li>🛣️ React Router DOM</li>
          <li>🎬 React Player</li>
          <li>🎨 CSS3</li>
        </ul>
      </section>
    </main>
  );
}

export default About;
