//2.创建一个控制器
app.controller('sellerController',function ($scope,sellerService) {

    //获取折线图统计图
    $scope.getChart=function(){
        sellerService.getCharts().success(
            function (response) {
                $scope.xAxis = response.data.xAxis;
                $scope.series = response.data.series;
                $scope.Chart();
            }
        )
    }
    
    //折线图
    $scope.Chart=function () {
        echarts.init(document.querySelector('.line')).setOption({
                color:['rgb(68, 132, 242)'],
                grid: {
                    left: '1%',
                    right: '1%',
                    top : '10%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: $scope.xAxis
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    //data: $scope.yAxis,
                     data: $scope.series,
                    type: 'line',
                    smooth: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal:{
                        color: 'rgb(234, 246, 253)'
                    }}
                }]
            });

            //柱状图
            echarts.init(document.querySelector('.bar')).setOption({
                color: ['rgb(68, 132, 242)'],
                title: {
                    text: '商品数'
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    top : '15%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : $scope.xAxis,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        
                    }
                ],
                series : [
                    {
                        type:'bar',
                        barWidth: '30%',
                        // label: {
                        //     normal: {
                        //         show: true,
                        //         position: 'top'
                        //     },
                        data:$scope.series
                    }
                ]
            });
            
            echarts.init(document.querySelector('.pie')).setOption({
                series: {
                    type: 'pie',
                    data: [
                        {name: 'Mon', value: 800},
                        {name: 'Tue', value: 600},
                        {name: 'Wed', value: 500},
                        {name: 'Thu', value: 300},
                        {name: 'Frl', value: 2800},
                        {name: 'Sat', value: 1919},
                        {name: 'Sun', value: 1919},
                    ]
                }
            });

    }
})