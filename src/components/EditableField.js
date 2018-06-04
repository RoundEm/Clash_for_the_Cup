import React from 'react';
import editIcon from '../assets/002-pencil-1.png'
import closeIcon from '../assets/008-close-2.png'
import styled from 'styled-components';

const Field = styled.div`
    height: 20px;
    width: 100%;
    position: relative;
    img {
        height: 20px;
        display: inline-block;
        position: absolute;
        left: 40px;
    }
    input {
        height: 23px;
        display: inline-block;
        width: 40px;
        font-size: 1em
    }
    p {
        height: 20px;
        display: inline-block;
    }
    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export class EditableField extends React.Component {
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
            <input type="text" value={this.state.input || value} onChange={this.handleInput} />  
            <img src={closeIcon} alt="Close icon" onClick={value => this.onClose(value)} />
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
              { this.state.editable ? this.renderEdits(value) : this.renderView(value) }
            </Field>
        );
    }
}

export default EditableField;
