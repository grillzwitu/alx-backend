/* eslint-disable jest/require-hook */
// starts a redis server

import { createClient, print } from 'redis';

const client = createClient();

// eslint-disable-next-line jest/require-hook
client.on('connect', () => console.log('Redis client connected to the server'));
// eslint-disable-next-line jest/require-hook
client.on('error', (err) => console.error(`Redis client not connected to the server: ${err}`));

// set keys and values in HolbertonSchools
client.hset('HolbertonSchools', 'Portland', '50', print);
client.hset('HolbertonSchools', 'Seattle', '80', print);
client.hset('HolbertonSchools', 'New York', '20', print);
client.hset('HolbertonSchools', 'Bogota', '20', print);
client.hset('HolbertonSchools', 'Cali', '40', print);
client.hset('HolbertonSchools', 'Paris', '2', print);

// get all elements in HolbertonSchools
client.hgetall('HolbertonSchools', (err, res) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(res);
});
