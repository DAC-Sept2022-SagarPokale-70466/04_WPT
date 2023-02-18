import { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import JoditEditor from 'jodit-react';
import { createPost as doCreatePost, uploadPostImage } from "../services/post-service";
import { getCurrentUserDetail } from "../auth";
import { toast } from "react-toastify";


const AddPost = () => {

    // const [categories, setCategory] = useState([])

    const [categories, setCategory] = useState([]);

    var catt = categories;

    const editor = useRef(null);

    // const [content, setContent] = useState('');

    // const config = {
    //     placeholder: "Enter Here Something to post"
    // }

    const [post, setPost] = useState({
        title: '',
        content: '',
        categoryId: ''
    })

    const [user, setUser] = useState(undefined);

    // --------------------------------------------------------

    const [image, setImage] = useState(null)


    // const config={
    //     placeholder:"Start typing...",

    // }

    useEffect(
        () => {

            setUser(getCurrentUserDetail())
            loadAllCategories().then((data) => {
                console.log(data)
                // setCategories(data)
            }).catch(error => {
                console.log(error)
            })
        },
        []
    )

    // --------------------------------------
    useEffect(
        () => { // This is callback function

            setUser(getCurrentUserDetail)

            loadAllCategories().then((data) => {
                console.log(data);
                // debugger
                setCategory(data);
            }).catch(error => {
                console.log(error);
            })
        },
        []); // This is depedancy load only once


    // Event will have all the info while creating the object who generated it
    const fieldChanged = (event) => {
        console.log(event.target.name)

        setPost({ ...post, [event.target.name]: event.target.value }) // Only change the title from post and other value of post will take as it is
    }

    const contentFieldChanged = (data) => {
        // console.log(data);
        setPost({ ...post, 'content': data })
    }

    const createPost = (event) => {
        event.preventDefault();
        // console.log(event.preventDefault());
        // console.log(post);

        if (post.title.trim() === '') {
            alert("Post is requied")
        }
        if (post.content.trim() === '') {
            alert("Content is requied")
        }
        if (post.categoryId.trim() === '') {
            alert("categoryId is requied")
        }

        // Submit the form

        post['userId'] = user.id
        doCreatePost(post).then(data => {

            uploadPostImage(image, data.postId).then((data)=>
            {
                toast.success('Image Uploaded')
            }).catch((error) =>
            {
                toast.error('Error in Image');
                console.log(error)
            })

            console.log(data)
            toast.success("Post Created !!")
            setPost({
                title: '',
                content: '',
                categoryId: ''
            })
        }).catch((error) => {
            toast.error("Post not created due to some error !!")
            console.log(error)
        })

    }


     //handling file chagne event
     const handleFileChange=(event)=>{
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    }

    return (
        <div className="wrapper">

            <Card className="shadow mt-2">
                <CardBody>
                    {/* {JSON.stringify(post)} */}
                    <h3>Write Something Interesting</h3>

                    <Form onSubmit={createPost}>
                        <div className="my-3">
                            <Label for="title">Post Title</Label>
                            <Input type="text" id="title" placeholder="Enter Here"
                                className="rounded-3"
                                name="title"
                                onChange={fieldChanged}></Input>
                        </div>

                        <div className="my-3">
                            <Label for="content">Post Content</Label>
                            {/* <Input type="textarea" id="content"
                                placeholder="Enter Here" className="rounded-3"
                                style={{ height: "150px" }}></Input> */}

                            <JoditEditor ref={editor} value={post.content}
                                onChange={newcontent => { contentFieldChanged(newcontent) }
                                }
                            ></JoditEditor>
                        </div>

                        {/* File Filed */}

                        <div className="mt-3">
                            <Label for="image">Select Post banner</Label>
                            <Input id="image" type="file" onChange={handleFileChange} />
                        </div>


                        <div className="my-3">
                            <Label for="category" >Post Category</Label>
                            <Input
                                type="select"
                                id="category"
                                placeholder="Enter here"
                                className="rounded-0"
                                name="categoryId"
                                onChange={fieldChanged}
                                defaultValue={0}
                            >

                                <option disabled value={0} >--Select category--</option>

                                {

                                    categories.map((category) => {
                                        return (
                                            <option value={category.categoryId} key={category.categoryId}>
                                                {category.categoryTitle}
                                            </option>
                                        )
                                    })

                                }

                            </Input>
                        </div>





                        <Container className="text-center">
                            <Button color="primary">Create Post</Button>
                            <Button className="ms-2" color="danger">Reset Content</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default AddPost