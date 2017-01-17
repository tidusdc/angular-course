(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var boughtList = this;

      boughtList.items = ShoppingListCheckOffService.boughtListItems();

      boughtList.finishedShopping = function() {
        return ShoppingListCheckOffService.finishedShopping();
      };
    }
    
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var shoppingList = this;

    shoppingList.items = ShoppingListCheckOffService.toBuyListItems();

    shoppingList.buyItem = function(index) {
       ShoppingListCheckOffService.buyItem(index);
    };
  }



  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
        { name: "Salami", quantity: 1 },
        { name: "French Bread", quantity: 3 },
        { name: "Milk", quantity: 2 },
        { name: "Candy", quantity: 10 },
        { name: "Butter", quantity: 2 },
        { name: "Sprite", quantity: 5 },
        { name: "Salt", quantity: 2 },
        { name: "Pepper", quantity: 8 }
      ];

    var boughtList = [];

    service.toBuyListItems = function () {
      return toBuyList;
    };

    service.boughtListItems = function () {
      return boughtList;
    };

    service.buyItem = function (index) {
      var item = toBuyList[index];
      toBuyList.splice(index,1);
      boughtList.push(item);
    };

    service.finishedShopping = function(){
      return toBuyList.length == 0;
    };
  }
})();
