


export default async function AuthLayout({children}: {children: React.ReactNode}){
    
    const session = await getServerSession();
    if(session){
        redirect(routes.home);
    }
    return(
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm h-screen mt-8 md:max-w-3xl">
                {children}
            </div>
        </div>
    )
}