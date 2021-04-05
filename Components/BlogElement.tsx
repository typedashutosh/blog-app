import { IBlog } from '../models/Blog.model'
import Link from 'next/link'
import { FC } from 'react'

export type blogElementParamsType = {
  title: string
  author: string
  description: string
  _id: string
  votes: number
  createdAt: string
}

const BlogElement: FC<blogElementParamsType> = ({
  title,
  description,
  author,
  _id,
  votes
}) => {
  let a: IBlog
  return (
    <div
      className='mx-8 p-2 mb-4 border-l-4 border-red-400 transition-all duration-200 hover:border-red-500'
      id={_id}
    >
      <Link href={`/resources/${_id}`}>
        <h1 className='text-4xl mb-2'>{title}</h1>
      </Link>
      <span className='p-2 pl-0 text-gray-600'>Author : {author}</span>
      <span className='ml-2 p-2 text-gray-600'>Votes: {votes}</span>
      <p className='text-justify my-2'>{description}</p>
      <Link href={`/resources/${_id}`}>
        <div className='py-2 px-4 rounded-md bg-white active:bg-gray-700 transition-all duration-200 hover:bg-black hover:text-white cursor-pointer shadow-md w-max'>
          Read full blog
        </div>
      </Link>
    </div>
  )
}

export default BlogElement
