import { FC, ReactElement, useContext, useEffect } from 'react'

import { ILoadingContext } from '../provider'
import { loadingContext } from '../provider/context'

interface Isaved_blogs {}

const saved_blogs: FC<Isaved_blogs> = (): ReactElement => {
  const { setLoadingState } = useContext(loadingContext) as ILoadingContext

  useEffect(() => {
    setLoadingState(false)
  }, [])

  return <div>saved_blogs</div>
}

export default saved_blogs
