import { Book } from '../service';

export class BookImpl implements Book {
    public id?: number;
    public title: string;
    public description?: string;
    public unitCost?: number;
    public isbn: string;
    public publicationDate?: Date;
    public numberOfPages?: number;
    public imageUrl?: string;
    public language?: Book.LanguageEnum;
}