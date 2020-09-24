import React from 'react';
import Field from './components/Field';

import "./Home.css";
const Base = () => {
    return <div className="home__container center">
        <h1>Mortage Calculator</h1>
        <div className="container__home-fields">
                <Field/>
        </div>
    </div>
}

export default Base;