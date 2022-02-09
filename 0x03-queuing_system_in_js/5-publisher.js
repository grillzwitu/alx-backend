/* eslint-disable jest/require-hook */
// starts a redis server

import { createClient } from 'redis';

const pubClient = createClient();

// eslint-disable-next-line jest/require-hook
pubClient.on('connect', () => console.log('Redis client connected to the server'));
// eslint-disable-next-line jest/require-hook
pubClient.on('error', (err) => console.error(`Redis client not connected to the server: ${err}`));

// function to publish message to channel
function publishMessage(message, time) {
  // message (str): message to be published,
  // time (int): time in milliseconds before publishing message
  setTimeout(() => {
    console.log(`About to send ${message}`);
    pubClient.publish('holberton school channel', message);
  }, time);
}

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
