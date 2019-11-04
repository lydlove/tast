//创建一给service
app.service('sellerService',function ($http) {
    this.getCharts=function(){
        return $http.get('https://edu.telking.com/api/?type=week');
    }
})