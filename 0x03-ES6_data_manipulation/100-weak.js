export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // retrieving the values from the weakmap and if not, setting it to 0
  let alltimesCalled = weakMap.get(endpoint) || 0;
  // incrementing the value
  alltimesCalled += 1;
  // creating a new key-value pair in the weakmap
  weakMap.set(endpoint, alltimesCalled);
  // if the endpoint is queried more than 5 times, throw an error
  if (alltimesCalled >= 5) throw new Error('Endpoint load is high');
  // return the value or number of times the api is queried
  return alltimesCalled;
}
