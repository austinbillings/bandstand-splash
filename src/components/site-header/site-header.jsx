import React from 'react';

import './site-header.scss';

const SiteHeader = () => (
    <header className="site-header">
        <div className="grid">
            <div className="row">
                <img src="/assets/header-logo.png" className="header-logo" />
            </div>
        </div>
    </header>
);

export default SiteHeader;
