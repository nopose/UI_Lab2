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
			if((books[i].title.search( new RegExp(search, "i")) !== -1) || (books[i].title.author( new RegExp(search, "i")) !== -1)) {
				genbooks[index] = books[i];
				index++;
			}
		}
	}
	
	$("#bookContainer").empty();
	for (i = 0; i < genbooks.length; i++) {
		$("#bookContainer").append(`<div class="card text-center">
					<div class="offset-sm-3" style="width:50%">
						<img class="imgContainer card-img-top" src="` + genbooks[i].url + `" alt="`+ genbooks[i].title +`">
					</div>
					<div class="card-body">
						<h4 class="card-title">` + genbooks[i].name + `</h4>
					</div>
						<h6> Author: ` + genbooks[i].author + `</h6>
					<div class="card-footer">
						<p class="card-text">` + genbooks[i].price + `</p>
						<p class="card-text text-success">In stock</p>
						<a href="#" class="btn btn-primary">Add to cart</a>
					</div>
				</div>`)
	}	
}

function generateBooks() {
  var genbooks = [];
  for (i = 0; i < 3; i++) {
    genbooks[i] = Math.floor(Math.random() * 11);
	//maybe watch for duplicate?
  }
  return genbooks;
};