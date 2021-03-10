import BlogElement, { blogElementParamsType } from '../Components/BlogElement'
import Meta from '../Components/Meta'
import { FC } from 'react'
import useSWR from 'swr'

const my_blogs: FC = () => {
  const { data, error } = useSWR('api/resources/fetch-blogs')
  console.log(data, error)

  const blogs: any[] = []
  return (
    <div className=''>
      <Meta title='All Blogs' />
      {blogs && blogs.map((blog) => <BlogElement key={blog._id} {...blog} />)}
    </div>
  )
}

export default my_blogs
