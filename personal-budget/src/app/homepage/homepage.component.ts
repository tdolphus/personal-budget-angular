import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
public dataSource = {
  datasets: [{
      data: [40, 100, 75],
      backgroundColor: [
          "#ffcd56",
          "#ff6384",
          "#fd6b12",
          "#E933FF ",
          "337DFF",
          "#33FF7A ",
          "#FF5733 ",



      ]
  }, ],


  labels: [

  ]

};

  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
      for (var i = 0; i < res.length; i++) {
        this.dataSource.datasets[0].data[i] = res[i].budget;
        this.dataSource.labels[i] = res[i].title;
         this.createChart();
    }
  });
}

createChart() {
  // var ctx = document.getElementById("myChart").getContext("2d");
  var ctx = document.getElementById("myChart")
  var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource
  });
}

}
