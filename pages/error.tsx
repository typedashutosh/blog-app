import { FC, useEffect, useContext } from 'react'
import { ILoadingContext } from '../provider'
import { loadingContext } from '../provider/context'

interface Ierror {}

const error: FC<Ierror> = (): JSX.Element => {
	const {setLoadingState}= useContext(loadingContext)as ILoadingContext
	useEffect(() => {
		setLoadingState(false)
	}, [])

	return <div>THIS IS ERROR PAGE</div>
}

export default error
