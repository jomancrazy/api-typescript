import "dotenv/config";
import { connect } from "mongoose";

const NODE_ENV = process.env.NODE_ENV;

async function dbConnect(): Promise<void> {
    const DB_URi = <string> process.env.DB_URI;
    await connect(DB_URi);
}

export default dbConnect;