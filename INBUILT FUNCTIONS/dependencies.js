//npm i lodash in terminal to install lodash package
//it will be added to dependencies in package.json
const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)