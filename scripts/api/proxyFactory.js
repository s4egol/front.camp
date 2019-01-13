import RequestFactory from './factory.js';

const factoryProxy = new Proxy(RequestFactory, 
    { construct: function(Target, argumentsList) {
        console.log(`Method: ${argumentsList[0].method}, Url: ${argumentsList[0].url}`);
        return new Target(argumentsList[0]);
    }});

export default factoryProxy;