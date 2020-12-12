import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import PostsReducer from "./components/PostsReducer";

let reducers = combineReducers({
    postsTree: PostsReducer,
});
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

type StoreType = typeof reducers;//MB not working
export type AppStateType = ReturnType<StoreType>


const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;