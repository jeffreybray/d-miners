import React from 'react';
import '../dashboard.css'; // Import your CSS styles

const Dashboard = () => {
    return (
        <div className="full-screen-iframe">
            <iframe
                src="http://3.81.116.147:8050/" // Replace with your iframe URL
                allowFullScreen
            />
        </div>
    );
};

export default Dashboard;