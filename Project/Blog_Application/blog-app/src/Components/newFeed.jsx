import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { toast } from 'react-toastify';
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import { deletePostService, loadAllPosts } from '../services/post-service';
import Post from './Post';

function NewFeed() {

    const [postContent, setPostContent] = useState({
        content: [],
        totalPages: '',
        totalElements: '',
        pageSize: '',
        lastPage: false,
        pageNumber: ''

    })

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        console.log("loading posts")
        console.log("Curret page in  useEffect : "+currentPage)
        changePage(currentPage)

    }, [currentPage])
// 2nd call for infinite scroll

    const changePage = (pageNumber = 0, pageSize = 5) => {
        console.log("pageNumber in  useEffect : "+pageNumber +" and pageSize = "+pageSize)
        if (pageNumber > postContent.pageNumber && postContent.lastPage) {
            return
        }
        if (pageNumber < postContent.pageNumber && postContent.pageNumber == 0) {
            return
        }
        loadAllPosts(pageNumber, pageSize).then(data => {
            setPostContent({
                // Concatinent the pageContent with new data -> new data with existing data
                content: [...postContent.content, ...data.content],
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                pageSize: data.pageSize,
                lastPage: data.lastPage,
                pageNumber: data.pageNumber
            })
            // window.scroll(0,0);
            console.log(data);

        }).catch(error => {
            toast.error("Error in loading posts")

        })
    }


    
    //going to delete post
    function deletePost(post) {
        console.log(post)

        deletePostService(post.postId).then(res => {
            console.log(res)
            toast.success("post is deleled..")

            let newPostContents = postContent.content.filter(p => p.postId != post.postId)
            setPostContent({ ...postContent, content: newPostContents })

        })
            .catch(error => {
                console.log(error)
                toast.error("error in deleting post")
            })
    }


    const changePageInfinite = () => {
        console.log("page chagned")
        setCurrentPage(currentPage + 1)
        // 1st call here 
    }

    return (
        <Container className="container-fluid">
            <Row>
                <Col md={{
                    size: 12,
                    
                }}>
                    {/* ? When there is null is the variable  */}
                    <h1> Blogs Count : ({postContent?.totalPages})</h1>

                    

                    {/* <Container className='mt-3'>
                        <Pagination size='lg'>
                            <PaginationItem onClick={() => changePage(postContent.pageNumber - 1)} disabled={postContent.pageNumber == 0}>
                                <PaginationLink previous>
                                    Previous
                                </PaginationLink>
                            </PaginationItem>
                            {
                                [...Array(postContent.totalPages)].map((item, index) => (
                                    <PaginationItem onClick={() => changePage(index)} active={index == postContent.pageNumber} key={index}>
                                        <PaginationLink>
                                            {index + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))
                            }
                            <PaginationItem onClick={() => changePage(postContent.pageNumber + 1)} disabled={postContent.lastPage}>
                                <PaginationLink next>
                                    Next
                                </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </Container> */}


                    <InfiniteScroll
                    dataLength={postContent.content.length}
                    next={changePageInfinite}
                    hasMore={!postContent.lastPage}
                    loader={<h4>Loading...</h4>}
                    >
                    {
                        postContent?.content?.map((post) =>
                        (

                            // <Post post={post} key={post.postId} deletePost={post} />
                            <Post post={post} key={post.postId}  />
                        ))
                    }
                    </InfiniteScroll>

                </Col>

            </Row>

        </Container >
    )
}

export default NewFeed;