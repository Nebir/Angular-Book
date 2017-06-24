app.controller('MainController',['$scope',function($scope) {
    $scope.title = "My Books";
    $scope.promo = "Knowledge is power";
    $scope.products = 
    [ 
        { 
            name: 'The Book of Trees', 
            price: 62, 
            pubdate: new Date('2014', '03', '08'), 
            cover: 'img/book1.jpg',
            likes: 29,
            dislikes: 16
        }, 

        { 
            name: 'Program be Programmed', 
            price: 63, 
            pubdate: new Date('2013', '08', '01'), 
            cover: 'img/book2.jpg',
            likes: 39,
            dislikes: 22
        },

        { 
            name: 'The Book of Trees', 
            price: 64, 
            pubdate: new Date('2015', '11', '13'), 
            cover: 'img/book1.jpg',
            likes: 59,
            dislikes: 28
        }
        
        /*{ 
            name: 'Program or be Programmed', 
            price: 62, 
            pubdate: new Date('2012', '2', '11'), 
            cover: 'img/program-or-be-programmed.jpg',
            likes: 0,
            dislikes: 0
        }*/
    ]
  
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
  
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    }
  
}]);