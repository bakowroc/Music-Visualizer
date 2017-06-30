const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const expect = chai.expect

chai.use(chaiHttp);

const routes = [
    '/',
    '/api/tracks'
];

describe('Routes testing:', ()=>{

    routes.map((route)=>{

        describe('Testing ' + route, ()=>{
            it('should return 200', (done)=>{
                chai.request(server)
                    .get(route)
                    .end((err, res)=>{
                        expect(res).to.have.status(200);
                        done();
                    });
            });
        });
    });
});
