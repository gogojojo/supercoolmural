import React from 'react';

// Create class called HelloText that extends the base React Component class
class HelloText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>Hello, {this.props.name}!</p>
    }
}

export default HelloText