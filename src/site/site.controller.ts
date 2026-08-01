import { Controller, Get } from '@nestjs/common';
import { SiteService } from './site.service';
import type { SiteViewModel } from './site.service';

@Controller('api/site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get()
  getHome(): SiteViewModel {
    return this.siteService.getHomeViewModel();
  }
}
