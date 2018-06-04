import React from 'react';
import { cloneDeep } from 'lodash';
import EditableField from './EditableField';

const pointsData = [
    { description: 'Finish 1st In Group Round', points: 25 },
    { description: 'Finish 2nd In Group Round', points: 12 },
    { description: 'Net Better-than-Eagle', points: 30 },
    { description: 'Net Eagle', points: 12 },
    { description: 'Net Birdie', points: 5 },
    { description: 'Net Par', points: 1 },
    { description: 'Mulligan', points: -20 },
    { description: 'Hole Not Finished', points: -25 }
]

// TODO: Fix bug and ensure so that points don't switch to NaN if edit is clicked but no updates are made

class PointsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pointsData    
        }
    }
    renderPointSettings = () => this.state.pointsData.map((item, index) => (
        <tr key={index}>
            <td>{item.description}</td>
            <td><EditableField value={item.points} onUpdate={text => this.handleUpdate(text, index)} /></td>
        </tr>
    ));
    handleUpdate = (text, index) => {
        const cachedSetting = cloneDeep(this.state.pointsData[index]);
        console.log('cachedSetting: ', cachedSetting)
        const newPoints = Object.assign({}, this.state.pointsData[index], { points: text || cachedSetting.points });
        this.setState({
            pointsData: [...this.state.pointsData.slice(0, index), newPoints, ...this.state.pointsData.slice(index + 1)]
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
                <table id="points-table">
                    <tbody>
                        {this.renderPointSettings()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PointsTable;


                            
                    