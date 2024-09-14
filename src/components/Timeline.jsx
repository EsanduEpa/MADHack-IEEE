import React from 'react';
import './css/Timeline.css';

function Timeline() {
  return (
    <section className="timeline" id='timeline'>
      <h2>Event Timeline</h2>
      <ul>
        <li>
          <strong>1st Sept 2024</strong>
          <p>Awareness Session</p>
        </li>
        <li>
          <strong>15th Sept 2024</strong>
          <p>Mobile App Designing Session</p>
        </li>
        <li>
          <strong>25th Sept 2024</strong>
          <p>Workshop Flutter Settings Basics</p>
        </li>
        <li>
          <strong>26th Sept 2024</strong>
          <p>Initial Round</p>
        </li>
        <li>
          <strong>27th Sept 2024</strong>
          <p>Announcement of Finalist</p>
        </li>
        <li>
          <strong>28th Sept 2024</strong>
          <p>Final Hackathon</p>
        </li>
        <li>
          <strong>30th Sept 2024</strong>
          <p>Awards Ceremony</p>
        </li>
      </ul>
    </section>
  );
}

export default Timeline;
