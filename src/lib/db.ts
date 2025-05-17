// lib/db.ts
// import mongoose from 'mongoose'

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjs_crud'

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable')
// }

// // ✅ Extend global type
// declare global {
//     // Only do this in a .ts file (not .d.ts)
//     var mongoose: {
//       conn: typeof mongoose | null
//       promise: Promise<typeof mongoose> | null
//     } | undefined
//   }

// // let cached = global.mongoose
// const cached = global.mongoose || (global.mongoose = { conn: null, promise: null })


// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => mongoose)
//   }

//   cached.conn = await cached.promise
//   return cached.conn
// }

// export default dbConnect



// lib/db.ts
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjs_crud'

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

// Define the interface for the cache
interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// Extend global type
declare global {
  var mongoose: MongooseCache
}

// Initialize cache if it doesn't exist
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  console.log('✅ Database connected')
  return cached.conn
}

export default dbConnect