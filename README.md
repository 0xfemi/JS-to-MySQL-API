# Novett API Usage

[![MIT License][license-image]][license] [![Build Status][travis-image]][travis-url] [![NPM version][npm-version-image]][npm-url] [![Coverage Status][test-coverage-image]][test-coverage-url] [![Doc coverage][doc-coverage-image]][doc-url]

Novett is an API for connecting to MySQL directly from Javascript Applications.

#JQuery AJAX code snippet

```js
$db_host = 'www.vanizon.com';
$db_portnumber = 3306;
$db_name = 'vanizonc_dbase';
$db_username = 'vanizonc_user';
$db_password = '^Zuw2_o]J}x+';
$db_query_statement= 'SELECT * FROM users';

$query_statement= 'db_portnumber='+$db_portnumber+'&db_name='
+$db_name +'&db_host='+$db_host
+'&db_username='+$db_username+'&db_query_statement='
+$db_query_statement+'&db_password='+$db_password;

$.getJSON("http://novett.herokuapp.com/getQuery?"+$query_statement, function(response){ 
        console.log(response);
});
```
## Features
 * connects with all MySQL servers.
 * Immutable, chainable, unambiguous API.
 * Parsing and formatting for common and custom formats.
 * Supports all MySQL query syntaxes.

## Download/install

[Download/install instructions](https://moment.github.io/luxon/docs/manual/design/install.html)

## Documentation

* [General documentation][doc-url]
* [API docs](https://moment.github.io/luxon/docs/identifiers.html)
* [Quick tour](https://moment.github.io/luxon/docs/manual/design/tour.html)
* [For Moment users](https://moment.github.io/luxon/docs/manual/faq/moment.html)
* [Why does Luxon exist?](https://moment.github.io/luxon/docs/manual/faq/why.html)
* [A quick demo](https://moment.github.io/luxon/demo/global.html)

## Development

See [contributing](contributing.md).

![Phasers to stun][phasers-image]

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license]: license.txt

[travis-url]: http://travis-ci.org/moment/luxon
[travis-image]: https://api.travis-ci.org/moment/luxon.svg?branch=master

[npm-url]: https://npmjs.org/package/luxon
[npm-version-image]: https://badge.fury.io/js/luxon.svg

[doc-url]: https://moment.github.io/luxon/docs/
[doc-coverage-image]: https://moment.github.io/luxon/docs/badge.svg

[test-coverage-url]: https://coveralls.io/github/moment/luxon?branch=master
[test-coverage-image]: https://coveralls.io/repos/github/moment/luxon/badge.svg?branch=master

[phasers-image]: https://img.shields.io/badge/phasers-stun-brightgreen.svg

    


