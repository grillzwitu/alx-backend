/* eslint-disable jest/require-hook */
// starts a redis server

import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient();

// eslint-disable-next-line jest/require-hook
client.on('connect', () => console.log('Redis client connected to the server'));
// eslint-disable-next-line jest/require-hook
client.on('error', (err) => console.error(`Redis client not connected to the server: ${err}`));

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
}

const getter = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
  const res = await getter(schoolName).catch((err) => {
    if (err) {
      console.log(err);
      throw err;
    }
  });
  console.log(res);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
