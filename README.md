# Novett API Usage


Novett is an API for connecting to MySQL directly from Javascript Applications.

##AngularJS(1) code snippet

```js

    post : function(postData) {		
				return $http({
					 method : 'POST', 
					 url : 'http://novett.herokuapp.com/postQuery', 
					 data: $.param(postData), 
					 headers:{'Content-Type': 'application/x-www-form-urlencoded'}
				})}
});
```

##JQuery AJAX code snippet

```js
$db_host = 'www.vanizon.com';
$db_portnumber = 3306;
$db_name = 'vanizonc_dbase';
$db_username = 'vanizonc_user';
$db_password = '^Zuw2_o]J}x+';
$db_query_statement= 'SELECT * FROM users';

$getData= 'db_portnumber='+$db_portnumber+'&db_name='
+$db_name +'&db_host='+$db_host
+'&db_username='+$db_username+'&db_query_statement='
+$db_query_statement+'&db_password='+$db_password;

$.getJSON("http://novett.herokuapp.com/getQuery?"+$getData, function(response){ 
        console.log(response);
});
```
## Features
 * connects with all MySQL servers.
 * Simple, chainable, unambiguous API.
 * Parsing and formatting for common and custom formats.
 * Supports all MySQL query syntaxes.

## Download/install

[Download/install instructions](https://github.com/omoniyi289/JS-to-MySQL-API/archive/master.zip)

## Resources

* [Demo Download](https://github.com/omoniyi289/JS-to-MySQL-API/archive/master.zip)
* [General documentation][doc-url]
* [API Host on](http://novett.herokuapp.com)
* [AngularJS Library](https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js)
* [JQuery Library](https://moment.github.io/luxon/docs/manual/faq/moment.html)
* [Why does Luxon st?](https://moment.github.io/luxon/docs/manual/faq/why.html)


    


