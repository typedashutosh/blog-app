import BlogElement, { IBlogElement } from '../Components/BlogElement'
import Meta from '../Components/Meta'
import useSWR from 'swr'
import Router from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession, session } from 'next-auth/client'
import { FC } from 'react'
import { Session } from 'next-auth'
interface IProfile {
  session: Session | null
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context)
    }
  }
}

const profile: FC<IProfile> = ({ session }) => {
  //--- Setting Authenticated state

  const isServer = () => typeof window === 'undefined'
  if (!isServer()) {
    if (!session) {
      Router.push('/login?referer=profile', '/login')
    }
  }

  return (
    <div className='mx-10 my2'>
      <Meta
        title={`${
          session?.user?.firstname !== undefined
            ? session?.user?.firstname + ' | '
            : ''
        }Profile`}
      />
      {!session ? null : (
        <>
          <div className='info'>
            {session?.user?.firstname !== undefined
              ? session?.user?.firstname
              : ''}
          </div>
          <div> No blogs so far...</div>
        </>
      )}
    </div>
  )
}

export default profile
