import React, { useState } from 'react';
import MilestoneDisplay from './MilestoneDisplay';

const UpdateCRM = () => {
    const [projectID, setProjectID] = useState('');
    const [btnVal, setBtnVal] = useState('Get');
    const [milestoneName, setMilestoneName] = useState('');
    const [milestoneCurrentID, setMilestoneCurrentID] = useState('');
    const [actualStartDate, setActualStartDate] = useState('');
    const [plannedCompletionDate, setPlannedCompletionDate] = useState('');
    const [goalDuration, setGoalDuration] = useState('');

    const handleProjectIDChange = event => {
        setProjectID(event.target.value);
    };

    const handleProjectIdSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:3000/projects/demoGet/${projectID}`)
            .then(res => res.json())
            .then(data => {
                const attributes = data.data.attributes;
                console.log(attributes);

                setMilestoneName(attributes["_dcp_currentmilestone_value_formatted"]);
                setMilestoneCurrentID(attributes["_dcp_currentmilestone_value"]);
                setActualStartDate(attributes["af.dcp_actualstartdate_formatted"]);
                setPlannedCompletionDate(attributes["af.dcp_plannedcompletiondate_formatted"]);
                setGoalDuration(attributes["af.dcp_goalduration"]);
                setBtnVal('Refresh');
            })
            .catch(error => console.error(error))
    };

    return (
        <div className="demo-container">
            <h3 className="demo-title">UpdateCRM</h3>

            <div className="projectID">
                <h5>ProjectID</h5>
                <input type="text" onChange={handleProjectIDChange} placeholder="projectID"/>
                <button onClick={handleProjectIdSubmit}>{btnVal}</button>
            </div>

            {
                milestoneName &&
                <MilestoneDisplay
                    milestoneName={milestoneName}
                    milestoneCurrentID={milestoneCurrentID}
                    actualStartDate={actualStartDate}
                    plannedCompletionDate={plannedCompletionDate}
                    goalDuration={goalDuration}
                    projectID={projectID}
                />
            }
        </div>
    );
};

export default UpdateCRM;
