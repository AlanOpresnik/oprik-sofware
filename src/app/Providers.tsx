'use client'
import { SessionProvider } from 'next-auth/react'
import { ViewTransitions } from 'next-view-transitions'
interface Props {
    children: React.ReactNode
}

const Providers = ({ children }: Props) => {
    return (
        <ViewTransitions>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ViewTransitions>
    )
}

export default Providers