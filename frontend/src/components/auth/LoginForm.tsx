"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { InputField } from "./InputField"

import {
    loginSchema,
    LoginSchema
} from "@/components/schemas/login-schema"

export function LoginForm(){
    const{
        register,
        handleSubmit,
        formState: { 
            errors,
            isSubmitting
         }
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    async function onSubmit(data:LoginSchema){
        console.log(data)
    }

    return(
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-md"
        >
            <h1 className="text-3x1 font-bold">Entrar</h1>
            
            <InputField 
                label="Email"
                type="email"
                placeholder="Digite seu email"
                error={errors.email?.message}
                {...register("email")}
            />
            <InputField
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                error={errors.password?.message}
                {...register("password")}
            />

            <button
                disabled={isSubmitting}
                className={`
                    bg-blue-600
                    text-white
                    p-3
                    rounded-lg
                    hover:bg-blue-700
                    disabled:opacity-50
                `}
            >
                {isSubmitting
                    ? "Entrando..."
                    : "Entrar"
                }

            </button>
        </form>
    )
}