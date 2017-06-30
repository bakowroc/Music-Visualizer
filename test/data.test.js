process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const expect = chai.expect

chai.use(chaiHttp);

const Track  = require('../app/models/track.model');

const models = [
    {
        name: 'track',
        model: Track
    }

];


describe('Check if data is json', ()=>{
    models.map((data)=>{
        describe('Test ' + data.name + ' model',()=>{
            it('Should GET all ' + data.name + 's', (done)=>{
                done();
            });
        });
    });
});
