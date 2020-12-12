import PostsContainer from "./PostsContainer";
// @ts-ignore
import {connect} from "react-redux";
import {setPostsThunk} from "./PostsReducer"
import {AppStateType} from "../redux_store";
import {PostsType} from "../types/types";

let stateGo = (state: AppStateType) => {
    return {
        arrayPosts: state.postsTree.posts, //posts
    }
};

const PostsToRedux = connect<StateProps, DispatchProps, OwnProps, AppStateType>(stateGo,
    {setPostsThunk})(PostsContainer);


export default PostsToRedux

type StateProps = {
    arrayPosts: Array<PostsType>,

}
type DispatchProps = {
    setPostsThunk: () => void,
}
type OwnProps = {}
export type PropsTypePosts = StateProps & DispatchProps & OwnProps;