import React, {Component} from 'react'
import Button from '@material-ui/core/Button';


class CalButton extends Component{
    
    handleClick = () => {
        this.props.clickHandler(this.props.name)
    }
    render(){
        return(
            <Button className={this.props.clName} variant="contained" 
            name={this.props.name}
            onClick={this.handleClick}
            >{this.props.string}</Button>
        )
    }

    
}


export default CalButton