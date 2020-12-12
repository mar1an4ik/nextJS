import React from "react";
import NavBar from "./NavBar";
import PostsToRedux from "../components/PostsToRedux";
import {Provider} from "react-redux";
import store from "../redux_store"

const index = () => {

    return (
        <>
            <NavBar/>

            <Provider store={store}>
                <PostsToRedux/>
            </Provider>

        </>
    )
}

export default index
