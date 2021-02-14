import React from 'react'

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status || '---',
            editMode: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }
    
    onEditMode = () => {
        this.setState({editMode : true})
    }

    offEditMode = () => {
        this.setState({editMode : false});
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({ status: e.target.value })
    }

    render() {
        return <div>
            {this.state.editMode && <div><input autoFocus={true} type="text" onInput={this.onChangeStatus} onBlur={this.offEditMode} value={this.state.status}/></div>}
            {!this.state.editMode && <div onDoubleClick={this.onEditMode}>{this.state.status}</div>}
        </div>
    }
}

export default ProfileStatus;