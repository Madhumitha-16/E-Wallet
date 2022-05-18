
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"wallet"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM Customer", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
// var cusname = document.getElementById("name").value;
// var email = document.getElementById("email").value;
// var bankType = document.getElementById("banks").value;
// var accountNo = document.getElementById("accno").value;
// var pwd = document.getElementById("user-pass").value;

// var sql = "INSERT INTO Customer (id,cusname, email,bankType, accountNo, pwd) VALUES (NULL,'"+cusname+ "', '"+email+"','"+bankType+"','"+accountNo+"','"+pwd+"')";

// con.query(sql, function (err, result) {
//   if (err) {
//       throw err;
//   }
//   console.log(result.affectedRows + " record(s) updated");
// });
