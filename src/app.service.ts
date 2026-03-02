import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';

@Injectable()
export class AppService {
  @Cron(CronExpression.EVERY_MINUTE)
  async pingServer() {
    try {
      await axios.get(`${process.env.APP_URL}/health`);
      console.log('Server pinged successfully');
    } catch (err) {
      console.error('Ping failed', err.message);
    }
  }
}
