import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Confession } from './confession.schema';
import { Model } from 'mongoose';
import { ReactionLog } from 'src/reaction_log/reaction_log.schema';
import { Category } from 'src/common/category.enum';

@Injectable()
export class ConfessionService {
    constructor(
        @InjectModel(Confession.name)
        private confessionModel: Model<Confession>,
        @InjectModel(ReactionLog.name)
        private reactionLogModel: Model<ReactionLog>,
    ) {

    }

    async create(content: string, category: string): Promise<Confession> {
        return this.confessionModel.create({ content, category });
    }

    async findAll(): Promise<Confession[]> {
        return this.confessionModel.find().sort({ createdAt: -1 });
    }

    async react(id: string, reactionType: string, deviceToken: string): Promise<Confession | null> {
        try {
            await this.reactionLogModel.create({
                confessionId: id,
                deviceToken,
                reactionType,
            });
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('You have already reacted');
            }
            throw error;
        }

        return this.confessionModel.findByIdAndUpdate(
            id,
            { $inc: { [reactionType]: 1 } },
            { new: true }
        );
    }
}
