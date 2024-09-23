import SectionHero from "./_sections/Hero"
import SectionServices from "./_sections/Services"
import SectionFooterCTA from "./_sections/FooterCTA"
import SectionFAQ from "./_sections/FAQ"
import { authLogin, getUserProfile } from "@/services/apis/requests/auth"
import { useQuery } from "@tanstack/react-query"
import { signIn } from "@/auth"

function Home() {

  // authLogin()

  // const propertiesQuery = useQuery({
  //   queryKey: ['test'],
  //   queryFn: async () => await authLogin("")
  // })

  // console.log(propertiesQuery.data)

  // const formData = {}

  // const test = useQuery({
  //   queryKey: ['test'],
  //   queryFn: async () => await getUserProfile()
  // })

  // console.log(test.data)
  return (
    <main>
      {/* <form
      className="pt-[400px] z-50 relative"
        action={async (formData) => {
          'use server'
          await signIn('credentials', formData)
        }}
      >
        <label>
          Email
          <input readOnly name="identifier" type="email" value="ivanferrera@gmail.com" />
        </label>
        <label>
          Password
          <input readOnly name="pwd" type="password" value="abc123" />
        </label>
        <button>Sign In</button>
      </form> */}
      <SectionHero />
      <SectionServices />
      <SectionFAQ />
      <SectionFooterCTA />
    </main>
  )
}

export default Home
