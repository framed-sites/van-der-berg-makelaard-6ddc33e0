import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  console.warn('[db] DATABASE_URL not set — database features will be unavailable')
}

// Create a real client when DATABASE_URL is available, otherwise a lazy
// proxy that throws only when an actual query is attempted.  This lets
// the app start and render pages even without a database.
const sql: postgres.Sql = connectionString
  ? postgres(connectionString, {
      max: 10,
      idle_timeout: 20,
      connect_timeout: 10,
    })
  : new Proxy({} as postgres.Sql, {
      get(_target, prop) {
        if (prop === 'then' || prop === Symbol.toPrimitive || prop === Symbol.toStringTag) return undefined
        return () => {
          throw new Error('DATABASE_URL is not configured — cannot run queries')
        }
      },
      apply() {
        throw new Error('DATABASE_URL is not configured — cannot run queries')
      },
    }) as unknown as postgres.Sql

export default sql
