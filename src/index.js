import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SelectTime from './components/setTimeZone/selectTime';
import Clocks from './components/clocks/clocks';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {timezonesState: [], date: new Date()};
        this.updateTime();
    }

    getData(data) {
        this.setState({timezonesState: data});
    }

    updateTime() {
        setInterval(()=>{
            this.setState({date: new Date(+this.state.date + 1000)});
        },1000);
    }

    render(){
        return (
            <div>
                <SelectTime sendData={this.getData.bind(this)}/>
                <div className="clocks-holder">
                    <Clocks zones={this.state.timezonesState} date={this.state.date}/>
                </div>

            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));