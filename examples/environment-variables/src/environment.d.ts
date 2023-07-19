declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      readonly COMMON_VARIABLE: string
    }
  }
}

// eslint-disable-next-line nullstack/no-unused-imports
import * as Nullstack from 'nullstack'

declare module 'nullstack' {
  export interface NullstackSettings {
    publicKey: string | undefined
    disableCount?: string | undefined
  }
  export interface NullstackSecrets {
    password: string | undefined
  }
}
