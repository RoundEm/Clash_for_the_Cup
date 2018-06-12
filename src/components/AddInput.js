import React from 'react';

class AddInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            dataAdded: []
        }
    }
    handleInput = e => {
        this.setState({
            input: e.target.value.trim()
        }); 
    }
    handleAddData = () => {
        if (this.state.input === "") {
            alert('You must enter some data first');
        } else if (this.state.dataAdded.includes(this.state.input)) {
            alert('This entry has already been added');
        } else {
            const newData = {
                name: this.state.input,
                key: Date.now()
            }
            this.setState({
                dataAdded: [...this.state.dataAdded, newData],
                input: ''
            });
        }
        this.input.focus()
    }
    removeData = key => {
        this.setState({
            dataAdded: this.state.dataAdded.filter(data => data.key !== key)
        });
    }
    componentDidUpdate() {
        console.log('this.state.dataAdded: ', this.state.dataAdded)
    }
    render() {
        const _data = this.state.dataAdded.map((data, i) => (
            <li 
                key={i}
                onClick={() => this.removeData(data.key)}
                className="data-added-list"
            >
                {data.name}
            </li>
        ));
        const removeDataVerbiage = 
        this.state.dataAdded.length === 0 
            ? '' 
            : <p>Select an entry to remove it</p>;

        return (
            <div>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleInput}
                    autoComplete="off"
                    ref={i => this.input = i}
                />
                {/* // TODO: How to create a conditional so that this button shows Add Player or Add Point Type */}
                <button 
                    onClick={this.handleAddData}
                    className="add-button"
                >
                    Add {this.props.section}
                </button>
                {removeDataVerbiage}
                <ul>
                    {_data}
                </ul>
                <button onClick={this.props.handleClick}>Set {this.props.section}s</button>
            </div>
        );
    }
}

export default AddInput;