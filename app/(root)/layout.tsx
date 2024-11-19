import Provider from '@/components/provider'
import React from 'react'

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="">
        <Provider>
            {children}

        </Provider>
    </div>
  )
}

export default Layout
