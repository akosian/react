import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    updateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (<div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onChange={(e) => {
                    this.updateStatus(e)
                }} onBlur={this.deactivateEditMode} type='text'
                       value={this.state.status}/>
            </div>
            }
        </div>)
    }
}

export default ProfileStatus