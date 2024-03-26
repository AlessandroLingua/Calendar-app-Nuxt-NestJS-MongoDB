import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Event {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ type: Date })
    startDateTime: Date;

    @Prop({ type: Date })
    endDateTime: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
