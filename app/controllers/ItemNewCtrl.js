"use strict";
app.controller("ItemNewCtrl", function($scope, $http, $location){
    $scope.newTask = {
        assignedTo: "",
        dependencies: "",
        dueData: "",
        isCompleted: false,
        location: "",
        task: "",
        urgency: ""
    };

    $scope.addNewItem = function(){
        $http.post(
            "https://angular-tdm.firebaseio.com/items.json",
            JSON.stringify({
                assignedTo: $scope.newTask.assignedTo,
                dependencies: $scope.newTask.dependencies,
                dueData: $scope.newTask.dueDate,
                isCompleted: $scope.newTask.isCompleted,
                location: $scope.newTask.location,
                task: $scope.newTask.task,
                urgency: $scope.newTask.urgency
            })
        ).success(function(response){
            $location.url("/items/list") // "<--- WHAT IS THIS STUFF. (WAS TYPING...)"
        })
        // $scope.newTask.isCompleted = false;
        // $scope.newTask.id = $scope.items.length;
        // console.log("you added a new item", $scope.newTask);
        // $scope.items.push($scope.newTask);
        // $scope.newTask = "";
        
    };
});