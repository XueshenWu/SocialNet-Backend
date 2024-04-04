import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/api/getProfile', () => {
    return request(app.getHttpServer())
      .post('/api/getProfile')
      .send({userId: '1a'})
      .expect(201)
      .then((res) =>  {
        //console.log(JSON.stringify(res));
        const {data, err} =res.body;
        expect(err).toBeNull;
        expect(data).toBeNull;
      });
  });

  it('/api/getProfile', () => {
    return request(app.getHttpServer())
      .post('/api/getProfile')
      .send({userId: 'ww'})
      .expect(201)
      .then((res) =>  {
        const {data, err} =res.body;
        expect(err).toBeNull;
        expect(data).toBeNull;
      });
  });

  it('/api/updateProfile', () => {
    return request(app.getHttpServer())
      .post('/api/getProfile')
      .send({userId: '1a'})
      .expect(201)
      .then((res) =>  {
        const {data, err} =res.body;
        expect(data).toBeNull;
        expect(err).toBeNull;
      });
  });

  it('/getProfileByEmail', () => {
    return request(app.getHttpServer())
      .post('/api/getProfileByEmail')
      .send({email: 'u1@gmail.com'})
      .expect(201)
      .then((res) =>  {
        const {data, err} =res.body;
        expect(data).toBeNull;
        expect(err).toBeNull;
      });
  });
});
