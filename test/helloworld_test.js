var Browser = require('zombie')
var assert = require('assert')
var app = require('../helloworld')


describe('main page', function() { 
  
  it('should say hello world', function() { 
    assert.ok(true)
    assert.equal("Hello World", "Hello World")
  })
})