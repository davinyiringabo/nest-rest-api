import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}
    @Get()
    async findAll(): Promise<Item[]>{
        return this.itemsService.findAll();
    }

    @Get(":id")
    async findOne(@Param('id') id): Promise<Item>{
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto):string{

        return `Name ${createItemDto.name} Description ${createItemDto.description}`;
    }

    @Delete(":id")
    delete(@Param('id') id) {
        return `Delete ${id}`
    }

    @Put(":id")
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id) {
        return `Update ${id} - Name ${updateItemDto.name} Description ${updateItemDto.description}`;
    }
}