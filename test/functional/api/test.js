var supertest = require("supertest");
//var should = require("should");
var chai = require('chai');
var should = chai.should();

var server = supertest.agent("http://localhost:3000/api/v1");

describe("Get all Sky Boxes",function(){

  it("should respond OK",function(done){

    server
    .get("/skyboxes")
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      
      res.status.should.equal(200);
      
      done();
    });
  });

  it("should return three entries", function(done){
    server.get("/skyboxes")
    .expect("Content-type",/json/)

    .end(function(err,res){
   
      res.status.should.equal(200);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body[0].should.have.property('name');
      res.body[1].should.have.property('name');
      res.body[2].should.have.property('name');
      res.body[0].name.should.equals('bedroom 1');
      res.body[1].name.should.equals('bedroom 2');
      res.body[2].name.should.equals('lounge');


      done();
    }); 
  });

});