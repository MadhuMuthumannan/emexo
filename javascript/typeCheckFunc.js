function typeCheck(object) {
  let handler = {
    set: (target, prop, value) => {
      propType = prop.split('_')[1];
      if (propType === 'bool' && typeof value !== boolean) {
        throw new Error(`Can't assign ${value}, boolean expected!`);
      }
      if (
        propType === 'int' &&
        typeof value == 'number' &&
        !isNaN(value) &&
        Number.isInteger(value)
      ) {
        throw new TypeError(`Can't assign ${value}, integer expected!`);
      }
      if (propType === 'string' && typeof value !== string) {
        throw new TypeError(`Can't assign ${value}, number expected!`);
      }
      if (
        propType === 'float' &&
        typeof value == 'number' &&
        !isNaN(value) &&
        !Number.isInteger(value)
      ) {
        throw new TypeError(`Can't assign ${value}, number expected!`);
      }
      target[prop] = value;
    },
  };

  let proxy = new Proxy(object, handler);
  return proxy;
}

module.exports = typeCheck;
