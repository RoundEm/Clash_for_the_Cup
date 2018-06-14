import React from 'react';
import AddInput from './AddInput';
// import PointsSettingsTable from './PointsSettingsTable';
import PointsDefinition from './PointsDefinition';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class PointSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            // object, each w/label & weight
            pointsDefinitions: []
        }
    }
    // handleClick = childDataAdded => {
    //     const leagueId = window.location.pathname.split('/')[2];
    //     // Checks that point types were added
    //     if (childDataAdded.length === 0) {
    //         alert('Please add at least one point type to continue')
    //     } else {
    //         // POST Points
    //         axios.post(`${API_BASE_URL}/leagues/${leagueId}/points`, childDataAdded)
    //             .then(res => {
    //                 const pointTypes = res.data;
    //                 console.log('POST points: ', pointTypes)
    //                 this.setState({
    //                     pointTypes
    //                 })
    //                 this.renderData();
    //             })   
    //             .catch(err => {
    //                 console.log(err)
    //             });
    //     }
    // }

    onUpdate = (type, weight) => {
        console.log('type: ', type)
        console.log('weight: ', weight)
        const updatedDefition = {
            type,
            weight
        }
        this.setState({
            pointsDefinitions: [...this.state.pointsDefinitions, updatedDefition]
        })
    }
    addDefinition = () => {
        const newDefinition = {
            type: this.state.input,
            weight: 0
        }
        this.setState({
            pointsDefinitions: [...this.state.pointsDefinitions, newDefinition],
            input: ''
        });
    }
    renderDefinitions = () => {
        return this.state.pointsDefinitions.map((def, i) => (
            <PointsDefinition 
                type={def.type} 
                weight={def.weight}
                key={def + i}
                onUpdate={this.onUpdate}
            />
        ));
    }
    componentDidUpdate() {
        console.log('this.state.pointsDefinitions: ',this.state.pointsDefinitions)
    }
    render() {
        return (
            <div className="section-container">
                <h3>Point Settings</h3>
                <p>First create the point types, then you can assign point weights after the types are set.</p> 
                <p>Suggestions for Point Types: Finish 1st In Group Round, Finish 2nd In Group Round, Net Par, Net Birdie, Net Eagle, Net Better-than-Eagle, Rounds Played, Mulligan(-), Hole Not Finished(-), Swearing and Outbursts of Anger(-)</p>
                {/* <AddInput 
                    handleClick={this.handleClick} 
                    section={this.state.section}
                /> */}

                <input 
                    type="text" 
                    value={this.state.input} 
                    onChange={e => this.setState({
                        input: e.target.value
                    })} 
                />
                <button onClick={this.addDefinition}>Add Points</button>
                {this.renderDefinitions()}
            </div>
        );
    }
}

export default PointSettings;