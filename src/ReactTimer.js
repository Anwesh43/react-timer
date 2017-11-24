import React,{Component} from 'react'
import Timer from './Timer'
export default class ReactTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {show:true}
        this.onStopTimer = this.onStopTimer.bind(this)
    }
    onStopTimer() {
        this.setState({show:false})
        if(this.props.onStop) {
            this.props.onStop()
        }
    }
    renderTimer() {
        if(this.state.show) {
            return (<Timer ref ="timer_xyz" onStop={this.onStop} onStart={this.props.onStart} seconds = {this.props.seconds} hours={this.props.hours} minutes={this.props.minutes} start={this.props.start} count_down={this.props.count_down}>
                        {this.props.children}
                    </Timer>)
        }
        return ''
    }
    render() {
        return <div>
                  {this.renderTimer()}
               </div>
    }
}
