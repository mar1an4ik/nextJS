import inf from "./PostInfo.module.css"
import {PostsType} from "../types/types";
import React from "react";

const PostInfo = (props: PropsType) => {
    let id = Number(props.id);
    return (<div className={inf.main}>


        <div className={inf.title}>{props.arrayPosts[id - 1].title}</div>
        <div className={inf.body}>{props.arrayPosts[id - 1].body}</div>
        <div className={inf.id}>#{id}</div>
    </div>)
}
export default PostInfo

interface PropsType {
    arrayPosts: Array<PostsType>,
    id: any,
}