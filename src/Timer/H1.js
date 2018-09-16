import React from 'react'
import styled from 'styled-components'

const StyledH1 =styled.h1`
    font-size: 100px;

`

class H1 extends React.Component{
    render(){
        return(
            <StyledH1>{this.props.children}</StyledH1>
        )
    }
}

export default H1