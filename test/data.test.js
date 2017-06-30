process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const Track  = require('../app/models/track.model');
const TrackController = require('../app/controllers/track.controller');

const expect = chai.expect
chai.use(chaiHttp);

const models = [
    {
        name: 'track',
        model: Track,
        controller: TrackController,
        getData: TrackController.getTracks
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
