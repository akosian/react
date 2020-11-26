import React from 'react'
import * as axios from "axios";
import UserContent2 from "./UserContent2";

class Users extends React.Component {

    componentDidMount() {
        this.setUsers()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setUsers()
    }

    setUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`, {
                headers: {
                    'API-KEY': '09a39206-22cc-4776-a7f9-0fe50b1debbf'
                }
            }
        ).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onPaginationClick1 = () => {
        this.props.changePage(1)
    }

    onPaginationClick2 = () => {
        this.props.changePage(2)
    }

    onPaginationClick3 = () => {
        this.props.changePage(3)
    }

    onPaginationClick4 = () => {
        this.props.changePage(4)
    }

    render() {
        return (
            <div>
                <button onClick={this.onPaginationClick1}>1</button>
                <button onClick={this.onPaginationClick2}>2</button>
                <button onClick={this.onPaginationClick3}>3</button>
                <button onClick={this.onPaginationClick4}>4</button>
                <UserContent2 users={this.props.users} follow={this.props.followUser} unfollow={this.props.unfollowUser}
                              showAll={this.props.showAll} hideAll={this.props.hideAll}/>
            </div>
        )
    }
}

export default Users;