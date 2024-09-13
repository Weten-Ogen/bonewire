import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <>
          
          {children}
      </>
    </ClerkProvider>
  )
}