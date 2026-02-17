const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};


// ============================================
// DATABASE CONNECTION HELPERS - WIP
// ============================================
const MAX_RETRIES = 5;
const RETRY_DELAY = 3000;
let currentRetry = 0;

const connectWithRetry = async () => {
  while (currentRetry < MAX_RETRIES) {
    try {
      console.log(`DB connection attempt ${currentRetry + 1}/${MAX_RETRIES}...`);
      await mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      console.log('DB connected successfully');
      currentRetry = 0;
      return;
    } catch (err) {
      currentRetry++;
      console.error(`DB connection failed (attempt ${currentRetry}/${MAX_RETRIES}):`, err.message);
      if (currentRetry < MAX_RETRIES) {
        console.log(`Retrying in ${RETRY_DELAY / 1000}s...`);
        await new Promise(r => setTimeout(r, RETRY_DELAY));
      }
    }
  }
  console.error('All DB connection attempts failed. Exiting.');
  process.exit(1);
};

// Monitor connection events
mongoose.connection.on('connected', () => console.log('Mongoose connected'));
mongoose.connection.on('error', (err) => console.error('Mongoose error:', err));
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
  if (currentRetry < MAX_RETRIES) {
    console.log('Attempting reconnection...');
    connectWithRetry();
  }
});

// TODO: add connection pooling config
// TODO: add read preference for replicas
// TODO: add write concern settings
