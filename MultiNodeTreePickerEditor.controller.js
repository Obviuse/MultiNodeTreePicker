angular.module("umbraco").controller("MultiNodeTreePickerEditor.controller",
    function ($scope, assetsService, $http, dialogService) {

        if (!angular.isArray($scope.model.value)) {
            $scope.model.value = [];
        }

        // Remove an item from the Multi Node Tree Picker
        $scope.remove = function (item) {
            $scope.model.value.splice($scope.model.value.indexOf(item), 1);
        };

        //defines the options for the jquery sortable    
        $scope.sortableOptions = {
            axis: 'y',
            cursor: "move",
            handle: ".handle",
            update: function (ev, ui) {

            },
            stop: function (ev, ui) {

            }
        };
        //Loading the styles
        assetsService.loadCss("/app_plugins/MultiNodeTreePicker/assets/css/MultiNodeTreePickerEditor.css");

        // Render the Multi Node Tree Picker
        $scope.pickContent = function () {
            dialogService.treePicker({
                multiPicker: true,
                section: "content",
                treeAlias: "content",
                callback: function (data) {
                    var links = data.map(function (link) {
                        return {
                            id: link.id,
                            name: link.name
                        };
                    });
                    $scope.model.value = $scope.model.value.concat(links);
                }
            });
        };
    });