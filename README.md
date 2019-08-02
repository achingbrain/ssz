# ssz
[![Build Status](https://travis-ci.com/ChainSafe/ssz-js.svg?branch=master)](https://travis-ci.com/ChainSafe/ssz-js)

Simple Serialize (SSZ)

## Install

`npm install @chainsafe/ssz`

## Examples

#### [Serialize](https://chainsafe.github.io/ssz-js/modules/ssz.html#serialize)

#### [Deserialize](https://chainsafe.github.io/ssz-js/modules/ssz.html#deserialize)

#### [Hash Tree Root](https://chainsafe.github.io/ssz-js/modules/ssz.html#hashtreeroot)

#### [Signing Root](https://chainsafe.github.io/ssz-js/modules/ssz.html#signingroot)

#### [Equals](https://chainsafe.github.io/ssz-js/modules/ssz.html#equals)

#### [Clone](https://chainsafe.github.io/ssz-js/modules/ssz.html#clone)

#### [Assert Valid Value](https://chainsafe.github.io/ssz-js/modules/ssz.html#assertvalidvalue)

## API

See our [autogenerated API docs](https://chainsafe.github.io/ssz-js/modules/ssz.html)

## Usage

In order to properly serialize/deserialize/hash values, we need both the value and the "type" of the value.

### Types

The simple serialization spec operates over a few specific types.
Types are either specified in a simplified form (eg: `"uint32"`) or an extended form
(eg: `{type: Type.uint, byteLength: 4, offset: 0, useNumber: false}`). In most cases, the simplified form suffices.

#### Uint
A uint serialization value may be either a js `number` or a `BN` from [bn.js](https://github.com/indutny/bn.js).
A uint type is specified by either `"uintN"` or `"numberN"`, where N is the number of bits to serialize.
`uintN` > 48 bits is deserialized to a `BN` else deserialized to a `number`.
Every `numberN` is deserialized to a number.

#### Boolean
A boolean serialization value must be either `true` or `false`. Anything other input will throw an `Error`.
The boolean type is specified as `"bool"`.

#### Vector
A "vector" according to the spec is a fixed-length list with every element of the same type.
A vector serialization value may be either an `Array` or `Buffer`.
Vector types are specified as either `"bytesN"` or `[elementType, vectorlength]`
`bytesN` is deserialized to `Buffer`.
`[elementType, vectorLength]` is deserialized to `Array<elementType>` unless elementType is `byte`, when the value is deserialized to `Buffer`.

#### List
A "list" according to the spec is a list of unspecified length with every element of the same type.
A list serialization value may be either an `Array` or `Buffer`.
Tuple types are specified as either `"bytes"` or `[elementType]`
`bytes` is deserialized to `Buffer`.
`[elementType]` is deserialized to `Array<elementType>` unless elementType is `byte`, when the value is deserialized to `Buffer`.

#### Container
A "container" according to the spec is a collection of values where the type of each element may differ.
A container serialization value must be an `Object`.
The container serialization type must be an `Object`, with a string `name`, and a `fields` value of `Array<[fieldName, fieldType]>.

#### Extended form

See `FullSSZType` in `src/types.ts` for more information.

### License

Apache 2.0
