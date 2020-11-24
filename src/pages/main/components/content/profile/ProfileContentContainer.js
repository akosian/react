import ProfileContent from "./ProfileContent";
import {connect} from "react-redux";
import {AddPost, UpdateNewPostText} from "../../../../../redux/components/profilepage/posts/PostsActionCreator";

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo,
        postsValue: state.profilePage.postsValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            let action = AddPost();
            dispatch(action)
        },
        onPostChange: (newPostText) => {
            let action = UpdateNewPostText(newPostText)
            dispatch(action)
        }
    }
}

const ProfileContentContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContent);

export default ProfileContentContainer;