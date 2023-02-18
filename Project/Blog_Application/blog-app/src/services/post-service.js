import { MYAXIOIS, privateAxios } from "./helper"

export const createPost = (postData) => {
    // debugger
    console.log(postData);
    // /user/{userId}/category/{categoryId}/posts
    // /user/{userId}/category/{categoryId}/posts
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`, postData).
        then((response) => response.data)
}

export const loadAllPosts = (pageNumber, pageSize) => {

    return MYAXIOIS.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response => response.data)
}

// Load single post
export const loadPost = (postId) => {
    return MYAXIOIS.get('/posts/' + postId).then(response => response.data)
}

export const createComment = (comment, postId) => {
    // /post/{postId}/comments
    debugger
    return privateAxios.post(`/post/${postId}/comments`, comment);
}


// upload post banner image

export const uploadPostImage = (image, postId) => {
    let formData = new FormData();
    formData.append("image", image);

    return privateAxios.post(`/posts/image/upload/${postId}`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    ).then((response) => response.data)

}


// get categories wise post
// /category/{categoryId}/posts
export const loadPostCategoryWise = (categoryId) => {
    return privateAxios.get(`/category/${categoryId}/posts`).then((res) => res.data);
}

export const loadPostUserWise = (userId) => {
    return privateAxios.get(`/user/${userId}/posts`).then((res) => res.data);
}

// /post/{postId}
export const deletePostService = (postId) => {
    return privateAxios.delete(`/post/${postId}`).then((res) => res.data);
}

//update post
export const updatePost = (post, postId) => {
    console.log(post);
    return privateAxios.put(`/post/${postId}`, post).then((resp) => resp.data);
  }
