/* eslint-disable jest/require-hook */
import { createQueue } from 'kue';

const queue = createQueue();

const notification = {
  phoneNumber: '+2349075434567',
  message: 'Do not share with anyone',
};

const job = queue.create('push_notification_code', notification).save((err) => {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  }
});

job.on('complete', () => console.log('Notification job completed'));
job.on('failed', () => console.log('Notification job failed'));
