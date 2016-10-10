var assert = require('assert');
var efs = require('../index');

describe('exist-fs', function() {

  describe('#existsSync()', function(){
    it('should return true if a path exists', function(){
      let result = efs.existsSync('./index.js');
      assert.equal(true, result);
    });
  });

  describe('#existsSync()', function(){
    it('should return false if a path does not exist', function(){
      result = efs.existsSync('thereisnothinghere!!');
      assert.equal(false, result);
    });
  });

  describe('#isDirSync()', function(){
    it('should return true if a directory exists', function(){
      let result = efs.isDirSync('./');
      assert.equal(true, result);
    });
  });

  describe('#isDirSync()', function(){
    it('should return false if a directory does not exist', function(){
      let result = efs.isDirSync('thereisnothinghere!!');
      assert.equal(false, result);
    });
  });

  describe('#isFileSync()', function(){
    it('should return true if a file exists', function(){
      let result = efs.isFileSync('./index.js');
      assert.equal(true, result);
    });
  });

  describe('#isFileSync()', function(){
    it('should return false if a file does not exist', function(){
      let result = efs.isFileSync('thereisnothinghere!!');
      assert.equal(false, result);
    });
  });
});
