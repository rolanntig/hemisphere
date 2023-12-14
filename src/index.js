import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { latitude: null, errorMessage: '' };
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    
    }
    

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>{this.state.errorMessage}</div>
        }
        if (this.state.latitude && !this.state.errorMessage) {
            return <HemisphereDisplay latitude={this.state.latitude} />
        }
        else {
            return <div>Loading...</div>
        
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));