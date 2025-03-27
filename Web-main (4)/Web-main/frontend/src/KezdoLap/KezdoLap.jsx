import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/KezdoLap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const KezdoLap = () => {
    const navigate = useNavigate();

    return (
        <div className="kezdo-lap container-fluid p-0">
            {/* Navigation Bar */}
            <header className="topnav d-flex justify-content-between align-items-center p-3">
                <h1>Dungeon Valley Explorer</h1>
                <div className="button-container">
                    <button className="btn" onClick={() => navigate('/Register')}>
                        Register
                    </button>
                    <button className="btn" onClick={() => navigate('/login')}>
                        Login
                    </button>
                </div>
            </header>

            {/* Hero/Informational Section */}
            <section className="Informational text-center">
                <h3>Welcome to Dungeon Explorer!</h3>
                <p className="lead mx-auto Welcome">
                    This is our very first game project, created by a small, passionate three-member team. While it may not have the best graphics yet,
                    our goal is to create a fun and engaging experience. We appreciate your support and feedback as we continue improving!
                </p>
            </section>

            {/* Combined Guides and Community Section in a Single Frame */}
            <section className="combined-section container">
                {/* Helpful Guides */}
                <div className="row align-items-center mb-4 guide-section">
                    <div className="col-md-6 info-block">
                        <h2>Helpful Guides</h2>
                        <ul>
                            <li><span className="icon">✅</span> Easy-to-understand explanations about game mechanics.</li>
                            <li><span className="icon">✅</span> Helpful tips and tricks.</li>
                            <li><span className="icon">✅</span> A whole gallery full of information.</li> {/* Fixed syntax error here */}
                        </ul>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="/oldbook.png" alt="Helpful Guides" className="img-fluid kep" />
                    </div>
                </div>

                {/* Friendly Community */}
                <div className="row align-items-center flex-row-reverse community-section">
                    <div className="col-md-6 info-block">
                        <h2>A Friendly Community</h2>
                        <ul>
                            <li><span className="icon">💬</span> A place to chat about the game.</li>
                            <li><span className="icon">🆘</span> Ask for help from fellow players.</li>
                            <li><span className="icon">🛡️</span> Moderated to keep a safe and friendly environment.</li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="/electonicbook.png" alt="Friendly Community" className="img-fluid kep" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KezdoLap;