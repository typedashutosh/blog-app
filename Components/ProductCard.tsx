import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type TCardProps = {
  imgSrc: string
  title: string
  details: string
  anchor: string
}
export const Card: FC<TCardProps> = ({ anchor, details, title, imgSrc }: TCardProps): JSX.Element => {
  return (
    <div className='card'>
      <Image height={50} width={70} src={imgSrc} className='' />
      <div className='title text-xl font-semibold'>{title}</div>
      <div className='details'>{details}</div>
      <Link href={anchor}>
        <a className='absolute bottom-2 rounded-full px-2 py-1 bg-red-300 hover:bg-red-400 shadow-sm transition-all duration-200 hover:shadow-md text-sm cursor-pointer'>
          Buy now
        </a>
      </Link>
    </div>
  )
}

export const Skeleton: FC<{}> = (): JSX.Element => {
  return (
    <div className='animate-pulse relative card h-72 w-60 m-2 p-2 rounded-md hover:shadow-lg transiiton-all duration-200 bg-white shadow-md '>
      <div className='image h-1/2 bg-gray-200 rounded-sm'></div>
      <div className='h-4 w-1/2 bg-gray-200 my-2 rounded-sm'></div>
      <div className='details '>
        <div className='h-2 my-1.5 w-full bg-gray-200 rounded-sm'></div>
        <div className='h-2 my-1.5 w-full bg-gray-200 rounded-sm'></div>
        <div className='h-2 my-1.5 w-full bg-gray-200 rounded-sm'></div>
      </div>
      <a className='absolute bottom-3 rounded-full px-2 py-1 bg-gray-200 h-6 w-16'></a>
    </div>
  )
}
