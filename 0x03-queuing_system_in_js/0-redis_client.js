// starts a redis server

import { createClient } from 'redis';

const client = createClient();

// eslint-disable-next-line jest/require-hook
client.on('connect', () => console.log('Redis client connected to the server'));
// eslint-disable-next-line jest/require-hook
client.on('error', (err) => console.error(`Redis client not connected to the server: ${err}`));
