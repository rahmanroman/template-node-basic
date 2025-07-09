import pkg from '../package.json' with { type: 'json' }

console.log(`${pkg.name} v${pkg.version}`)
console.log(`Hello, world from ${process.env.NODE_ENV}!`)
