import React, {useEffect} from "react";
import PostInfo from "./PostInfo";
import {useRouter} from "next/router";
import Preloader from "./Preloader";
import {PropsTypePostInfo} from "./PostInfoToRedux";


const PostInfoContainer: React.FC<PropsTypePostInfo> = (props) => {
    const router = useRouter()
    useEffect(() => {
        if (props.arrayPosts.length < 1) props.setPostsThunk()
    }, [])

    return (props.arrayPosts.length > 1
        ? <PostInfo id={router.query.pid} arrayPosts={props.arrayPosts}/>
        : <Preloader/>)
}


export default PostInfoContainer
