import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel("Item") private readonly itemModel:Model<Item>){}

    async findAll(): Promise<Item[]>{
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item>{
        return await this.itemModel.findOne({_id: id})
    }
}
