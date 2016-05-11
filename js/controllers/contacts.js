angular.module('ExternalContacts.controllers', []).controller('contacts', function($http, $scope) {



    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };



    var defaultData = [
                         {
                         type: 'Executive',
                         name: 'Ann Brown',
                         title: 'CEO',
                         phone: '(512)456-5555',
                         ext: '',
                         fax: '(512)456-5555',
                         email:'Executive',
                         id: 0,
                         checked: false
                         },
                         {
                         type: 'Inmar AR',
                         name: 'Mary Smith',
                         title: 'Lorem Ipsum',
                         phone: '(512)456-5555',
                         ext: '',
                         fax: '(512)456-5555',
                         email:'Inmar AR',
                         id: 0,
                         checked: false
                         },
                         {
                         type: 'Executive',
                         name: 'John Doe',
                         title: 'Dolor Sit',
                         phone: '(512)456-5555',
                         ext: '',
                         fax: '(512)456-5555',
                         email:'Executive',
                         id: 0,
                         checked: false
                         },
                         {
                         type: 'Daily',
                         name: 'John Doe',
                         title: 'Dolor Sit amet',
                         phone: '(512)456-5555',
                         ext: '',
                         fax: '(512)456-5555',
                         email:'Daily',
                         id: 0,
                         checked: false
                         },
                         {
                         type: 'Other',
                         name: 'John Doe',
                         title: 'Lorem Ipsum',
                         phone: '(512)456-5555',
                         ext: '',
                         fax: '(512)456-5555',
                         email:'Other',
                         id: 0,
                         checked: false
                         }
                         ];

    $scope.objectIndex = '';
    $scope.userList = defaultData;


    if ( localStorage.getItem('userList') == null ) {
        $scope.userList = defaultData;
        localStorage.setItem('userList', JSON.stringify(defaultData));
    } else {
        $scope.userList = JSON.parse(localStorage.getItem('userList'));
    }
    $scope.history = [];





    $scope.cancel = function() {
      angular.element('#editview').fadeOut(10, function() { });
    }


    $scope.create = function() {
      angular.element('#editview').fadeIn(1000, function() { });
    }




    $scope.edit = function(id) {

        angular.element('#editview').fadeIn(1000, function() { });

        $scope.objectIndex = id;
        $scope.userObject = angular.copy($scope.userList[id]);
        console.log($scope.objectIndex);
    }




    $scope.save = function() {
        console.log($scope.objectIndex);
        if($scope.userList[$scope.objectIndex] == null) {

            $scope.userList.push($scope.userObject);
        } else {
            $scope.userList[$scope.objectIndex] = $scope.userObject;
        }

        $scope.userObject = {};
        $scope.objectIndex = '';

        localStorage.setItem('userList', JSON.stringify($scope.userList));
        angular.element('#editview').fadeOut(1000, function() { });
    }




    $scope.delete = function(index) {

        console.log ('$scope.userList: ', $scope.userList);

        if ($scope.history.length === 10)
            $scope.history.shift();

        $scope.history.push($scope.userList[index]);

        $scope.userList.splice(index, 1);

        localStorage.setItem('userList', JSON.stringify($scope.userList));

    }


});