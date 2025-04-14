# Neobytes Message Verification and Signing for Neobytescore


[![NPM Package](https://img.shields.io/npm/v/neobytescore-message.svg?style=flat-square)](https://www.npmjs.org/package/neobytescore-message)

neobytescore-message adds support for verifying and signing neobytes messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main neobytes repo](https://github.com/neobytes-project/neobytes) for more information.

## Getting Started

```sh
npm install neobytescore-message
```

```sh
bower install neobytescore-message
```

To sign a message:

```javascript
var bitcore = require('neobytescore-lib');
var Message = require('neobytescore-message');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/neobytes-project/neobytes/blob/master/CONTRIBUTING.md) on the main neobytes repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/neobytes-project/neobytes/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

