import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { SiteViewModel } from '../src/site/site.service';

describe('SiteController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<INestApplication<App>>();
    await app.init();
  });

  it('/api/site (GET) returns the landing page view model', () => {
    return request(app.getHttpServer())
      .get('/api/site')
      .expect(200)
      .expect((res) => {
        const body = res.body as SiteViewModel;
        if (!body.title.includes('CLINITAXi')) {
          throw new Error('Expected title to contain "CLINITAXi"');
        }
        if (body.regions.length !== 8) {
          throw new Error('Expected 8 regions');
        }
      });
  });
});
