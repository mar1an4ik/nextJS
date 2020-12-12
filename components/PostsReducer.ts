import {api} from "../pages/api/api";
import {PostsType} from "../types/types";
import {AppStateType, InferActionTypes} from "../redux_store";
import {ThunkAction} from "redux-thunk";


let initialState = {
    posts: [] as Array<PostsType>,

};
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionTypes<typeof actions2>


const TracksReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "setPosts": {
            let statecopy = {...state};
            statecopy.posts = [...state.posts]
            statecopy.posts = action.arrayPosts
            return statecopy;
        }
        case "addPost": {
            let statecopy = {...state};
            statecopy.posts = [...state.posts]
            statecopy.posts.push({
                title: action.title,
                body: action.body,
                id: statecopy.posts[statecopy.posts.length - 1].id + 1,
            });
            return statecopy;
        }
        default: {
            return state;
        }
    }
};
export const actions2 = {
    setPosts: (arrayPosts: Array<PostsType>) => {
        return {
            type: "setPosts",
            arrayPosts: arrayPosts,
        } as const
    },
    addPost: (title: string, body: string) => {
        return {
            type: "addPost",
            title: title,
            body: body,
        } as const
    },
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const setPostsThunk = (): ThunkType => async (dispatch) => {

    const response = await api.getPosts();

    dispatch(actions2.setPosts(response)); //get from api and set to REDUX
}
export const addPostThunk = (title: string, body: string): ThunkType => async (dispatch) => {
    await api.addPost(title, body);
    dispatch(actions2.addPost(title, body)); //get from api and set to REDUX
}


export default TracksReducer;