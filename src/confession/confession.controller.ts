import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ConfessionService } from './confession.service';
import { Category } from 'src/common/category.enum';

@Controller('confessions')
export class ConfessionController {
    constructor(private readonly confessionService: ConfessionService) { }

    @Post()
    create(@Body() body: { content: string; category: string }) {
        return this.confessionService.create(body.content, body.category);
    }

    @Get()
    findAll(@Query('category') category?: string) {
        return this.confessionService.findAll();
    }

    @Patch(':id/react')
    react(@Param('id') id: string, @Body() body: { reactionType: string; deviceToken: string }) {
        return this.confessionService.react(id, body.reactionType, body.deviceToken);
    }
}
