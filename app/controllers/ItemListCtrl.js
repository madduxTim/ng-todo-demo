"use strict";
app.controller("ItemListCtrl", function($scope){
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
});