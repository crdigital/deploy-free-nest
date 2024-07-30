import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class BookService {

  constructor(private readonly prismaService: PrismaService) { }

  create(createBookDto: CreateBookDto) {
    return this.prismaService.book.create({
      data: createBookDto
    });
  }

  findAll() {
    return this.prismaService.book.findMany();
  }

  findOne(id: string) {
    return this.prismaService.book.findUnique({
      where: { id }
    });
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.prismaService.book.update({
      where: { id },
      data: updateBookDto
    });
  }

  remove(id: string) {
    return this.prismaService.book.delete({
      where: { id }
    });
  }
}
