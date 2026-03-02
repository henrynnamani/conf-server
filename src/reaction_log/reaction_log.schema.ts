import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class ReactionLog {

  @Prop({ required: true })
  confessionId: string;

  @Prop({ required: true })
  deviceToken: string;

  @Prop({ required: true })
  reactionType: string;
}

export const ReactionLogSchema = SchemaFactory.createForClass(ReactionLog);

ReactionLogSchema.index(
  { confessionId: 1, deviceToken: 1, reactionType: 1 },
  { unique: true }
);