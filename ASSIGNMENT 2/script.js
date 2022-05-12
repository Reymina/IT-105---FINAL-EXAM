var submit = document.getElementById("submit");


submit.addEventListener("click", function (){
	var users = ["Rae","Ping","Penguin"];
	var user = document.getElementById("username").value
	if(user == users[0] || user == users[1]) {
		var search = document.getElementById("search");
		search.innerHTML = '<label>Search products</label><br><input class="product" id="product" name="product"><br><button id="searchbtn">Search</button>';
		
		var searchbtn = document.getElementById("searchbtn");
		searchbtn.addEventListener("click", function searchbtn() {
			
		var products = ["Toys", "Accessories"];
		var product = document.getElementById("product").value
		
		if(product == products[0]) {
			var output = document.getElementById("output");
			output.innerHTML = '<br><p>Name: Toy1</p><br><img src="toy1.png" width="100px" height="100px"><br><label>Quantity</label><br><input id="quantity" placeholder="1~12"><br><button id="buy">Buy</button>';
			var buy = document.getElementById("buy");
			buy.addEventListener("click", function buy(){
				output.innerHTML = "<p>Thank you!</p>";
			});
		} else if(product == products[1]) {
			var output = document.getElementById("output");
			output.innerHTML = '<p>Out of stock!</p>';
		} else {
			var output = document.getElementById("output");
			output.innerHTML = '<p>Error!</p>';
		}
		
		});
	} else {
		alert("User is invalid!");
	}
});
