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

$("#fiction").click(function(){writeBooks (0, "Fiction");});
$("#literature").click(function(){writeBooks (0, "Literature");});
$("#thriller").click(function(){writeBooks (0, "Thriller");});
$("#psychology").click(function(){writeBooks (0, "Psychology");});
$("#cook").click(function(){writeBooks (0, "Cook");});
$("#poetry").click(function(){writeBooks (0, "Poetry");});

function writeBooks (type, search) {
	var genbooks = [];
	index = 0;

	//categories
	if(type == 0) {
		for (i = 0; i < books.length; i++){
			if(books[i].category.search( new RegExp(search, "i")) !== -1) {
				genbooks[index] = books[i];
				index++;
			}
		}
		$("#title").empty()
		$("#title").append("Category: " + search)
	}

	//search
	if(type == 1) {
		for (i = 0; i < books.length; i++){
			if((books[i].name.search( new RegExp(search, "i")) !== -1) || (books[i].author.search( new RegExp(search, "i")) !== -1)) {
				genbooks[index] = books[i];
				index++;
			}
		}
	}

	$("#bookContainer").empty();
	for (i = 0; i < genbooks.length; i++) {
		$("#bookContainer").append(`<div class="card text-center">
					<div class="mx-auto d-block" style="width:50%">
						<img class="imgContainer card-img-top" src="` + genbooks[i].url + `" alt="`+ genbooks[i].title +`">
					</div>
					<div class="card-body">
						<h4 class="card-title">` + genbooks[i].name + `</h4>
					</div>
						<h6> Author: ` + genbooks[i].author + `</h6>
						<a onclick="bookDetails('`+ genbooks[i].name + `')" href="javascript:void(0);" id="addToCart" class="btn btn-success">More details</a>
					<div class="card-footer">
						<p class="card-text">` + genbooks[i].price + `$</p>
						<p class="card-text text-success">In stock</p>
						<a onclick="test()" href="#alert_space" id="addToCart" class="btn btn-success">Add to cart</a>
					</div>
				</div>`)
	}
	return genbooks.length;

}

function generateBooks() {
  var genbooks = [];
  while(genbooks.length < 4){
      var randomnumber = Math.floor(Math.random() * 10);
      if(genbooks.indexOf(randomnumber) > -1) continue;
      genbooks[genbooks.length] = randomnumber;
  }
  return genbooks;
};

$(document).ready(function fillSuggestedBook(){
		genbooks = generateBooks();
		$("#suggestedBook").empty();
	for (i = 0; i < genbooks.length; i++) {
		$("#suggestedBook").append(`<div class="card text-center">
					<div class="mx-auto d-block" style="width:50%">
						<img class="imgContainer card-img-top" src="` + books[genbooks[i]].url + `" alt="`+ books[genbooks[i]].title +`">
					</div>
					<div class="card-body">
						<h4 class="card-title">` + books[genbooks[i]].name + `</h4>
					</div>
						<h6> Author: ` + books[genbooks[i]].author + `</h6>
						<a onclick="bookDetails('`+ books[genbooks[i]].name + `')" href="javascript:void(0);" id="addToCart" class="btn btn-success">More details</a>
					<div class="card-footer">
						<p class="card-text">` + books[genbooks[i]].price + `$</p>
						<p class="card-text text-success">In stock</p>
						<a onclick="test()" href="#alert_space" id="addToCart" class="btn btn-success">Add to cart</a>
					</div>
				</div>`)
	}

	$(window).on('hashchange', function(e){
    // do something...
		writeBooks(0, "Fiction");
	});
});

function search(){
	var value = $("#result").val();
	localStorage.setItem("result", value);
	window.location.href="search.html";
	return false
}


function localsearch(){
	var value = $("#localResult").val();
	localStorage.setItem("result", value);
	window.location.href="search.html";
	return false
}

function bookDetails(search){
	localStorage.setItem("detail", search);
	window.location.href="book_details.html";
}

function loadDetails(){
	var search = localStorage.getItem("detail");
	var genbooks;
	//search
	for (i = 0; i < books.length; i++){
		if(books[i].name.search( new RegExp(search, "i")) !== -1) {
			genbooks = books[i];
			break;
		}
	}

	$("#bookContainer").empty();

	$("#bookContainer").append(`<div class="row bottom-row">
				<div class="col-md-4">
					<img class="imgContainer card-img-top" src="` + genbooks.url + `" alt="` + genbooks.name + `">
				</div>
				<div class="col-md-7 offset-md-1">
					<div class="row">
						<h4 class="font-weight-bold">` + genbooks.name + `</h4>
					</div>
					<div class="row bottom-row">
						<h6 class="font-weight-bold">Author: ` + genbooks.author + `</h6>
					</div>
					<div class="row">
						<h6 class="font-weight-bold">Summary</h6></br>
						<p>` + genbooks.description + `<p>
					</div>
					<div class="row bottom-row">
						<h6 class="font-weight-bold">Category:&nbsp;</h6>
						<h6>` + genbooks.category + `</h6>
					</div>
					<div class="row">
						<h6 class="font-weight-bold">` + genbooks.price + `$</h6>
					</div>
					<div class="row">
						<h6 class="text-success">In stock</h6>

					</div>
					<div class="row">
					<a onclick="test()" href="#alert_space" id="addToCart" class="btn btn-success">Add to cart</a>
					</div>
				</div>
			</div>`)
}
