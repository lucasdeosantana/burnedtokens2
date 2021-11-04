import { MongoClient, Collection } from 'mongodb'
// Connection URL
const url = 'mongodb+srv://n2n5PmY8lfe5HtMW:7QrtXPeynPhbcIqs@cluster0.ghwkt.mongodb.net/burnedcoin?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'burnedcoin';

export async function getConnection<T>(collection:string):Promise<Collection<T>> {
  // Use connect method to connect to the server
  await client.connect()
  const db = client.db(dbName)
  return db.collection<T>(collection)
}

