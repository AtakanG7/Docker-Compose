const mysql = require('mysql');

// Create a connection to the MySQL container
const connection = mysql.createConnection({
  host: 'mysql_container',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Connect to the MySQL container
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL container: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL container with connection id ' + connection.threadId);
});

// Insert some data into a table in the database
connection.query('INSERT INTO my_table (column1, column2) VALUES (?, ?)', ['value1', 'value2'], function (error, results, fields) {
  if (error) {
    console.error('Error inserting data into MySQL container: ' + error.stack);
    return;
  }

  console.log('Data inserted into MySQL container with id ' + results.insertId);
});

// Close the connection to the MySQL container
connection.end(function(err) {
  if (err) {
    console.error('Error disconnecting from MySQL container: ' + err.stack);
    return;
  }

  console.log('Disconnected from MySQL container');
});
