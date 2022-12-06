import React from 'react'
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';

export default function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(params.id)
      setComments(response.data)
  })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Вы открыли страницу поста #{params.id}</h1>
        {isLoading
        ? <Loader/>
        : <div style={{fontSize: '22px', color: 'white', textAlign: 'center'}}>{post.id}. {post.title}</div>
        }
        <h1 style={{textAlign: 'center'}}>Каменты:</h1>
        {isComLoading
        ? <Loader/>
        : <div>
          {comments.map(comm => 
            
            <div style={{margin: '20px 15px', color: 'white'}}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
            </div>
          )}
        </div>
        }
    </div>
  )
}
