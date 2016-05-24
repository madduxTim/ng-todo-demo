"use strict";

// THIS IS ALL THREE FILES. DON'T NEED IT, BUT HELPS? 
app.controller("TodoCtrl", function($scope){
    $scope.welcome = "hello";
    $scope.showListView = true;
    $scope.newTask = {};
    $scope.items = [
        {
            id: 0,
            task: "mow the lawn",
            isCompleted: true,
            dueDate: "12/5/2017",
            assignedTo: "greg",
            location: "Zoe's house",
            urgency: "low",
            dependencies: ["sunshine, clippers, hat, water, headphones"]
        },
        {
            id: 1,
            task: "grade some quizzes zoe",
            isCompleted: false,
            dueDate: "12/5/2015",
            assignedTo: "joe",
            location: "NSS",
            urgency: "high",
            dependencies: ["hi-fi, tissues, vodka"]
        },
        {
            id: 2,
            task: "take a nap",
            isCompleted: false,
            dueDate: "5/21/2016",
            assignedTo: "zoe",
            location: "Zoe's house",
            urgency: "medium",
            dependencies: ["hammock, cat, pillow"]
        }
    ];

    $scope.newItem = function(){
        $scope.showListView = false;
    };
    $scope.allItem = function(){
        $scope.showListView = true;
    };
    $scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        console.log("you added a new item", $scope.newTask);
        $scope.items.push($scope.newTask);
        $scope.newTask = "";
    };
});