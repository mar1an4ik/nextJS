import React from "react";
import PostCreateToRedux from "../../components/PostCreateToRedux"
import NavBar from "../NavBar";
import {Provider} from "react-redux";
import store from "../../redux_store"

const createPostPage = () => {
    return (
        <>
            <NavBar/>
            <Provider store={store}>
                <PostCreateToRedux/>
            </Provider>
        </>)
}

export default createPostPage;