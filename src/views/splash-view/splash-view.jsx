import React from 'react';

import './splash-view.scss';

const SplashView = () => (
    <div className="splash-view">
        <div className="splash-content">
            <img alt="Bandstand speaker logo" src="/assets/logo-perspective.svg" class="logo-symbol" />
            <em className="marquee">Announcing</em>
            <img alt="Bandstand" src="/assets/logotype-black.svg" class="logotype" />
            <p class="tagline">
                <big>Power to the audience.</big>
            </p>
            <hr />
            <p className="text-center" style={{ maxWidth: '80%' }}><em>Full website and groundbreaking application coming soon.</em></p>
            <strong class="footer-text">
                <small>© 2019 Bandstand Software LLC., All Rights Reserved</small>
                <br/>
                <small>Brought to you by <a href="mailto:mike@bandstand.io">Mike</a> & <a href="mailto:austin@bandstand.io">Austin</a>.</small>
            </strong>
        </div>
    </div>
);

export default SplashView;
