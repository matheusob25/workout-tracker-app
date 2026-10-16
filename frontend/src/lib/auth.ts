import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { routes } from "./config";

export const  auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseUrl: process.env.BETTER_AUTH_URL,

    database:  drizzleAdapter(db, {
        provider: "pg",
        schema: schema,
    }),

    emailAndPassword:{
        enabled: true,
        passwordPolicy: {
            minLength: 8,
            maxLength: 16,
            requireLowercase: false,
            requireUppercase: false,
            requireNumbers: true, 
            requireSpecialChars: false,   
        },
    },

    socialProviders:{
        ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET 
            ? {
                github: {
                    clientId: process.env.GITHUB_CLIENT_ID,
                    clientSecret: process.env.GITHUB_CLIENT_SECRET,
                },
            }
            : {}),
            
        ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
            ? {
                google: {
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,

                },        
            }
            : {}),    
        
    },

    pages: {
        signIn: routes.login,
        signUp: "/signup",
        error: "/error",
        verifyRequest: "/verify-request",
    },

    session: {
        maxAge: 60  * 60 * 24 * 7,
        updateAge: 60 * 60 * 24,
    },
    plugins: [nextCookies()],


});