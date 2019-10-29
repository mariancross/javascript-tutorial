var filename = 'bookstore.xml';

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    parse(this);
  }
};

xhttp.open('GET', filename, true);
xhttp.send();

function parse(xml) {
  let xmlDoc = xml.responseXML;
  let bookstore = xmlDoc.getElementsByTagName('bookstore')[0];

  let books = bookstore.getElementsByTagName('book');

  for (let i =0; i < books.length; i++) {
    let book = books[i];
    let title = book.getElementsByTagName('title')[0].childNodes[0].nodeValue;
    let author = book.getElementsByTagName('author')[0].childNodes[0].nodeValue;
    let year = parseInt(book.getElementsByTagName('year')[0].childNodes[0].nodeValue);
    let price = parseFloat(book.getElementsByTagName('price')[0].childNodes[0].nodeValue);
    console.log('Book information:\nTitle: ' + title + '\nAuthor: ' + author + '\nYear: ' + year + '\nPrice: ' + price);
  }
}