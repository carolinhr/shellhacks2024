import React from 'react';
import './QuizResult.css';

function QuizResult() {
    return (
        <div className="QuizResult">
            <div className="text-container">
                <h2 className="rectangle-header">Your Quiz Results:</h2>
                <p className="rectangle-text">This is your paragraph text that will be left-aligned within the rectangle.</p>
                <button>Learn More</button>
            </div>
            <img src="src/assets/WOEMN GLOBE.png" alt="Women on Computer" className="image" />
        </div>
    );
}

export default QuizResult;
