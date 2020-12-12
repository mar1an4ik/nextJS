import axios from "axios";


const instance = axios.create({});
type ResponseType = {
    data: {
        title: string,
        body: string,
        id: string,
    }
}

export const api = {

    getPosts() {

        return instance.get("https://simple-blog-api.crew.red/posts").then((response) => {

            return response.data
        });
    },
    getDetails() {
        return instance.get("https://simple-blog-api.crew.red/posts/1?_embed=comments").then((response: ResponseType) => {

            return response.data
        });
    },
    addPost(title: string, body: string) {
        return instance.post("https://simple-blog-api.crew.red/posts", {title, body});
    },


};