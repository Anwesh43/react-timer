import React,{Component} from 'react'
import TimerUtil from './TimerUtil'
export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.start_time = this.props.start || 0
        this.state = {time:this.start_time,time_limit:TimerUtil.createTimeInSeconds(this.props)}
    }
    componentDidMount() {
        const time_limit = this.state.time_limit
        const prev_time = TimerUtil.getCurrTimeFromDate()
        if(this.props.onStart) {
            this.props.onStart()
        }
        this.interval = setInterval(()=>{
            var time = Math.max(this.state.time + 1,TimerUtil.getCurrTimeFromDate() - prev_time)
            if(time >= time_limit) {
                time = time_limit
                if(this.props.onStop) {
                    this.props.onStop()
                }
                clearInterval(this.interval)
            }
            this.setState({time})
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        if(this.props.onInterrupt) {
            this.props.onInterrupt()
        }
    }
    getCountTime() {
        console.log(this.state.time)
        const time = (this.props.count_down)?(this.state.time_limit - this.state.time):this.state.time
        return time
    }
    renderChildren(){
        const counttime_obj = {count_time:this.getCountTime()}
        return React.Children.map(this.props.children,(child)=>React.cloneElement(child,counttime_obj))
    }
    render() {
        console.log(this.renderChildren())
        return <div>
            {this.renderChildren()}
        </div>
    }
}
