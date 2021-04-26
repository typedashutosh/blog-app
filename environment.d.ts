declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET: string
      JWT_SECRET: string
      MONGODB_URI: string
      CONTENTFUL_SPACE_ID: string
      CONTENTFUL_ACCESS_KEY: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
