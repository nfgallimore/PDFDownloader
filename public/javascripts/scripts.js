var app = angular.module("PDFDownloader", []);
app.controller("PDFDownloaderCtrl", function ($scope)
{

});
app.run([
    '$rootScope', function ($scope)
    {
        $scope.myFunction = function ()
        {
            var url = $("#user_entry").val();
            document.getElementById("para").innerText = url;
            var index = url.indexOf("github.com/") + 11;
            var path = "/link/" + url.substring(index, url.length);
            $.get(path, function(data, status){
                console.log(data, status);
            });
            $.get('/users', function(data, status) {
                console.log(data, status);
            });
        };
    }
]);