# Novett API Usage


Novett is an API for connecting to MySQL Database directly from Javascript Applications. 

## Features
 * connects with all MySQL servers.
 * Simple, chainable, unambiguous API.
 * Parsing and formatting for common and custom formats.
 * Supports all MySQL query syntaxes.

## Download/install

[Download/install instructions](https://github.com/omoniyi289/JS-to-MySQL-API/archive/master.zip)


API required parameters

```js
$db_host \\Hostname of the remote server e.g www.github.com
$db_portnumber \\Port number of the remote server e.g 3306
$db_name    \\name of the database e.g db_test_name
$db_username \\username to access the database
$db_password \\password to access the database
$db_query_statement \\mysql query to run e.g SELECT name from USERS WHERE id = 3
```

AngularJS(1) code snippet

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

JQuery AJAX code snippet

```js

$.getJSON("http://novett.herokuapp.com/getQuery?"+$getData, function(response){ 
        console.log(response);
});
```

## Resources and Documentation

* [General documentation](https://github.com/omoniyi289/JS-to-MySQL-API/wiki)
* [API Host on](http://novett.herokuapp.com)
* [AngularJS Library](https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js)
* [JQuery Library](https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js)
* [Demo Download](https://github.com/omoniyi289/JS-to-MySQL-API/archive/master.zip)



    


