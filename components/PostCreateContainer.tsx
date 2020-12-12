import PostCreate from "./PostCreate";
import React from "react";
import {PropsTypePostCreate} from "./PostCreateToRedux";

const PostsContainer: React.FC<PropsTypePostCreate> = (props) => {

    return (<PostCreate addPostThunk={props.addPostThunk}/>)
}


export default PostsContainer
