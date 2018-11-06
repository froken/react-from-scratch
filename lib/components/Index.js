import * as React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component { 
    constructor() {
        super();

        this.state = {
            answer: 42
        };

        this.asyncfunc = this.asyncfunc.bind(this);
    }

    asyncfunc() {
        return Promise.resolve(5);
    }

    async componentDidMount() {
        this.setState({
            answer: await this.asyncfunc()
        });
    }
    
    render() {
        return (
            <h2>Hello from React from {this.state.answer}!</h2>
        );
    }
}

ReactDom.render(
    <App />, 
    document.getElementById('root')
);

