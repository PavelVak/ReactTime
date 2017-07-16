import React, {Component} from 'react';
import MultiSelect from 'react-widgets/lib/Multiselect';
var timezones = ['Africa/Cairo', 'America/Chicago', 'Europe/Paris', 'Japan', 'Europe/Kiev'];

// {id: 1, key: 'Africa/Cairo', value: 'af'},
// //         {id: 2, key: 'America/Chicago', value: 'en'},
// //         {id: 3, key: 'Europe/Paris', value: 'fr'},
// //         {id: 4, key: 'Japan', value: 'ja'},
// //         {id: 5, key: 'Europe/Kiev', value: 'uk'}

class SelectTime extends Component {
    constructor(props){
      super(props);
      this.state = {timezones: []};
    }

    render(){
        return (
            <div>
                <MultiSelect
                    defaultValue={null}
                    data={timezones}
                    placeholder="Select Time Zone"
                    onChange={this.props.sendData}/>
                <p>{this.state.timezones}</p>
            </div>

        );
    }
}

export default SelectTime;
