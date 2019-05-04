import React, { Component } from 'react'
import CalButton from './CalButton'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Calculate from './Calculate'

class Calculator extends Component{
    constructor(){
        super()
        this.state={
            operation:'',
            prev:'',
            total:'',
            display:'',
        }

        this.clickHandler = this.clickHandler.bind(this)
        this.handleOperations = this.handleOperations.bind(this)
        this.equals = this.equals.bind(this)
        this.clear = this.clear.bind(this)
    }

    clickHandler(value){
        this.setState((prevState) => {
            return {
                total: prevState.total + value,
                display:prevState.display + value,
            }
        })
    }

    handleOperations(event){
        this.setState((prevState) => {
            return {
                display:prevState.display + ' ' + event + ' ',
            }
        })
        if(event === '+'){
            this.calcStart('+');
        }

        if(event === '-'){
            this.calcStart('-');
        }

        if(event === '/'){
            this.calcStart('/');
        }

        if(event === '*'){
            this.calcStart('*');
        }
    }

    calcStart(operator){
        if(this.state.operation === ''){
            this.setState({
                operation:operator,
                prev:Number(this.state.total),
                total:''
            })
        } else {
            if(this.state.total !== ''){
                const t = Calculate(this.state.prev, this.state.total, this.state.operation);
                console.log(t)
                this.setState({
                    prev:t
                })
            }
            this.setState({
                total:'',
                operation:operator,
            })
        }

    }

    equals(value){
        if(this.state.total !== '' && this.state.operation !== ''){
            const t = Calculate(this.state.prev, this.state.total, this.state.operation)
            console.log(t)
            this.setState({
                total:t,
                display:t,
                prev:t,
                operation:'',
            })
        }
    }

    clear(event){
        if(event === 'clear'){
            this.setState({
                display:'',
                prev:'',
                total:'',
                operation:'',
            })
        }
    }

    render(){
        return(
            <Grid container alignItems="center" justify="center" id="calc">
                <Grid>
                    <Card>
                        <CardContent >
                            <TextField className="card-title"   id="outlined-read-only-input"
                                    label={this.state.display}
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="outlined"
                                />
                            <Grid item xs={12}>
                                <CalButton name="1" string="1" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="2" string="2" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="3" string="3" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="+" string="+" clickHandler={this.handleOperations} clName="btn-dark"/>
                            </Grid>
                            <Grid item xs={12}>
                                <CalButton name="4" string="4" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="5" string="5" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="6" string="6" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="-" string="-" clickHandler={this.handleOperations} clName="btn-dark"/>
                            </Grid>
                            <Grid item xs={12}>
                                <CalButton name="7" string="7" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="8" string="8" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="9" string="9" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="/" string="/" clickHandler={this.handleOperations} clName="btn-dark"/>
                            </Grid>
                            <Grid item xs={12}>
                                <CalButton  name="0" string="0" clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="." string="." clickHandler={this.clickHandler} clName="btn"/>
                                <CalButton name="clear" string="AC" clickHandler={this.clear} clName="btn-dark"/>
                                <CalButton name="*" string="*" clickHandler={this.handleOperations} clName="btn-dark"/>
                            </Grid>
                            <Grid item xs={12}>
                                <CalButton name="equals" string="=" clickHandler={this.equals} clName="btn-eq"/>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default Calculator