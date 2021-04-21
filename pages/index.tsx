import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'

import { createClient } from 'contentful'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'

import Carousal from '../Components/Carousal'
import Meta from '../Components/Meta'
import dbconnect from '../utils/dbConnect'
import BlogElement, { IBlogElement } from '../Components/BlogElement'

interface IIndex {
  Blogs: IBlogElement['blog'][]
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type: 'blog' })
  return { props: { Blogs: res.items } }
}

const index: FC<IIndex> = ({ Blogs }) => {
  return (
    <div className=''>
      <Meta title='BLOG | HOMEPAGE' />
      <Carousal />
      {!!Blogs && Blogs.map((b) => <BlogElement key={1233} blog={b} />)}
    </div>
  )
}

export default index
