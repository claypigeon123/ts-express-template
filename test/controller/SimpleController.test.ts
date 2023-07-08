import { expect } from 'chai';
import request from 'supertest';
import app from '../../src';

describe('## Hello Controller Tests', () => {

    describe('# Sample Suite', () => {

        it('should return hello world', async () => {
            const res = await request(app)
                .get('/')
                .expect(200);

            expect(res.body).to.have.property('message');
            expect(res.body.message).to.equal('hello');
        });

    });

})