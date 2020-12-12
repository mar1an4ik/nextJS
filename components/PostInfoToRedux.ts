import {connect} from "react-redux";
import PostInfoContainer from "./PostInfoContainer";
import {setPostsThunk} from "./PostsReducer";
import {AppStateType} from "../redux_store";
import {PostsType} from "../types/types";

let stateGo = (state: AppStateType, pid: any) => {

    return {
        arrayPosts: state.postsTree.posts,
        pid: pid,//id page
    }
};

const PostInfoToRedux = connect<StateProps, DispatchProps, OwnProps, AppStateType>(stateGo,
    {setPostsThunk})(PostInfoContainer);


export default PostInfoToRedux


type StateProps = {
    arrayPosts: Array<PostsType>,
    pid: any,

}
type DispatchProps = {
    setPostsThunk: () => void,
}
type OwnProps = {}
export type PropsTypePostInfo = StateProps & DispatchProps & OwnProps;