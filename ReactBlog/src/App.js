import React, { Component } from 'react';
import './App.css';
import './components/Profile/profile.css'
import Navbar from './components/common/navbar'
import observer from './models/observer'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {isLogged: false, username: ''};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem('username');
        if (name) {
            this.setState({isLogged: true, username: name});
        } else {
            this.setState({isLogged: false, username: ''});
        }
    }

    render() {
        return(
            <div>
                <Navbar isLogged={this.state.isLogged}/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
