import React from "react";

import NavBar from "../NavBar";
import {Provider} from "react-redux";
import store from "../../redux_store"
import PostInfoToRedux from "../../components/PostInfoToRedux";

const createPostPage = () => {

    return (
        <>
            <NavBar/>

            <Provider store={store}>
                <PostInfoToRedux/>
            </Provider>
        </>)
}

export default createPostPage;