import UserContentCss from "./Users.module.css";
import UsersContent from "./userscontent/UsersContent";
import React from "react";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    if (pagesCount > 5) {
        for (let i = 1; i < 5; i++) {
            pages.push(i)
        }
        pages.push(pagesCount)
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }

    return (<div>
            {pages.map(p => {
                return (<button
                        className={props.currentPage === p && UserContentCss.selectedPage}
                        onClick={() => {props.onPageChange(p)}}>{p}</button>
                )
            })}
            <UsersContent users={props.users} follow={props.follow} unfollow={props.unfollow}/>
        </div>
    )
}

export default Users;