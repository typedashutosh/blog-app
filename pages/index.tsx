import { createClient } from 'contentful'
import { GetStaticProps } from 'next'
import { FC, ReactElement } from 'react'

import { Container, makeStyles } from '@material-ui/core'

import BlogCard from '../Components/BlogCard'
import { IBlogCard } from '../Components/BlogCard'
import * as Carousel from '../Components/Carousel'

interface Iindex {
  Blogs: IBlogCard['blog'][]
}
export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type: 'blog' })
  return { props: { Blogs: res.items } }
}

const useStyles = makeStyles({
  root: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  main: {
    margin: 'auto'
  }
})
const index: FC<Iindex> = (): ReactElement => {
  const classes = useStyles()
  return (
    <Container>
      <Carousel.Skeleton />
    </Container>
  )
}

export default index
