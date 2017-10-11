var add = require('./static/lib/test/add.js');
var expect = require('chai').expect;

describe('加法函数测试',()=>{
	it('1加1应该等于2',()=>{
		expect(add(1,1)).to.be.equal(2)
	})
	it('1加-1应该等于0',()=>{
		expect(add(1,-1)).to.be.equal(0)
	})
})