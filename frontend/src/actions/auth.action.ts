"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function signIn({ email, password, callbackUrl}: { email: string, password: string, callbackUrl?: string}){
    try{
        const result = await auth.api.signInEmail({
            email,
            password,
            callbackUrl: callbackUrl || "/",
        });

    } catch(err: any){
        throw new Error(err.message || "Erro ocorreu ao entrar");
    }
    revalidatePath("/");
    redirect("/");
}
