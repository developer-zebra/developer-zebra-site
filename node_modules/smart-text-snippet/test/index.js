var smartTextSnippet = require('../dist/smart-text-snippet-node');
var expect = require('chai').expect;
var fs = require('fs');
var _ = require('lodash');

var sample1 = fs.readFileSync('./test/lorem-ipsum-1.txt', 'utf8');
var sample2 = fs.readFileSync('./test/lots-of-periods.txt', 'utf8');

describe('smartTextSnippet', function() {
  describe('snip', function () {
    it('should create a smaller snippet from a large text', function () {
    
      var res = smartTextSnippet.snip(sample1, {stopAtParagraphEnd: false});
      expect(res).to.not.be.null;
      console.log(res);
      var len = sample1.length;
      var len2 = res.length;
      expect(len2).to.be.below(len);

    });
  
    it('should create a snippet of various lengths', function () {
    
      var res = smartTextSnippet.snip(sample1, {len: 300});
      expect(res).to.not.be.null;
      console.log(res);
      var len = sample1.length;
      var len2 = res.length;
      expect(len2).to.be.below(len);

    });
   
    it('should create a snippet with multiple periods being respected', function() {
      
      var res = smartTextSnippet.snip(sample2, {len: 200});
      expect(res).to.not.be.null;
      console.log(res);
      expect(res.length).to.be.below(sample2.length);

    });
  });

  describe('chunk', function(){
    it('should create chunks of small snippets from a large string', function() {
      
      var res = smartTextSnippet.chunk(sample1);
      expect(res).to.not.be.null;
      expect(_.isArray(res)).to.be.true;
      expect(res.length !== 0).to.be.true;
      console.log(res[0].length, res[1].length);

    });
  });

});
