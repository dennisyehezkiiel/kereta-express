'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setServerCookie(cookieList: any[], nextPath?: string) {
  const cookieStore = await cookies();
  for (let i = 0; i < cookieList.length; i++) {
   cookieStore.set(cookieList[i]?.name, cookieList[i]?.value)
  }
  nextPath && redirect(nextPath)
}
