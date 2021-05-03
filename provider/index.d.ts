import { Dispatch, SetStateAction } from 'React'
export interface IAuthContext {
  authState: false | true | 'loading'
  setAuthState: Dispatch<SetStateAction<false | true | 'loading'>>
}

export interface ILoadingContext {
  loadingState: boolean
  setLoadingState: Dispatch<SetStateAction<boolean>>
}
