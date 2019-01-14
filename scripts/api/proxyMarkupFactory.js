import MarkupFactory from './markupFactory.js';

const factoryProxy = new Proxy(MarkupFactory, 
    { construct: function(Target, argumentsList) {
        console.log(`Generating markup with type: ${argumentsList[0].typeEntity}`);
        return new Target(argumentsList[0]);
    }});

export default factoryProxy;