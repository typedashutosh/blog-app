import { FC } from 'react'

type Terror = {}

const error: FC<Terror> = (): JSX.Element => {
  return <div>THIS IS ERROR PAGE</div>
}

export default error
