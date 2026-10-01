import 'dotenv/config';
import mongoose from 'mongoose';

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('ERROR: MONGODB_URI is not defined in your environment variables.');
    process.exit(1);
  }

  try {
    const startedAt = Date.now();
    await mongoose.connect(uri);
    const elapsed = Date.now() - startedAt;

    const dbName = mongoose.connection.name;
    const host = mongoose.connection.host;

    console.log(`OK: Connected to database "${dbName}" on ${host} in ${elapsed}ms`);
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('ERROR: Failed to connect to database:', err.message);
    process.exit(1);
  }
}

main();
