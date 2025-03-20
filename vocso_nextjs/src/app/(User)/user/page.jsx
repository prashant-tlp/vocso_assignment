import { getSession } from "@auth0/nextjs-auth0";
import Profile from "@/component/profile";

export default async function Page() {
  const session = await getSession();

  return (
    <div>
        <Profile idToken={session.idToken} />
    </div>
  )
}
