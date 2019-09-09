const Greeter = require('browser-node');

exports.createPages = () => {
    var greeter = new Greeter();
    greeter.greet(); // should log "Hello from nodejs"
  }  