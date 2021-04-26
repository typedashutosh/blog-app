import { Dispatch, SetStateAction } from 'React'
export interface IAuthContext {
  authState: false | true | 'loading'
  setAuthState: Dispatch<SetStateAction<false | true | 'loading'>>
}

/**
 * * 2 -> loading
 * * 1 -> true
 * * 0 -> false
 */
export interface ILoadingContext {
  loadingState: boolean
  setLoadingState: Dispatch<SetStateAction<boolean>>
}
