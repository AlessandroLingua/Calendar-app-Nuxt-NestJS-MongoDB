import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.model';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
    constructor(@InjectModel('Event') private readonly eventModel: Model<Event>) {}

    async create(createEventDto: CreateEventDto): Promise<Event> {
        const createdEvent = new this.eventModel(createEventDto);
        return await createdEvent.save();
    }

    async findAll(): Promise<Event[]> {
        return await this.eventModel.find().exec();
    }
}
