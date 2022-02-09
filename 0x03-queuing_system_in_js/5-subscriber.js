/* eslint-disable jest/require-hook */
// starts a redis server

import { createClient } from 'redis';

const client = createClient();

// eslint-disable-next-line jest/require-hook
client.on('connect', () => console.log('Redis client connected to the server'));
// eslint-disable-next-line jest/require-hook
client.on('error', (err) => console.error(`Redis client not connected to the server: ${err}`));

// subscribe to holberton school channel
client.subscribe('holberton school channel');

// listen for messages on the channel and log messages when received
client.on('message', (channel, msg) => {
  console.log(`${msg}`);
  if (msg === 'KILL_SERVER') {
    // unsubscribe from channel and end the server connection
    client.unsubscribe('holberton school channel');
    client.end(true);
  }
});
