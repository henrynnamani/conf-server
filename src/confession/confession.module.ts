import { Module } from '@nestjs/common';
import { ConfessionController } from './confession.controller';
import { ConfessionService } from './confession.service';
import { ConfessionSchema } from './confession.schema';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ReactionLogSchema } from 'src/reaction_log/reaction_log.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Confession', schema: ConfessionSchema }, { name: 'ReactionLog', schema: ReactionLogSchema }]), ],
  controllers: [ConfessionController],
  providers: [ConfessionService]
})
export class ConfessionModule {}
