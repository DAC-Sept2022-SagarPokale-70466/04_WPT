import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from "reactstrap";
import { isLoggedIn } from "../auth";
import Base from "../Components/Base";
import { BASE_URL } from "../services/helper";
import { createComment, loadPost } from "../services/post-service";

const PostPage = () => {

    const { postId } = useParams()

    const [post, setPost] = useState(null)

    const [comment, setComment] = useState({
        content: ''
    })


    useEffect(() => {
        // load post of postId 
        loadPost(postId).then(data => {
            console.log(data);
            setPost(data)
            // debugger

        }).catch(error => {
            console.log(error)
            toast.error("Error in loading post")
        })

    }, [])

    const printDate = (numbers) => {

        return new Date(numbers).toLocaleDateString()
    }

    const submitPost = () => {

        if (!isLoggedIn()) {
            toast.error("Need to login first !!")
            return
        }

        if (comment.content.trim() === '') {
            return
        } 
        createComment(comment, post.postId)
        .then(data => {
                // debugger
                console.log(data)
                toast.success("comment added ..")
                setPost({
                    ...post,
                    comments: [...post.comments, data.data]
                })
                setComment({
                    content: ''
                })
            }).catch(error => {
                // debugger
                console.log(error)
            })
    }



    return (

        <Base>
            <Container>
                <Link to="/">Home</Link>

                <Row>
                    <Col md={{ size: 12 }}>
                        <h1>Load Post From database</h1>
                    </Col>

                    <Card className="mt-3">
                        {
                            (post) && (
                                <CardBody>
                                    <CardText> Posted By <b>{post.user.name}</b> on <b>{printDate(post.date)} </b> </CardText>

                                    <CardText>
                                        <span className="text">{post.category.categoryTitle}</span>
                                    </CardText>

                                    <div className="divder" style={{
                                        width: '100%',
                                        height: '1px',
                                        background: '#e2e2e2'

                                    }}></div>

                                    <CardText className="mt-3">
                                        <h1>{post.title}</h1>
                                    </CardText>

                                    <div className="image-container text-center  mt-4 shadow  " style={{ maxWidth: '50%' }}>
                                        <img className="img-fluid" src={BASE_URL + 'post/image/' + post.imageName} alt="" />    
                                    </div>

                                    {/* {BASE_URL + 'post/image/' + post.imageName} */}
                                    <CardText className="mt-5" dangerouslySetInnerHTML={{ __html: post.content }}>

                                    </CardText>

                                </CardBody>
                            )
                        }

                    </Card>


                </Row>

                {/* ---------------------------------------------------------------------------- */}


                <Row className="my-4">

                    <Col md={

                        {
                            size: 10,
                            offset: 1  
                        }
                    }>
                        <h3>Comments ( {post ? post.comments.length : 0} )</h3>

                        {
                            post && post.comments.map((c, index) => (
                                <Card className="mt-4 border-0" key={index}>
                                    <CardBody>
                                        <CardText>
                                            {c.content}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            ))
                        }

                        <Card className="mt-4 border-0" >
                            <CardBody>

                                <Input
                                    type="textarea"
                                    placeholder="Enter comment here"
                                    value={comment.content}
                                    onChange={(event) => setComment({ content: event.target.value })}
                                />
                                <Button onClick={submitPost} className="mt-2" color="primary">Submit</Button>
                            </CardBody>
                        </Card>

                    </Col>

                </Row>

            </Container>

        </Base>

    )
}

export default PostPage;