import './PhotoSquares.css'; // Import your CSS file

function PhotoSquares() {
  return (
    <div className="vertical-rectangle">
      <img 
        src="https://via.placeholder.com/200x300" /* Replace with your image URL */
        alt="Rounded Rectangle" 
        className="rectangle-image"
      />
    </div>
  );
}

export default PhotoSquares;