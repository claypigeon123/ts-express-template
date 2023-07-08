

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string
            SERVER_PORT: number | string
            LOGGING_LEVEL: string
        }
    }
}

export {};