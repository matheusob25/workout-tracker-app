import { propagateServerField } from "next/dist/server/lib/render-server";



const modeDataHandler = {
    login: {
        title: "Bem vindo de volta!",
        description: "Entre com sua conta para continuar.",
        submitText: "Entrar",
        submitTextLoading: "Entrando...",
    },
    register: {
        title: "Crie sua conta!",
        description: "Crie sua conta para continuar.",
        submitText: "Cadastrar",
        submitTextLoading: "Registrando...",
    }
}

export function Authform({
    className,
    mode,
    ...props
}: React.ComponentProps<"div"> & {mode: "login" | "register"}){
    
    const handleAuth = async (formData: FormData) => {
        "use server";
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const name = formData.get("name") as string;

        if(mode === "login"){
            await signIn({email, password});
        } else {
            await signUp({email, password, name});
        }
    }

    return(
        <div className={cn("flex flex-col gap-6",className)} {...props}>


        </div>
    )

}
