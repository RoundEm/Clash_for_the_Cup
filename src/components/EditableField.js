import React from 'react';
import editIcon from '../assets/edit_light.png';
import saveIcon from '../assets/save-file-option.png.png';
import styled from 'styled-components';

const Field = styled.div`
    height: 25px;
    width: 100%;
    position: relative;
    img {
        height: 25px;
        display: inline-block;
        position: absolute;
        left: 70px;
    }
    img:hover {
        cursor: pointer;
    }
    input {
        height: 25px;
        display: inline-block;
        width: 50px;
        font-size: 1em;
    }
    p {
        height: 25px;
        display: inline-block;
    }
`

class EditableField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            input: ''
        }
    }
    handleInput = e => {
        const input = e.target.value;
        this.setState({
            input
        });
    }
    renderView = value => (
        <div>
            <p>{value}</p>
            <img src={editIcon} alt="Edit icon" onClick={this.toggleEditable} />   
        </div>
    )
    renderEdits = value => (
        <div>
            <input type="number" value={this.state.input} onChange={this.handleInput} />  
            <img src={saveIcon} alt="Close icon" onClick={this.onClose} />
        </div>
    )
    onClose = () => {
        this.toggleEditable();
        this.props.onUpdate(parseInt(this.state.input, 10));
    }   
    toggleEditable = () => {
        this.setState({
            editable: !this.state.editable
        });
    }
    render() {
        const value = this.props.value;
        return (
            <Field>
                {this.state.editable 
                    ? this.renderEdits(value) 
                    : this.renderView(value)
                }
            </Field>
        );
    }
}

export default EditableField;
