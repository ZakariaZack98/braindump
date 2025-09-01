import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/posts/postSlice';

const Blog = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  useEffect(() => console.log(posts), [posts])

  if (posts.isLoading) return <p>Posts are laoding</p>
  
  if (posts.isError) return <p>{`Error fetching posts, ${posts.error}`}</p>

  return (
    <div className='flex flex-wrap gap-5'>
      {
        posts.data?.map(post => {
          return <div className="max-w-1/4">
            <h3 className='text-2xl'>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        })
      }
    </div>
  )
}

export default Blog