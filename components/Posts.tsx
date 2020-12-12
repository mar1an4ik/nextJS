import posts from "./Posts.module.css";

import * as React from "react";
import {PostsType} from "../types/types";


const Posts=(props:PropsType)=>{


    return( <div className={posts.main}>

        <h1 className={posts.h1}>Your posts:</h1>


        {props.arrayPosts.reverse()}

    </div>)
}

export default Posts
interface PropsType {
    arrayPosts:Array<PostsType>,

}