var quantity = [2, 4, 6];
var booksInCart = generateBooks();

$(document).ready(function () {
  var content = "";
  //alert(books[booksInCart[0]].name);
  for (i = 0; i < 3; i++) {
    console.log("yep");
    $(".shopping-cart").append("<div class='item'>\n" +
                "<div class='buttonsSC'>\n" +
                  "<span class='delete-btn'></span>\n" +
                  "<span class='like-btn'></span>\n" +
                "</div>\n" +
                "<div class='image'>\n" +
                  "<img src='" + books[booksInCart[i]].url + "' alt='"+ books[booksInCart[i]].category +"' heigth='100px' width='66.7px' />\n" +
                "</div>\n" +
                "<div class='description'>\n" +
                  "<span>"+ books[booksInCart[i]].name +"</span>" +
                  "<span>"+ books[booksInCart[i]].author + " ~ " + books[booksInCart[i]].year +"</span>" +
                "</div>\n" +
                "<div class='quantity'>\n" +
                  "<button class='plus-btn' type='button' name='button'>\n" +
                    "<img src='res/images/plus.png' alt='' />\n" +
                  "</button>\n" +
                  "<input id='"+ booksInCart[i] +"' type='text' name='Quantity' value='"+ quantity[i] + "'>\n" +
                  "<button class='minus-btn' type='button' name='button'>\n" +
                    "<img src='res/images/minus.png' alt='' />\n" +
                  "</button>\n" +
                "</div>\n" +
                "<div id='"+ booksInCart[i] +"' class='total-price'>" + (quantity[i] * books[booksInCart[i]].price).toFixed(2) + "$</div>\n" +
              "</div>\n");
  }

  $('.minus-btn').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var id = $input.attr("id");
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);
    changeTotal(value, id);
    });

  $('.plus-btn').click(function(e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest('div').find('input');
      var id = $input.attr("id");
      var value = parseInt($input.val());

      if (value < 100) {
          value = value + 1;
      } else {
          value = 100;
      }

      $input.val(value);
      changeTotal(value, id);
  });

});

function changeTotal(value, id) {
  $("#"+ id +".total-price").html((value * getPrice(id)).toFixed(2) + "$");
};

function getPrice(bookID) {
  return (books[bookID].price);
}

function generateBooks() {
  var genbooks = [];
  for (i = 0; i < 3; i++) {
    genbooks[i] = Math.floor(Math.random() * 10);
	//maybe watch for duplicate?
  }
  return genbooks;
};
