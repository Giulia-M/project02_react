import { Component } from 'react';
import './App.css';



class Prova extends Component {
    constructor() {
        super();
        this.state = {
            name: {firstName: 'Giulia', lastName: 'Maggio'},
            company: 'Avanade'
        }
    }
    render() {
      return (
        <div className="App App-header">
            <h1>ciao {this.state.name.firstName} {this.state.name.lastName}, I work on {this.state.company}</h1>
            <button 
                onClick={() => {
                // this.setState({name: {firstName: 'Veronica', lastName: 'Rossi'}})
                    this.setState(
                        ()=> {
                        return {
                            name: {firstName: 'Veronica', lastName: 'Rossi'}
                        };
                        },
                        ()=> {
                            console.log(this.state)
                        }
                    );
            }}>Change Name</button>
            
       
        </div>
      );
    }
}
export default Prova;
