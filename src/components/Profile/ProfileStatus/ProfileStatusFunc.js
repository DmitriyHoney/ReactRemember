import React, { useEffect, useState } from 'react'

const ProfileStatus = props => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const onEditMode     = () => setEditMode(true);
    const offEditMode    = () => {
        setEditMode(false);
        if (props.status !== status) {
            props.updateStatus(status)
        }
    }
    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return <div>
        {editMode && 
            <div>
                <input 
                    autoFocus={true} 
                    type="text" 
                    value={status}
                    onBlur={offEditMode}
                    onInput={onChangeStatus}
                />
            </div>
        }
        {!editMode && <div onDoubleClick={onEditMode}>{props.status}</div>}
    </div>
}

export default ProfileStatus;