import BlogElement, { blogElementParamsType } from '../../Components/BlogElement'
import BlogModel from '../../models/Blog.model'
import Meta from '../../Components/Meta'
import { FC } from 'react'

export const getStaticProps = async () => {
  const result = await BlogModel.find(
    { mode: 'PUBLIC', state: 'PUBLISHED' },
    ['title', 'description', '_id', 'author', 'votes', 'createdAt'],
    {
      skip: 0,
      limit: 10,
      sort: { votes: -1 }
    }
  )
  const blogs: blogElementParamsType[] = result.map((doc) => {
    const blog = doc.toObject()
    blog._id = blog._id.toString()
    blog.createdAt = blog.createdAt.toString()
    return blog
  })

  return { props: { blogs } }
}

const allBlogs: FC<{ blogs: blogElementParamsType[] }> = ({ blogs }) => {
  return (
    <div className=''>
      <Meta title='All Blogs' />
      {blogs && blogs.map((blog) => <BlogElement key={blog._id} {...blog} />)}
    </div>
  )
}

export default allBlogs
