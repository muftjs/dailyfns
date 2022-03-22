### dot makes it possible to transform javascript objects using dot notation or array of strings.

Check examples directory [examples](https://github.com/muftjs/dot/tree/master/src/examples)

## Installation (for standard modern project)

```bash
yarn add @muft/dot
# or
npm install @muft/dot --save
```

## isObj
Test if variable is object or not
@Returns Boolan (TRUE | FALSE)
```js
import { isObj } from '@muft/dot'

isObj({foo: 'bar'});
//=> true

isObj([1, 2, 3]);
//=> false

isObj('foo');
//=> false
```

## isEmpty
Test if object is undefined or empty
@Returns Boolan (TRUE | FALSE)
```js
import { isEmpty } from '@muft/dot'

isEmpty({foo: 'bar'});
//=> false

isEmpty(undefined);
//=> true

isEmpty({});
//=> true
```

## getPathSegments
Convert dot notation to the array of strings
@Returns string[]
```js
import { getPathSegments } from '@muft/dot'

getPathSegments('app.name');
//=> ['app', 'name']
```

## get
Parse object values out of dot notation string if value not find the it will returns defalut value.
@Returns any
```js
import { get } from '@muft/dot'
const student = {
  name: 'Test',
  class: {
    rank: 1
  }
}

get(student, 'name');
//=> Test

get(student, 'class.rank');
//=> 1

get(student, 'class.test', 'defalut');
//=> default

get(student, 'class.test');
//=> null
```


## getArrayValue
Parse object values out of string array if value not find the it will returns defalut value.
@Returns any
```js
import { getArrayValue } from '@muft/dot'
const student = {
  name: 'Test',
  class: {
    rank: 1
  }
}

getArrayValue(student, ['name']);
//=> Test

getArrayValue(student, ['class', 'rank']);
//=> 1

getArrayValue(student, ['class', 'test'], 'defalut');
//=> default

getArrayValue(student, ['class', 'test']);
//=> null
```


## Contribute

If you would like to contribute to the project, please fork it and send us a pull request.  Please add tests
for any new features or bug fixes.

## Stay in touch

* Author - [Aman Khanakia](https://twitter.com/mrkhanakia)
* Website - [https://khanakia.com](https://khanakia.com/)

## License

This Project is [MIT licensed](LICENSE).
