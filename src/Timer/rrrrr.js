import React from 'react'
import styled from 'styled-components'
import H1 from './H1.js'
import Button from './Button.js'

class Timer extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        time:0,
        start: 0,
        isOn: false
      }
    }

    startTimer = () =>{
      //run once when u click
      this.setState({
        time:this.state.time,
        start:Date.now() - this.state.time, //0
        isOn: true
      })

      //run over and over again every 0.001 seconds
      this.timer = setInterval(
        () => this.setState({
          time: Date.now() - this.state.start //this.state.time = xxx 1, 2,3,4,5,
        }),1)

      console.log('start')
    }

    stopTimer = () =>{
      this.setState({isOn:false})
      clearInterval(this.timer)
      console.log('stop')
    } 

    resetTimer = () =>{
      this.setState({time:0})
      console.log('reset')
    } 

  render(){
    let start = (this.state.time === 0) ?
    <Button onClick={this.startTimer}>Start</Button>:
    null

    let stop = (this.state.isOn)?
    <Button onClick={this.stopTimer}>Stop</Button>:
    null

    let reset = (this.state.time != 0 && ! this.state.isOn)?
    <Button onClick={this.resetTimer}>Reset</Button>:
    null

    let resume = (this.state.time != 0 && ! this.state.isOn)?
    <Button onClick={this.startTimer}>Resume</Button>:
    null


    return(
      <div>
        <H1>Timer:{this.state.time/1000}</H1>
        {start}
        {stop}
        {reset}
        {resume}
      </div>
    )
  }

}
export default Timer
