import PostCreate from "./PostCreate";
import React, {useEffect} from "react";
import {PropsTypePostCreate} from "./PostCreateToRedux";

const PostsContainer: React.FC<PropsTypePostCreate> = (props) => {
    useEffect(()=>{
        if (props.arrayPosts.length<1) props.setPostsThunk();
    },[])

    return (<PostCreate addPostThunk={props.addPostThunk}/>)
}


export default PostsContainer
