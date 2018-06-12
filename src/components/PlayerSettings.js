import React from 'react';
import AddInput from './AddInput';

class PlayerSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'Player'
        }
    }
    render() {
        return (
            <div className="section-container">
                <h3>Players</h3>        
                <AddInput section={this.state.section} />
            </div>
        );
    }
}

export default PlayerSettings;