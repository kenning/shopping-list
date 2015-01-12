(function() {
	var app = angular.module('shoppingList', []);

	app.controller('CategoryController', function() {
		this.catSupertypes = ['Stores', 'Aisles'];
		this.supertypeToAdd = "";
		this.addSuperType = function() {
			this.catSuperTypes.push(supertypeToAdd);
			supertypeToAdd = "";
		};

		this.cats = {
			Stores: ["Whole foods", "Ralphs"],
			Aisles: ["Bakery", "Freezer", "Fruits", "Utensils", "Vegetables" ]
		};

		this.selectedTab = "All";
		this.selectedCategory = false;
		this.selectTab = function(newTab) {
			this.selectedTab = newTab;
		};
		this.selectCategory = function(newTab, newCat) {
			this.selectedTab = newTab;
			this.selectedCategory = newCat;
		};
	});

	app.controller('ListController', function() {
		this.products = products;

		this.newProduct = {	};

		this.addProduct = function() {
			this.products.push(this.newProduct);
			this.newProduct = { };
		};
		this.removeProduct = function(product) {
			for(var i = 0; i < this.products.length; i++) {
				if(this.products[i] === product) {
					this.products.splice(i, 1);
					break;
				}
			}
		};
	});

	var products = [
		{ 	text: 'Carrots',
		Stores: 'All',
		Aisles: 'Vegetables'
	}, 	{	text: 'Beets',
		Stores: 'Whole foods',
		Aisles: 'Vegetables'
	},  {	text:'Pizza',
		Stores: 'All', 
		Aisles: 'Freezer'
	},  {	text:'Spelt bread',
		Stores: 'Whole foods', 
		Aisles: 'Bakery'
	},  {	text:'Ice cream',
		Stores: 'All', 
		Aisles: 'Freezer'
	},  {	text:'Pan',
		Stores: 'Ralphs', 
		Aisles: 'Utensils'
	} ];
})();