import React from 'react';
import AddInput from './AddInput';

class PlayerSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'Player'
        }
    }
    handleClick = childDataAdded => {
        if (childDataAdded.length === 0) {
            alert('Please add at least one point type to continue')
        } else {
            // TODO: AJAX request to player endpoint
        }
    }
    render() {
        return (
            <div className="section-container">
                <h3>Players</h3>        
                <AddInput 
                    handleClick={this.handleClick} 
                    section={this.state.section} 
                />
            </div>
        );
    }
}

export default PlayerSettings;