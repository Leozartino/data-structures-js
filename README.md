# Data Structures
🛢 Codes containing implementation of data structures in Typescript.

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![made-with-typescript](https://img.shields.io/badge/Made%20with-Typescript-1f425f.svg)](https://www.typescriptlang.org/)
## Installation

With yarn: run the following command in your project clone

```sh
yarn 
```

With npm:

```sh
npm install
```

## Usage example

The classes of the algorithms have already been instantiated in the file src/algotithms/index.js. You can change this implementation if you want.

```typescript
import {InstantiatedStack, InstantiatedQueue, InstantiatedDeck} from './algorithms/index';

InstantiatedStack.push(5,6,7,8,9);

console.log(InstantiatedStack.showStack()); // [5,6,7,8,9]
InstantiatedStack.pop(); // 9
console.log(InstantiatedStack.showStack()); // [5,6,7,8]


InstantiatedQueue.enqueue(12);
InstantiatedQueue.enqueue(55);
InstantiatedQueue.enqueue(9);

console.log(InstantiatedQueue.showQueue()); // [12, 55, 9]
InstantiatedQueue.dequeue(); // 12
console.log(InstantiatedQueue.showQueue()); // [55, 9]


InstantiatedDeck.addBack(6);
InstantiatedDeck.addFront(3);

console.log(InstantiatedDeck.showDeck()); // [3, 6]
```

With yarn:
```sh
yarn start
```
Wiht npm:
```sh
npm run start
```

## Meta

Leonardo Oliveira – [@leozartino](https://twitter.com/leozartino) – leozartino@gmail.com

Distributed under the MIT license. See [MIT](https://choosealicense.com/licenses/mit/) for more information.


## Contributing

Feel free to contribute by adding other data structure algorithms using typescript. Add the files in the folder src/algorithms.

1. Fork it (<https://github.com/Leozartino/data-structures-ts/fork>)
2. Create your feature branch (`git checkout -b feature/newFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/newFeature`)
5. Create a new Pull Request

## Auhors

- **Leonardo de Andrade Oliveira (leozartino)** - _Javascript Developer_
<p align="center">
  Made with 💜
</p>
