
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt';
// This function can be marked `async` if using `await` inside

export default NextAuth({
    secret: process.env.NEXTAUTH_SERECT,

})

export async function middleware(request) {
    const session = await getToken({ request, secret: process.env.NEXTAUTH_SERECT });
    console.log('session in middleware: ', session)
    // return NextResponse.redirect(request.url)
}
