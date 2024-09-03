import '@/config';
import { defineConfig } from 'drizzle-kit';
 
export default defineConfig({
    schema: "./drizzle/schema.ts",
    dialect: "postgresql",
    out: "./drizzle",
    driver: "pglite",
    dbCredentials: { 
        url: process.env.POSTGRES_URL!
    
    },
    verbose: true,
    strict: true,

})