import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [DbModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
