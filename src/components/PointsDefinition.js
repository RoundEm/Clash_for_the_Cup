import React from 'react';
import { clone } from 'lodash';
import EditableField from './EditableField';

class PointsDefinition extends React.Component {
    constructor(props) {
        super(props);
    }
    // assignDataToState = () => (
    //     console.log('assignDataToState ran'),
    //     this.setState({
    //         pointsData: [...this.props.pointTypes]
    //     });
    // )
    // renderPointsSettings = () => this.state.pointsData.map((point, i) => (
    //     <tr key={point.type + i}>
    //         <td>{point.type}</td>
    //         <td className="point-cell">
    //             <EditableField 
    //                 value={point.weight || 0} 
    //                 onUpdate={text => this.handleUpdate(text, i)} 
    //             />
    //         </td>
    //     </tr>
    // ));
    // handleUpdate = (text, i) => {
    //     const cachedSetting = clone(this.state.pointsData[i]);
    //     const newPoints = Object.assign({...this.state.pointsData[i]}, { points: text || cachedSetting.points });
    //     this.setState({
    //         pointsData: [...this.state.pointsData.slice(0, i), newPoints, ...this.state.pointsData.slice(i + 1)]
    //     });

    // }
    // componentDidUpdate() {
    //     console.log('this.state.pointsData: ', this.state.pointsData)
    // }

    
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.type}
                    onUpdate={e => this.props.onUpdate(e.target.value, this.props.weight)}
                />
                <EditableField 
                    value={this.props.weight} 
                    onUpdate={text => this.props.onUpdate(this.props.type, text)}
                />
            </div>
        );
    }
}

export default PointsDefinition;


                            
                    