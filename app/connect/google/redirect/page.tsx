import React from 'react'
import Spinner from '../../../components/loading/Spinner'
import NavBarServer from '../../../components/NavBarServer'
import OAuth from '../../../components/OAuth'

const OAuthPage = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      <div className="flex flex-col space-y-5 justify-center items-center min-h-[500px] bg-neutral">
        <Spinner className="text-white fill-alert text-sm w-28 h-28" />
        <OAuth />
      </div>
    </>
  )
}

export default OAuthPage
