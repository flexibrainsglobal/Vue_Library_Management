<template>
    <div class="p-5">
         <h5 style="color:grey;letter-spacing:10px"><strong>TRENDING BOOKS</strong></h5>
         <hr>
         <canvas id="myChart" ></canvas>
    </div>
</template>
<script>
import BarChart from '../Charts/BarChart'
import axios from 'axios'
import Chart from 'chart.js'
export default {
    name:"BooksReport",
    data(){
        return{
            BarChart :BarChart
        }
    },
    mounted() {
        var _this = this
        
        axios.get('http://localhost:3000/books')
        .then(function (response) {
            var respData = response.data
            var dLabels =[]
            var dData = []
            respData.forEach(element => {
                dLabels.push(element.book_name)
                dData.push(element.issued_copies)
            });

            _this.BarChart.data.labels = dLabels
            _this.BarChart.data.datasets[0].data = dData

            var ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx,_this.BarChart);
        })
    },
}
</script>
<style>

</style>