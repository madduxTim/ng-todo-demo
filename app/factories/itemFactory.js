app.factory("itemStorage", function($q, $http){ //<--- $q is Angular's promise library
    var items = [];
    var getItemList = function() {
        return $q(function(resolve, reject){
            $http.get("https://angular-tdm.firebaseio.com/items.json")  
                .success(function(itemObject){
                    var itemCollection = itemObject;
                    Object.keys(itemCollection).forEach(function(key){
                        itemCollection[key].id=key;
                        items.push(itemCollection[key]);
                    })
                    resolve(items);
                })
                .error(function(error){
                    reject(error);
            });            
        });
    }
    return {getItemList:getItemList}
});