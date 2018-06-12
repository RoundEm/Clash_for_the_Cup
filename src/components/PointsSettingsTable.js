import React from 'react';
import { clone } from 'lodash';
import EditableField from './EditableField';

const pointsData = [
    { description: 'Finish 1st In Group Round', points: 25 },
    { description: 'Finish 2nd In Group Round', points: 12 },
    { description: 'Net Eagle', points: 12 },
    { description: 'Net Birdie', points: 5 },
    { description: 'Net Par', points: 1 },
    { description: 'Net Better-than-Eagle', points: 40 },
    { description: 'Mulligan', points: -20 },
    { description: 'Hole Not Finished', points: -25 }
]

class PointsSettingsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pointsData    
        }
    }
    renderPointsSettings = () => this.state.pointsData.map((item, i) => (
        <tr key={i}>
            <td>{item.description}</td>
            <td className="point-cell">
                <EditableField 
                    value={item.points} 
                    onUpdate={text => this.handleUpdate(text, i)} 
                />
            </td>
        </tr>
    ));
    handleUpdate = (text, i) => {
        console.log('text: ', text)
        const cachedSetting = clone(this.state.pointsData[i]);
        console.log('cachedSetting: ', cachedSetting)
        const newPoints = Object.assign({...this.state.pointsData[i]}, { points: text || cachedSetting.points });
        this.setState({
            pointsData: [...this.state.pointsData.slice(0, i), newPoints, ...this.state.pointsData.slice(i + 1)]
        });
        // setTimeout(() => {
        //     const success = Math.random() > 0.5;
        //     if (!success) {
        //         alert('bad server')
        //         this.setState({ field1: cachedSetting })
        //     }
        // }, 2000)
    }
    render() {
        return (
            <div>
                <p>Suggestions for Point Types: Finish 1st In Group Round, Finish 2nd In Group Round, Net Par, Net Birdie, Net Eagle, Net Better-than-Eagle, Rounds Played, Mulligan(-), Hole Not Finished(-), Swearing and Outbursts of Anger(-)</p>
                <input type="text" />
                <button className="add-button">Add Point Type</button>
                <table>
                    <tbody>
                        {this.renderPointsSettings()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PointsSettingsTable;


                            
                    