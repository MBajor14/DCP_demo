import React from 'react';

const OutputField = props => {
    return(
        <div className="outputFields">
            <h6 className="outputFieldsKey">{props.fieldkey}</h6>
            <h6 className="outputFieldsValue">{props.value}</h6>
        </div>
    );
};

export default OutputField;
