import {connect} from "react-redux";
import {addPostThunk} from "./PostsReducer"
import PostsCreateContainer from "./PostCreateContainer"
import {AppStateType} from "../redux_store";


let stateGo = (state: AppStateType): StateProps => {
    return {
        arrayPosts: state.postsTree.posts,
    }
};

const PostsToRedux = connect<StateProps, DispatchProps, OwnProps, AppStateType>(stateGo, {addPostThunk})(PostsCreateContainer);


export default PostsToRedux


type StateProps = {}
type DispatchProps = {
    addPostThunk: (title: string, body: string) => void,
}
type OwnProps = {}
export type PropsTypePostCreate = StateProps & DispatchProps & OwnProps;