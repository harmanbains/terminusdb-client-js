'use strict';
const turtleSchemaR= require("./extraFile/getSchemaTurtleResponse");
const axiosInstance = require('../lib/axiosInstance');
const expect = require('chai').expect;

//http://localhost:6363/triples/terminus/schema/main
//http://localhost:6363/triples/admin/testDB/local/commit/gfhfjkflfgorpyuiioo

describe('get a terminusDB schema', function () {

	const dbID="second_database";

	it('set terminus db',function(){
	    global.client.connectionConfig.setDB(dbID);
	    expect(global.client.connectionConfig.dbid).to.equal(dbID);
	    expect(global.client.connectionConfig.server).to.equal(global.url);

	  // console.log(JSON.stringify(global.client.connectionConfig.triplesURL('schema'), null, 4));
	    const schemaURL='http://localhost:6363/triples/admin/second_database/local/branch/master/schema/main';
	    expect(global.client.connectionConfig.triplesURL('schema')).to.equal(schemaURL);
	})


	it('get a schema of the current database', function(done){
		global.sandbox.stub(axiosInstance, "get").returns(Promise.resolve({status:200, data: turtleSchemaR}));
   		global.client.getTriples('schema','main').then((response)=>{
   			
   			expect(response).to.be.an('string');
   			
   		}).then(done, done)
	})

	it('update the schema of the current database',function(done){

          done();
	})
})