import { signIn } from "@/auth"

function AuthRegister() {
  return (
    <div className="pt-20">
      register
      <form
        action={async () => {
          'use server'
          await signIn('credentials', {})
        }}
      >
        Sign in
      </form>
    </div>
  )
}

export default AuthRegister
