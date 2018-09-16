import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
`

class Button extends React.Component{
    render(){
        return(
            <StyledButton onClick={this.props.onClick}>{this.props.children}</StyledButton>
        )
    }
}

export default Button