import { Module } from '@nestjs/common';
import { SiteModule } from './site/site.module';

@Module({
  imports: [SiteModule],
})
export class AppModule {}
