import React from 'react';
import PointsDefinition from './PointsDefinition';
import { clone } from 'lodash';
const axios = require('axios');
const { API_BASE_URL } = require('../config');

class PointSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            leagueId: '',
            pointsDefinitions: [],
            activeComponent: 0
        }
    }
    updateActiveComponent = num => {
        this.setState({
            activeComponent: num
        });
    }
    handlePointsData = () => {
        const promises = this.state.pointsDefinitions.map(point => {
            const pointWithLeague = {
                league: this.state.leagueId, ...point
            }
            this.addPointDefinitionToLeague(pointWithLeague)
        })
        Promise.all(promises)
            .then(res => {
                // TODO: look into why log is undefined
                console.log('POST points res.data: ', res)
                this.setState({
                    activeComponent: 0
                });
                window.history.back();
            })   
            .catch(err => {
                console.log(err)
            });
    }
    addPointDefinitionToLeague = point => {
        
        // POST Points
        return axios.post(`${API_BASE_URL}/leagues/${this.state.leagueId}/point-weighting`, point)
    }
    onUpdate = (type, weight) => {
        const indexOfPointType = this.state.pointsDefinitions.findIndex(obj => obj.type === type);
        const cachedSetting = clone(this.state.pointsDefinitions[indexOfPointType]);
        console.log('cachedSetting: ', cachedSetting)
        const newPointsDefinition = 
            Object.assign({...this.state.pointsDefinitions[indexOfPointType]}, 
                { type: type, weight: weight || cachedSetting.weight})
        this.setState({
            pointsDefinitions: [...this.state.pointsDefinitions.slice(0, indexOfPointType), newPointsDefinition, ...this.state.pointsDefinitions.slice(indexOfPointType + 1)]
        });
    }
    addDefinition = () => {
        this.setState({
            leagueId: this.props.leagueId
        });
        const newDefinition = {
            type: this.state.input,
            weight: 0
        }
        this.setState({
            pointsDefinitions: [...this.state.pointsDefinitions, newDefinition],
            input: ''
        });
        this.input.focus()
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
        console.log('PointSettings this.state: ',this.state)
    }
    render() {
        return (
            <div 
                className="section-container"
                style={{backgroundColor: this.state.activeComponent === 0 ? '#e8ebef' : '', color: this.state.activeComponent === 0 ? 'grey' : ''}}
            >
                <h3>Point Settings</h3>
                <p>First create the point types, then you can assign point weights after the types are set.</p> 
                <p>Suggestions for Point Types: Finish 1st In Group Round, Finish 2nd In Group Round, Net Par, Net Birdie, Net Eagle, Net Better-than-Eagle, Rounds Played, Mulligan(-), Hole Not Finished(-), Swearing and Outbursts of Anger(-)</p>
                <input 
                    type="text" 
                    value={this.state.input} 
                    onChange={e => this.setState({
                        input: e.target.value
                    })} 
                    ref={i => this.input = i}
                    disabled={this.state.activeComponent === 0 ? true : false}
                />
                <button 
                    onClick={this.addDefinition}
                    className="add-button"
                    disabled={this.state.activeComponent === 0 ? true : false}
                >
                    Add Points
                </button>
                {this.renderDefinitions()}
                <button 
                    onClick={this.handlePointsData}
                    disabled={this.state.activeComponent === 0 ? true : false}
                >
                    Set Points
                </button>
            </div>
        );
    }
}

export default PointSettings;