import { Dispatch, SetStateAction } from 'React'
export interface IAuthContext {
  /**
   * @param {1} auth true
   */
  authState: 0 | 1 | 2
  setAuthState: Dispatch<SetStateAction<0 | 1 | 2>>
}

export interface ILoadingContext {
  loadingState: boolean
  setLoadingState: Dispatch<SetStateAction<boolean>>
}
