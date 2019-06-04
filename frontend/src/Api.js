import React , {Component } from 'react';
import { objectExpression } from '@babel/types';


class Api extends Component{
    state = { data:[] , show:false }

    handleClick = () => {
        this.setState({show:true});

        fetch('http://0.0.0.0:8000/app')
        .then(res=> res.json())
        .then(data=>{ this.setState({data:data}); console.log(this.state);  });
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Get Data</button>
                {/* this.state.data.map(obj => {
                        <div>
                            {obje}
                        </div>
                    
                }) */}
            </div>
        )
    }

}

export default Api;
