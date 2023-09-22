import React from 'react';
import '../dashboard.css'; // Import your CSS styles

const Dashboard = () => {
    return (
        <div className="full-screen-iframe">
            <iframe
                src="http://3.145.73.185:8050/" // Replace with your iframe URL
                allowFullScreen
            />
        </div>
    );
};

export default Dashboard;