var ctx = document.getElementById('sip').getContext('2d');
var mtx=document.getElementById('swp').getContext('2d');
document.getElementById("but").addEventListener("click",function(){
    document.getElementById("result").style.display="block";
})
document.getElementById("but").addEventListener("click",function(){
    document.getElementById("resultR").style.display="block";
})

function sip(){
    let capital =parseInt(document.getElementById("capital").value);
    let returns=parseFloat(document.getElementById("returns").value);
    let sipt=parseInt(document.getElementById("sipt").value);
    let swpt=parseFloat(document.getElementById("swpt").value);
    let emw=parseInt(document.getElementById("emw").value);
    let n=sipt*12;
    let i=returns/1200;
    let invest=capital*n;

    let result=capital*((Math.pow((1+i),n)-1)/i)*(i+1);
    let profits=result-invest;


    document.getElementById("result").innerHTML=
    "Capital: "+invest.toLocaleString()+"<br>"+
    "returns: "+profits.toLocaleString()+"<br>" +
    "total amount: "+result.toLocaleString();
    let t1=swpt*12;
   
    let remainingBalance = result * Math.pow((1 + i), t1) - (emw * (Math.pow((1 + i), t1) - 1)) / i;
    let a1=result * Math.pow((1 + i), 12) - (emw * (Math.pow((1 + i), 12) - 1)) / i;
    let b1=result * Math.pow((1 + i), swpt*4) - (emw * (Math.pow((1 + i), swpt*4) - 1)) / i;
    let c1=result * Math.pow((1 + i), swpt*6) - (emw * (Math.pow((1 + i), swpt*6) - 1)) / i;
    let d1=result * Math.pow((1 + i), swpt*8) - (emw * (Math.pow((1 + i), swpt*8) - 1)) / i;


    // document.getElementById("resultR").innerHTML=
    // "Remaining Capital: "+withdrawalAmount.toLocaleString()+"<br>"+
    // "Generated returns: "+Remaining.toLocaleString()+"<br>";

    document.getElementById("resultR").innerHTML =
    "Remaining Balance after Withdrawals: " + remainingBalance.toLocaleString();

let a=Math.floor(capital*((Math.pow((1+i),12)-1)/i)*(i+1)-(capital*12));
let b=Math.floor(capital*((Math.pow((1+i),(n/4))-1)/i)*(i+1)-(capital*n/4));
let c=Math.floor(capital*((Math.pow((1+i),(n/2))-1)/i)*(i+1)-(capital*n/2));
let d=Math.floor(capital*((Math.pow((1+i),(2*n/3))-1)/i)*(i+1)-(capital*n*2/3));
let e=Math.floor(capital*((Math.pow((1+i),(n))-1)/i)*(i+1)-invest);

let f=(n/48)+'year';
let g=(n/24)+'year';
let h=(n/18)+'year';
let j=sipt+'year';


    sipchart.data.datasets[0].data = [a,b,c,d,e,invest];
    sipchart.data.labels = ['1st year',f,g,h,j,"total invest"];
    sipchart.update();

    swpchart.data.datasets[0].data=[a1,b1,c1,d1,remainingBalance];
    swpchart.update();




}

var sipchart = new Chart(ctx, {
    type: 'bar', // Type of chart
    data: {
        labels: [1,2,3,4,5,6], // X-axis labels
        datasets: [{
            label: 'Returns', // Dataset label
            data: [0, 0,0,0,0], // Initial data, will be updated
            backgroundColor: [
                'rgba(144, 228, 144, 1)',  /* Light Green */
                'rgba(102, 205, 102, 1)',  /* Medium Light Green */
                'rgba(34, 170, 34, 1)',   
                'rgba(34, 170, 34, 1)',   /* Medium Green */
                'rgba(0, 160, 0, 1)',      /* Dark Green */
                'rgba(0, 150, 0, 1)',
              ],
              borderColor: [
                  'rgba(0, 255, 0, 1)',  /* Very Light Green */
                  'rgba(0, 204, 0, 1)',  /* Light Green */
                  'rgba(0, 153, 0, 1)',  /* Medium Green */
                  'rgba(0, 102, 0, 1)',  /* Medium-Dark Green */
                  'rgba(0, 51, 0, 1)'
    
              ],
              borderWidth: 1 // Width of the border
          }]
      },
    options: {
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: function(value) {
                    return value.toLocaleString(); // Format numbers with commas
                },
                color: 'black',
                font: {
                    weight: 'bold'
                }
            }
        },


        scales: {
            y: {
                beginAtZero: true // Start Y-axis from zero
            }
        }
    },
    plugins: [ChartDataLabels]
});



var swpchart = new Chart(mtx, {
type: 'bar', 
data: {
    labels: ['firstyear','quarter time','half time','two third time','final year'], 
    datasets: [{
        label: 'Returns', // Dataset label
        data: [0, 0,0,0,0], // Initial data, will be updated
        backgroundColor: [
            'rgba(144, 228, 144, 1)',  /* Light Green */
  'rgba(102, 205, 102, 1)',  /* Medium Light Green */
  'rgba(34, 170, 34, 1)',    /* Medium Green */
  'rgba(0, 160, 0, 1)',      /* Dark Green */
  'rgba(0, 150, 0, 1)'
          ],
          borderColor: [
              'rgba(0, 255, 0, 1)',  /* Very Light Green */
              'rgba(0, 204, 0, 1)',  /* Light Green */
              'rgba(0, 153, 0, 1)',  /* Medium Green */
              'rgba(0, 102, 0, 1)',  /* Medium-Dark Green */
              'rgba(0, 51, 0, 1)'

          ],
          borderWidth: 1 // Width of the border
      }]
  },
options: {
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: function(value) {
                if(value>1000000){
                    value=Math.round(value/1000);
                        value=value+'M';
                }

                else if(value>1000){
                        value=value/1000;
                        value=value+'k';
                    }
                return value.toLocaleString(); // Format numbers with commas
            },
            color: 'black',
            font: {
                weight: 'bold'
            }
        }
    },


    scales: {
        y: {
            beginAtZero: true // Start Y-axis from zero
            
        }
    }
},
plugins: [ChartDataLabels]
});
