/* eslint-disable no-unused-vars */
/* eslint-disable jest/require-hook */
import { createQueue } from 'kue';

const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account',
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account',
  },
];

const queue = createQueue();

jobs.forEach((job) => {
  const curJob = queue.create('push_notification_code_2', job).save((err) => {
    if (!err) {
      console.log(`Notification job created: ${curJob.id}`);
    }
  });
  curJob.on('complete', (result) => {
    console.log(`Notification job ${curJob.id} completed`);
  }).on('failed', (errMsg) => {
    console.log(`Notification job ${curJob.id} failed: ${errMsg}`);
  }).on('progress', (progress, data) => {
    console.log(`Notification job ${curJob.id} ${progress}% complete`);
  });
});
