import React from 'react';


class Cell extends React.Component {
    constructor(props) {
        super()

        this.state = {
            color: props.value 
        }
    }

    colorClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        
        return <div className="cell" style={{backgroundColor: this.state.color}}
        onClick={this.colorClick}></div>

    }





}

export default Cell;