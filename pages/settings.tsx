import { FC, ReactElement, useContext, useEffect } from 'react'

import { ILoadingContext } from '../provider'
import { loadingContext } from '../provider/context'

interface Isettings {}

const settings: FC<Isettings> = (): ReactElement => {
  const { setLoadingState } = useContext(loadingContext) as ILoadingContext

  useEffect(() => {
    setLoadingState(false)
  }, [])

  return <div>new settings what?</div>
}

export default settings
