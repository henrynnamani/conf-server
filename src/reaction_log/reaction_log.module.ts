import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReactionLogSchema } from './reaction_log.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'ReactionLog', schema: ReactionLogSchema }
        ])
    ]
})
export class ReactionLogModule {}
