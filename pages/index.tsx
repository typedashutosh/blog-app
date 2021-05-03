import { createClient } from 'contentful'
import { GetServerSideProps } from 'next'
import { FC, ReactElement, useContext } from 'react'

import { Container, makeStyles } from '@material-ui/core'

import BlogCard, { IBlogCard } from '../Components/BlogCard'
import Carousel from '../Components/Carousel'
import { loadingContext } from '../provider/context'
import { ILoadingContext } from '../provider'

interface Iindex {
	Blogs: IBlogCard['blog'][]
}

export const getServerSideProps: GetServerSideProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})
	const { items } = await client.getEntries({ content_type: 'blog' })
	return { props: { Blogs: items } }
}

const useStyles = makeStyles({})

const index: FC<Iindex> = ({ Blogs }): ReactElement => {
	const {setLoadingState}= useContext(loadingContext)as ILoadingContext
	const classes = useStyles()
	setLoadingState(false)

	return (
		<>
			<Carousel />
			<Container>
				{Blogs.map(blog => (
					<BlogCard key={blog.sys.id} blog={blog} />
				))}
			</Container>
		</>
	)
}

export default index
