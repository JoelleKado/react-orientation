import React, {Component} from 'react';

class Header extends Component {
//every component must render something
//states in react are always objects
//so we can store multiple values in the same property
state = {
    name: 'Joelle',
    city: 'St. Paul'

}
//event handlers need arrow functions to work
logState = (event) => {
    console.log(this.state);
}

handleCityChange = (event) => {
    console.log('someone typed', event.target.value);

    this.setState({
        city: event.target.value
    })
}

handleNameChange = (event) => {
    console.log('someone typed', event.target.value);

    this.setState({
        name: event.target.value,
        })
}

    render() {
        return(
            <>
            <h1>Hello from header</h1>
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange}/>
                <input type="text" placeholder="City" onChange={this.handleCityChange}/>
                <button onClick={this.logState}>LOG STATE</button>
                <p>Hello! My name is {this.state.name}. I am from {this.state.city}</p>
            </div>
            </>
        )
    }
}

export default Header;