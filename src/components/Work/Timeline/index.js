import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'September 2023- Ongoing',
      title: 'THE CSHub member | York University',
      description: [
  'Participated in tech-focused events and workshops to expand knowledge in <b>programming</b>, <b>software development</b>, and <b>emerging technologies</b>',
  'Collaborated with fellow members on <b>coding projects</b> and <b>networking activities</b>, fostering a supportive and engaging <b>tech community</b>',
],

      expanded: false,
    },
    {
      date: ' September 2023-April 2025 ',
      title: 'ACM Programming Contest | York University      ',
      description: [
  'Competed in <b>York University’s</b> internal programming contests to qualify for the regional <b>ACM Programming Contest</b> team',
  'Solved <b>algorithmic</b> and <b>data structure</b> problems under timed conditions, demonstrating strong <b>problem-solving</b> and <b>coding skills</b>',
],
      expanded: false,
    },
    {
      date: 'SEPTEMBER 2022-Ongoing',
      title: 'TREASURER & MEDIA COORDINATOR| Somali Student Association (SSA)   ',
      description: [
  'Boosted online engagement and membership by <b>50%</b>',
  'Established connections between SSA members and professionals/alumni, fostering mentorship and career guidance',
],

      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
