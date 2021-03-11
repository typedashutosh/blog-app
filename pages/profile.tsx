import BlogElement, { blogElementParamsType } from '../Components/BlogElement'
import Meta from '../Components/Meta'
import { FC } from 'react'
import useSWR from 'swr'
import { store } from '../store'
import Router from 'next/router'

const my_blogs: FC = () => {
  const { userInfoState } = store.getState()
  const { data, error } = useSWR('api/resources/fetch-blogs')
  const blogs: blogElementParamsType[] = data

  //--- Setting Authenticated state

  const isServer = () => typeof window === 'undefined'
  if (!isServer()) {
    if (!userInfoState.authorised) {
      Router.push('/login?referer=profile', '/login')
    }
  }

  if (blogs && typeof userInfoState.username === 'string') {
    blogs.map((blog) => (blog.author = userInfoState.username ? userInfoState.username : ''))
  }

  return (
    <div className=''>
      {!userInfoState.authorised ? null : (
        <>
          <Meta title={`${userInfoState.username !== undefined ? userInfoState.username + ' | ' : ''}Profile`} />
          {blogs && blogs.map((blog) => <BlogElement key={blog._id} {...blog} />)}
          {!blogs && <div> No blogs so far...</div>}
        </>
      )}
    </div>
  )
}

export default my_blogs
