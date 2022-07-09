import connection from '../configs/connectDB';

let getHomePage = (req, res) => {
  // logic
  let data = [];
  connection.query('SELECT * FROM `user` ', function (err, results, fields) {
    console.log('>>> check mysql');
    console.log(results); // results contains rows returned by server
    results.map((row) => {
      data.push({
        id: row.id,
        firstName: row.firstName,
        lastName: row.lastName,
        email: row.email,
        address: row.address,
      });
    });
    return res.render('test/index.ejs', {
      dataUser: data,
      test: 'con chó này thật là tuyệt vời',
    });
  });
};

let getProductPage = (req, res) => {
  //logic
  return res.render('element/product.ejs');
};

module.exports = {
  getHomePage,
  getProductPage,
};
