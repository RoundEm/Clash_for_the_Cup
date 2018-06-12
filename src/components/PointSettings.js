import React from 'react';
import AddInput from './AddInput';

class PointSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'Point',
            pointsSet: false
        }
    }
    handleClick = () => {
        console.log('handleClick ran')
    }
    render() {
        return (
            <div className="section-container">
                <h3>Point Settings</h3>
                <p>First create the point types, then you can assign point weights after the types are set.</p> 
                <p>Suggestions for Point Types: Finish 1st In Group Round, Finish 2nd In Group Round, Net Par, Net Birdie, Net Eagle, Net Better-than-Eagle, Rounds Played, Mulligan(-), Hole Not Finished(-), Swearing and Outbursts of Anger(-)</p>
                <AddInput 
                    handleClick={this.handleClick} 
                    section={this.state.section}
                />
            </div>
        );
    }
}

export default PointSettings;