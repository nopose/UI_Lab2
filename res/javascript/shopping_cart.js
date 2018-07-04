var quantity = [2, 4, 6];
var booksInCart = generateBooks();
var TOTAL = 0;

$(document).ready(function () {
  var content = "";
  //alert(books[booksInCart[0]].name);
  for (i = 0; i < 3; i++) {
    console.log("yep");
    $("#SC").append("<div class='item'>\n" +
                "<div class='buttonsSC'>\n" +
                  "<span class='delete-btn'></span>\n" +
                  "<span class='like-btn'></span>\n" +
                "</div>\n" +
                "<div class='image'>\n" +
                  "<img src='" + books[booksInCart[i]].url + "' alt='"+ books[booksInCart[i]].category +"' heigth='120px' width='80px' />\n" +
                "</div>\n" +
                "<div class='description'>\n" +
                  "<span>"+ books[booksInCart[i]].name +"</span>" +
                  "<span>"+ books[booksInCart[i]].author + " ~ " + books[booksInCart[i]].year +"</span>" +
                "</div>\n" +
                "<div class='quantity'>\n" +
                  "<button class='minus-btn' type='button' name='button'>\n" +
                    "<img src='res/images/minus.png' alt='' />\n" +
                  "</button>\n" +
                  "<input id='"+ booksInCart[i] +"' type='text' name='Quantity' value='"+ quantity[i] + "' disabled>\n" +
                  "<button class='plus-btn' type='button' name='button'>\n" +
                    "<img src='res/images/plus.png' alt='' />\n" +
                  "</button>\n" +
                "</div>\n" +
                "<div id='"+ booksInCart[i] +"' class='total-price'>" + (quantity[i] * books[booksInCart[i]].price).toFixed(2) + "$</div>\n" +
              "</div>\n");
    TOTAL += parseInt((quantity[i] * books[booksInCart[i]].price));
  }


  $(".finalTotal").append("<p class='PriceTotal'>Your total is (w/ taxes) : <mark>"+ (TOTAL * 1.13).toFixed(2) +"$</mark><a href='checkout.html'><button id='checkoutBTN' type='button' class='btn btn-success float-right'>Proceed to Checkout</button></a></p>")

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
    changeTotal(value, id, "dec");
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
      changeTotal(value, id, "inc");
  });

});

function changeTotal(value, id, action) {
  $("#"+ id +".total-price").html((value * getPrice(id)).toFixed(2) + "$");
  if (action == "inc")
    updateFinalTotal(parseInt(getPrice(id)));
  else if (action == "dec")
    updateFinalTotal(parseInt(-getPrice(id)));
};

function updateFinalTotal(changes) {
  $(".PriceTotal").html("Your total is (w/ taxes) : <mark>" + ((TOTAL += changes) * 1.13).toFixed(2) + "$</mark><a href='checkout.html'><button id='checkoutBTN' type='button' class='btn btn-success float-right'>Proceed to Checkout</button></a>");
}

function getPrice(bookID) {
  return (books[bookID].price);
}

function generateBooks() {
  var genbooks = [];
  while(genbooks.length < 3){
      var randomnumber = Math.floor(Math.random() * 10);
      if(genbooks.indexOf(randomnumber) > -1) continue;
      genbooks[genbooks.length] = randomnumber;
  }
  return genbooks;
};
