import React, {useState} from 'react';
import OutputField from './OutputField';

const MilestoneDisplay = props => {
    const [goalDuration, setGoalDuration] = useState(props.goalDuration);

    const handleGoalDurationChange = event => {
        event.preventDefault();
        setGoalDuration(event.target.value);
    };

    const updateMilestones = event => {
        event.preventDefault();
        fetch(`http://localhost:3000/projects/demoUpdate/${props.milestoneCurrentID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    dcp_goalduration: goalDuration
                }
            )
        })
            .catch(error => console.error(error))
    };

    return (
        <div className="milestoneDisplay">
            <OutputField fieldkey={"Milestone Name:"} value={props.milestoneName} />
            <OutputField fieldkey={"Milestone Current ID:"} value={props.milestoneCurrentID} />
            <OutputField fieldkey={"Actual Start Date:"} value={props.actualStartDate} />
            <OutputField fieldkey={"Planned Completion Date:"} value={props.plannedCompletionDate} />
            <OutputField fieldkey={"Goal Duration:"} value={props.goalDuration} />

            <div className="goalDuration">
                <h6 className="outputFieldsKey">{props.fieldkey}</h6>
                <input type="text" placeholder={props.goalDuration} onChange={handleGoalDurationChange}/>
                <button onClick={updateMilestones}>Update</button>
            </div>
        </div>
    );
};

export default MilestoneDisplay;
