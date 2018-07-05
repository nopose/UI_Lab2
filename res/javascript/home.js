function alertTimeout(wait){
	setTimeout(function(){
		$('#alert_addCart').alert('close');
    }, wait);
}

function test() {
	$("#alert_space").empty()
    $("#alert_space").append(`
		<div class="row">
			<div id="alert_space" class="col-md-12 text-center">
				<div id="alert_addCart" class="alert alert-success alert-dismissible fade show font-weight-bold">
				  Item added to cart
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
			</div>
			</div>`);
    alertTimeout(2000);
}

$(document).ready(function () {
  var content = "";
  //alert(books[booksInCart[0]].name);

  $("#AllBooks").append(`<h2 class="title"> Most popular this year. </h3><div class="card-group" id="bookPopular-container" >`);
  for (i = 0; i < 3; i++) {
  		$("#bookPopular-container").append(`<div class="card text-center">
				<div class="mx-auto d-block" style="width:50%">
					<img class="imgContainer card-img-top" src="` + books[i].url + `" alt="`+ books[i].title +`">
				</div>
				<div class="card-body">
					<h4 class="card-title">` + books[i].name + `</h4>
				</div>
					<h6> Author: ` + books[i].author + `</h6>
          <a onclick="bookDetails('`+ books[i].id + `')" href="javascript:void(0);" id="addToCart" class="btn btn-success">More details</a>
        <div class="card-footer">
          <p class="card-text text-muted">` + books[i].category + `</p>
          <p class="card-text text-muted">` + books[i].price + `$</p>
          <p class="card-text text-success">In stock</p>
          <a onclick="test()" href="#alert_space" id="addToCart" class="btn btn-success">Add to cart</a>
        </div>
			</div>`);
  	}
    $("#AllBooks").append(`</div>`);

    $("#AllBooks").append(`<h2 class="title"> Bestsellers of the month! </h3><div class="card-group" id="bookBest-container" >`);
    for (i = 3; i < 6; i++) {
        $("#bookBest-container").append(`<div class="card text-center">
          <div class="mx-auto d-block" style="width:50%">
            <img class="imgContainer card-img-top" src="` + books[i].url + `" alt="`+ books[i].title +`">
          </div>
          <div class="card-body">
            <h4 class="card-title">` + books[i].name + `</h4>
          </div>
            <h6> Author: ` + books[i].author + `</h6>
            <a onclick="bookDetails('`+ books[i].id + `')" href="javascript:void(0);" id="addToCart" class="btn btn-success">More details</a>
          <div class="card-footer">
            <p class="card-text text-muted">` + books[i].price + `$</p>
            <p class="card-text text-muted">` + books[i].category + `</p>
            <p class="card-text text-success">In stock</p>
            <a onclick="test()" href="#alert_space" id="addToCart" class="btn btn-success">Add to cart</a>
          </div>
        </div>`);
      }
      $("#AllBooks").append(`</div>`);

      $("#AllBooks").append(`<h2 class="title"> New Arrival this week! </h3><div class="card-group" id="bookArrival-container" >`);
      for (i = 6; i < 10; i++) {
          $("#bookArrival-container").append(`<div class="card text-center">
            <div class="mx-auto d-block" style="width:50%">
              <img class="imgContainer card-img-top" src="` + books[i].url + `" alt="`+ books[i].title +`">
            </div>
            <div class="card-body">
              <h4 class="card-title">` + books[i].name + `</h4>
            </div>
              <h6> Author: ` + books[i].author + `</h6>
              <a onclick="bookDetails('`+ books[i].id + `')" href="javascript:void(0);" id="addToCart" class="btn btn-success">More details</a>
            <div class="card-footer">
              <p class="card-text text-muted">` + books[i].price + `$</p>
              <p class="card-text text-muted">` + books[i].category + `</p>
              <p class="card-text text-success">In stock</p>
              <a onclick="test()" href="#alert_space" id="addToCart" class="btn btn-success">Add to cart</a>
            </div>
          </div>`);
        }
        $("#AllBooks").append(`</div>`);

        $("#fiction").click(function(){writeBooksFromHome (0, "Fiction");});
        $("#literature").click(function(){writeBooksFromHome (0, "Literature");});
        $("#thriller").click(function(){writeBooksFromHome (0, "Thriller");});
        $("#psychology").click(function(){writeBooksFromHome (0, "Psychology");});
        $("#cook").click(function(){writeBooksFromHome (0, "Cook");});
        $("#poetry").click(function(){writeBooksFromHome (0, "Poetry");});
});

function writeBooksFromHome (type, search) {
  window.location.href = "categories.html?cat="+search+"";
}
