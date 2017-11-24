import {ReactTimer} from './index'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class ShowTimeComponent extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return <div>{this.props.count_time}</div>
    }
}
class Demo extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return <ReactTimer count_down={true} hours={2}>
                  <ShowTimeComponent/>
              </ReactTimer>
    }
}
ReactDOM.render(<Demo/>,document.getElementById('app'))
