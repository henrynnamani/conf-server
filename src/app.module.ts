import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfessionModule } from './confession/confession.module';
import { ReactionLogModule } from './reaction_log/reaction_log.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://graey:moOfff6PtqRNSuqr@cluster0.eh52mqv.mongodb.net/?appName=Cluster0'
    ),
    ConfessionModule,
    ReactionLogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
