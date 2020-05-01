function smartTextSnippet() {
  
  var _options = { 
    len: 100,
    breakChars: [' ', '\n', '\r\n', '"', '<'],
    stopChars: ['.', '!', '?']
  }

  // Dependency: lodash
  function getOpts(options) {
    return _.assign({}, _options, options || {}); 
  }

  function getSnippet(text, startPos, options) {
    var buffer = [],
      index = startPos;

    if(!text || text.length <= options.length) {
      return text;
    }

    if(options.len >= text.length - index) {
      return text.substring(index, text.length);
    }

    for(;index < text.length; index++) {
      buffer.push(text[index]);
      if(buffer.length > options.len && 
        ~options.stopChars.indexOf(text[index - 1]) &&  
        ~options.breakChars.indexOf(text[index])) {

          buffer.pop();
          if(options.appendToEnd) {
            buffer.push(options.appendToEnd);
          }
          break;
        } 
    }
    
    return buffer.join('');
  
  }
    
  function snip(text, options) {
    return getSnippet(text, 0, getOpts(options));
  }

  function chunk(text, options) {
    var chunks = [],
      index = 0,
      chunk = '',
      options = getOpts(options);

    while(index < text.length) {
      chunk = getSnippet(text, index,  options);
      index = index + chunk.length + 1;
      chunks.push(chunk);
    }

    return chunks;
  }

  return {
    snip: snip,
    chunk: chunk
  };
}

