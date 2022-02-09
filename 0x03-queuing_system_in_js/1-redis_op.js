/* eslint-disable jest/require-hook */
// starts a redis server

import { createClient, print } from 'redis';

const client = createClient();

// eslint-disable-next-line jest/require-hook
client.on('connect', () => console.log('Redis client connected to the server'));
// eslint-disable-next-line jest/require-hook
client.on('error', (err) => console.error(`Redis client not connected to the server: ${err}`));

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
