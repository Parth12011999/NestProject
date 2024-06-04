import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';


export enum Category {
    ADVENTURE = 'Adventure',
    FANTASY = 'Fantasy',
    HISTORICAL = 'Historical',
    HORROR = 'Horror',
    MYSTERY = 'Mystery',
    ROMANCE = 'Romance',
    SCIENCE_FICTION = 'Science Fiction',
    THRILLER = 'Thriller',
    WESTERN = 'Western',
}


@Schema({
    timestamps: true
})
export class Book {
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    author: string;
    @Prop()
    price: number;
    @Prop()
    category: Category;
}

export const BookSchema =  SchemaFactory.createForClass(Book);