import { Component } from "react";
import './App.css';

class Users extends Component {
    constructor() {
        super();

        this.state = {
            usersBand: [],
            searchField: ''
        };
     
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((musicBand) => this.setState(
                ()=> {
                    return { usersBand: musicBand}
                }
            ))
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField};
        });
    }

    render() { 
        const {usersBand, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredBand = usersBand.filter((x) => {
            return x.name.toLocaleLowerCase().includes(searchField)})

        return (
            <div className="App App-header">
                <div>
                    <input className="search" type="search" placeholder="search" onChange={onSearchChange} />
                </div>
               
                {filteredBand.map((user) => {
                    return <div key={user.id}>
                            <h1>{user.name}</h1>
                    </div>
                })}
            </div>
        )
    }
}
export default Users;