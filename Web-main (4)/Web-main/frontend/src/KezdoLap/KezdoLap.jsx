import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/KezdoLap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const KezdoLap = () => {
    const navigate = useNavigate();

    return (
        <div className="kezdo-lap container">
            {/* Navigációs sáv */}
            <header className="topnav d-flex justify-content-between align-items-center p-3 shadow-sm">
                <h1 className="text-primary">Dungeon Explorer</h1>
                <div>
                    <button className="btn btn-outline-primary me-2" onClick={() => navigate('/Register')}>Register</button>
                    <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
                </div>
            </header>
            
            {/* Információs szekció */}
            <section className="Informational text-center my-5">
                <h3 className="mb-4">Welcome to Dungeon Explorer!</h3>
                <p className="lead mx-auto w-75">
                    This is our very first game project, created by a small, passionate three-member team. While it may not have the best graphics yet,
                    our goal is to create a fun and engaging experience. We appreciate your support and feedback as we continue improving!
                </p>
            </section>
            
            {/* Segítség és közösség szekciók */}
            <section className="row align-items-center mb-5">
                <div className="col-md-6">
                    <h2>Helpful Guides</h2>
                    <ul className="list-unstyled">
                        <li>✅ Easy-to-understand explanations about game mechanics.</li>
                        <li>✅ Helpful tips and tricks.</li>
                        <li>✅ A whole gallery full of information.</li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img src="/oldbook.png" alt="Helpful Guides" className="img-fluid rounded shadow" />
                </div>
            </section>
            
            <section className="row align-items-center flex-row-reverse">
                <div className="col-md-6">
                    <h2>A Friendly Community</h2>
                    <ul className="list-unstyled">
                        <li>💬 A place to chat about the game.</li>
                        <li>🆘 Ask for help from fellow players.</li>
                        <li>🛡️ Moderated to keep a safe and friendly environment.</li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img src="/electonicbook.png" alt="Friendly Community" className="img-fluid rounded shadow" />
                </div>
            </section>
        </div>
    );
};

export default KezdoLap;