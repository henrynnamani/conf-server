import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Category } from "src/common/category.enum";

// confession.schema.ts
@Schema({ timestamps: true })
export class Confession {

  @Prop({ required: true })
  content: string;

  @Prop({ required: true, enum: Category })
  category: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ default: 0 }) fire: number;
  @Prop({ default: 0 }) skull: number;
  @Prop({ default: 0 }) cry: number;
  @Prop({ default: 0 }) eyes: number;
  @Prop({ default: 0 }) heart: number;
  @Prop({ default: 0 }) mindblown: number;
}

export const ConfessionSchema = SchemaFactory.createForClass(Confession);