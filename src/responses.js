const fs = require('fs');
const books = JSON.parse(fs.readFileSync(`${__dirname}/../data/books.json`));

const getData = (req, res) => {
    //res.json(movies);
    res.json(books);
  };
  
  // Not found page renderer
  const notFound = (req, res) => {
    res.status(404).render('notFound', {
      page: req.url,
    });
  };
  
  module.exports = {
    notFound,
    getData,
  };