function walk(node) {
    if (node.nodeType === 3) {
      var words = node.data.split(' ');
      var newNodes = [];
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var midpoint = Math.floor(word.length / 2);
        var firstHalf = word.slice(0, midpoint);
        var secondHalf = word.slice(midpoint);
  
        var boldNode = document.createElement('b');
        boldNode.textContent = firstHalf;
        newNodes.push(boldNode);
  
        var textNode = document.createTextNode(secondHalf + ' ');
        newNodes.push(textNode);
      }
  
      newNodes.forEach(function(newNode) {
        node.parentNode.insertBefore(newNode, node);
      });
      node.parentNode.removeChild(node);
    } else {
      var children = Array.from(node.childNodes);
      for (var i = 0; i < children.length; i++) {
        walk(children[i]);
      }
    }
  }
  
  walk(document.body);