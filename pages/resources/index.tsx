import Meta from '../../Components/Meta'
import { createClient } from 'contentful'
import { FC } from 'react'

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type: 'Blog' })
  return { props: { Blogs: res.items } }
}

const allBlogs: FC = (props) => {
  console.log(props)
  return (
    <div>
      <Meta title='All Blogs' />
      this is home page
    </div>
  )
}

export default allBlogs
