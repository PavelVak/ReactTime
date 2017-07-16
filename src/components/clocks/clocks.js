import React, {Component} from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone/builds/moment-timezone-with-data';
import Clock from './clock';

class Clocks extends Component {
    constructor(props){
        super(props);

    }

    render(){
        let clocks = this.props.zones.map((item, index) => {
            let date = new Date();
            // console.log(moment(date).tz(item).format('LLLL'));

            return (
                <div key={index} className="clock">
                    <h3>{item}</h3>
                    <Clock size={250} timeFormat="24hour" hourFormat="standard" date={moment(date).tz(item)}/>
                    <div><Moment tz={item} format="YYYY/MM/DD">{date}</Moment></div>
                    <div><Moment tz={item} format="HH:mm:ss">{date}</Moment></div>
                </div>
            );
        });
        return (
           <div>{clocks}</div>
        );
    }
}

export default Clocks;
