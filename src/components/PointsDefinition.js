import React from 'react';
import EditableField from './EditableField';
import styled from 'styled-components';

const PointDefRow = styled.div`
    width: 40%;
    display: flex;
    border-bottom: 1px solid rgb(163, 248, 230);
    padding: 5px 0 0;
    p {
        display: inline-block;
        margin: 0 35px 15px 0;
    }
`

const PointsDefinition = props => {
    return (
        <PointDefRow>
            <p>{props.type}</p>
            <EditableField 
                value={props.weight} 
                onUpdate={text => props.onUpdate(props.type, text || 0)}
            />
        </PointDefRow>
    );

}

export default PointsDefinition;


                            
                    