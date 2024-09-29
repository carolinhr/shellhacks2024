import React from 'react';
import './RoundedRectangle.css'; // Import the CSS file for styling

function RoundedRectangle({ title, content }) {
    return (
        <div className="rounded-rectangle">
            <h2 className="rectangle-title">{title}</h2>
            <p className="rectangle-content">{content}</p>
        </div>
    );
}

export default RoundedRectangle;
