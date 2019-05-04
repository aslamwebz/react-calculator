import React, {Component} from 'react'

function Calculate(numOne, numTwo, operation){
        const one = parseFloat(numOne)
        const two = parseFloat(numTwo)
        // console.log(one + " " + two)
        if(operation === '+'){
            return  one + two
        }

        if(operation === '-'){
            return  one - two
        }

        if(operation === '/'){
            return  one / two
        }

        if(operation === '*'){
            return  one * two
        }
    }


export default Calculate