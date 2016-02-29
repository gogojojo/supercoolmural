// Import React and HelloText class
import React from 'react';
import HelloText from './HelloText.jsx';

// Create class called HelloBox that extends the base React Component class
class HelloBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <HelloText name="Daniel" />
        </div>
    }
}

export default HelloBox