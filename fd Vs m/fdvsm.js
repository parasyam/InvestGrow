var ctx = document.getElementById('fdchart').getContext('2d');
var mtx=document.getElementById('mutualchart').getContext('2d');
document.getElementById("but").addEventListener("click",function(){
    document.getElementById("resultR").style.display="block"
})
document.getElementById("but").addEventListener("click",function(){
    document.getElementById("result").style.display="block"
})

function fd(){
    let fdc =parseInt(document.getElementById("fdc").value);
    let fdr=parseFloat(document.getElementById("fdr").value);
    let fdt=parseInt(document.getElementById("fdt").value);
    let mir=parseFloat(document.getElementById("mir").value)/100;


    let result=Math.round(fdc*fdt*fdr/100);
    let totalAmount = Math.round(fdc + result);
    let Amount=Math.round(fdc*Math.pow((1+mir),fdt));
    let rate2= Amount-fdc;
    // let tax=Math.round(rate2*0.15);
    //  Amount=Amount-tax;
         



    document.getElementById("result").innerHTML=
    "Capital: "+fdc.toLocaleString()+"<br>"+
    "returns: "+result.toLocaleString()+"<br>" +
    // "tax : 0"+"<br>"+
    "total amount: "+totalAmount.toLocaleString();


    document.getElementById("resultR").innerHTML=
    "Capital: "+fdc.toLocaleString()+"<br>"+
    "returns: "+rate2.toLocaleString()+"<br>" +
    // "tax : "+tax+"<br>"+
    "total amount: "+Amount.toLocaleString();
    let a=Math.round(fdc*fdr/100);
    let b=Math.round(fdc*fdt*fdr/400);
    let c=Math.round(fdc*fdt*fdr/300);
    let d=Math.round(fdc*fdt*fdr/200);
    let e=Math.round(fdc*fdt*fdr/100);


    // let a=Math.round(fdc*Math.pow((1+mir),1));
    // let b=Math.round(fdc*Math.pow((1+mir),Math.round(fdt/4)));

 let a1=Math.round(fdc*Math.pow((1+mir),1))-fdc;
let b1=Math.round(fdc*Math.pow((1+mir),(fdt/4)))-fdc;
let c1=Math.round(fdc*Math.pow((1+mir),Math.round(fdt/3)))-fdc;
let d1=Math.round(fdc*Math.pow((1+mir),Math.round(fdt/2)))-fdc;
let e1=Math.round(fdc*Math.pow((1+mir),Math.round(fdt)))-fdc;
// a1=Math.round(a1*0.15);

// b1=Math.round(b1*0.15);
// c1=Math.round(c1*0.15);
// d1=Math.round(d1*0.15);
// e1=Math.round(e1*0.15);



    fdchart.data.datasets[0].data = [a,b,c,d,e];
    fdchart.update();
    mutualchart.data.datasets[0].data=[a1,b1,c1,d1,e1]
    mutualchart.update();
    if(totalAmount > Amount){
        document.getElementById('whowon').innerHTML=`choose fixed deposit for better rerturns`
    }
    else{
        document.getElementById('whowon').innerHTML=`choose mutual funds for better returns`

    }

}

var fdchart = new Chart(ctx, {
    type: 'bar', // Type of chart
    data: {
        labels: ['firstyear','quarter time','one third time','half time','final year'], // X-axis labels
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
                        value=value/1000;
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



var mutualchart = new Chart(mtx, {
type: 'bar', // Type of chart
data: {
    labels: ['firstyear','quarter time','one third time','half time','final year'], // X-axis labels
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
                    value=value/1000;
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
