var quantity = [2, 4, 6];
var booksInCart = generateBooks();

$(document).ready(function () {
  var content = "";
  //alert(books[booksInCart[0]].name);
  for (i = 0; i < 3; i++) {
    console.log("yep");
    $("#items").append("<div class='item'>\n" +
                "<div class='buttons'>\n" +
                  "<span class='delete-btn' ></span>\n" +
                  "<span class='like-btn' ></span>\n" +
                "</div>\n" +
                "<div class='image'>\n" +
                  "<img src='" + books[booksInCart[i]].url + "' alt='"+ books[booksInCart[i]].category +"' height='42' width='42' />\n" +
                "</div>\n" +
                "<div class'description'>\n" +
                  "<span class='name'>"+ books[booksInCart[i]].name +"</span><br/>" +
                  "<span class='author'>"+ books[booksInCart[i]].author + " ~ " + books[booksInCart[i]].year +"</span><br/>" +
                "</div>\n" +
                "<div class='quantity'>\n" +
                  "<button class='plus-btn' type='button' name='button'>\n" +
                    "<img src='plus.svg' alt='' />\n" +
                  "</button>\n" +
                  "<input type='text' name='Quantity' value='"+ quantity[i] + "'disabled>\n" +
                  "<button class='minus-btn' type='button' name='button'>\n" +
                    "<img src='minus.svg' alt='' />\n" +
                  "</button>\n" +
                "</div>\n" +
                "<div class='totalPrice'>" + (quantity[i] * books[booksInCart[i]].price).toFixed(2) + "$</div>\n" +
              "</div>\n");
  }
});

function generateBooks() {
  var genbooks = [];
  for (i = 0; i < 3; i++) {
    genbooks[i] = Math.floor(Math.random() * 11);
	//maybe watch for duplicate?
  }
  return genbooks;
};
