import {connect} from "react-redux";
import {addPostThunk, setPostsThunk} from "./PostsReducer"
import PostsCreateContainer from "./PostCreateContainer"
import {AppStateType} from "../redux_store";
import {PostsType} from "../types/types";


let stateGo = (state: AppStateType): StateProps => {
    return {
        arrayPosts: state.postsTree.posts,
    }
};

const PostsToRedux = connect<StateProps, DispatchProps, OwnProps, AppStateType>(stateGo, {setPostsThunk,addPostThunk})(PostsCreateContainer);


export default PostsToRedux


type StateProps = {
    arrayPosts: Array<PostsType>,
}
type DispatchProps = {
    addPostThunk: (title: string, body: string) => void,
    setPostsThunk: () => void,
}
type OwnProps = {}
export type PropsTypePostCreate = StateProps & DispatchProps & OwnProps;