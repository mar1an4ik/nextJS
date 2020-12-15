import pst from "./Posts.module.css";

import React, {useEffect} from "react";
import Posts from "./Posts";
import Link from "next/link";
import {PropsTypePosts} from "./PostsToRedux";


const PostsContainer: React.FC<PropsTypePosts> = (props: any) => {

    let arrayPosts = props.arrayPosts.map((post: any) => {

        let href2 = `/posts/${post.id}`

        return (<Link href={href2}>
            <div className={pst.post}>
                <div className={pst.title}><h3>{post.title}</h3></div>
                <img alt={"img"} className={pst.img}
                     src={"https://cdn.iconscout.com/icon/free/png-256/post-5-100382.png"}/>
                <span className={pst.body}>{post.body}</span>
                <div className={pst.id}>
                    #{post.id}
                </div>


            </div>
        </Link>)
    })

    useEffect(() => {
        if (props.arrayPosts.length < 1) props.setPostsThunk()
    }, [])

    useEffect(() => {
        if (props.arrayPosts.length < 1) props.setPostsThunk()
    }, [props.arrayPosts.length])


    return (<Posts arrayPosts={arrayPosts}/>)
}

export default PostsContainer
