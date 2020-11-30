import React from 'react'
import UserItem from "./UserItem";

class UserItemComponent extends React.Component {

    follow = () => {
        let userId = this.props.user.id;
        this.props.follow(userId)
    }

    unfollow = () => {
        let userId = this.props.user.id;
        this.props.unfollow(userId)
    }

    render() {
        return <UserItem follow={this.follow}
                         unfollow={this.unfollow}
                         user={this.props.user}
                         toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                         isFollowingProgress={this.props.isFollowingProgress}/>
    }
}

export default UserItemComponent;