import { Component } from "react";
import './App.css';

class Band extends Component {
    constructor() {
        super();
        this.state = {
            band: [
                {
                  name: 'maneskin',
                  id: 'h172g'
                },
                {
                    name: 'ultimo',
                    id: 'h47dn'
                },
                {
                    name: 'coldplay',
                    id: 'hs7j4'
                }
            ]
        }
    }

    render() {
        return (
            <div className="App App-header">
                {this.state.band.map((cantante) => {
                    return <div key={cantante.id}>
                                <h1>{cantante.name}</h1>    
                            </div>
                    })
                }
            </div>
        )
    }
}

export default Band;