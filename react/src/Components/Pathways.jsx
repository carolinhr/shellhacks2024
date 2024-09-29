import React from 'react';
import './Pathways.css'; // Import a CSS file for styling
import RoundedRectangle from './RoundedRectangle';
import PhotoSquares from './PhotoSquares'; // Ensure to import PhotoSquares

function Pathways() {
    return (
        <div className="Pathways">
            <h2 className="pathways-header">What is Computer Science?</h2>
            <p className="pathways-description">
                Computer Science is the study of computers and computational systems, encompassing both hardware and software. 
                It involves understanding algorithms, programming languages, data structures, and the theoretical foundations of computation. 
                Computer scientists design, develop, and analyze software applications, systems, and networks to solve complex problems and improve technology. 
            </p>

            <h2 className="Roles-header">Potential Roles</h2>
            <div className="RolesRow1"> 
                <RoundedRectangle title="Role 1" content="Description Here"/>
                <RoundedRectangle title="Role 2" content="Description Here"/>
                <RoundedRectangle title="Role 3" content="Description Here"/>
            </div>
       
            <div className="RolesRow2"> 
                <RoundedRectangle title="Role 4" content="Description Here"/>
                <RoundedRectangle title="Role 5" content="Description Here"/>
                <RoundedRectangle title="Role 6" content="Description Here"/>
            </div>
        
            <div className="Clubs">
                <h2 className="Club-Header">Get Involved at FIU:</h2>
                <p className="Involvement-FIU">
                    At FIU, students can enhance their education by getting involved in tech clubs that offer hands-on workshops and collaborative projects. 
                    These opportunities foster community, develop practical skills, and prepare students for successful careers in technology.
                </p>
            </div>

            <div className="Club-Photos">
                <PhotoSquares />
                <PhotoSquares />
                <PhotoSquares />
            </div>

            <div className="Club-Photos2">
                <PhotoSquares />
                <PhotoSquares />
                <PhotoSquares />
            </div>
        
        <button>Explore More</button>
        <img src="path/to/your/image.png" alt="Description of image" className="image-class" />

        </div>
    );
}

export default Pathways;
