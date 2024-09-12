var ctx = document.getElementById('fdchart').getContext('2d');
document.getElementById('but').addEventListener("click",function(){
    document.getElementById("result").style.display = "block";
    
})
document.getElementById("closing").addEventListener("click",function(){
    document.getElementById("div0").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("content").style.justifyContent = "center"
})
document.querySelector("#open i").addEventListener("click",function(){
    document.getElementById("div0").style.display = "block";
    document.querySelector("#open").style.display = "none";
    document.getElementById("content").style.justifyContent = "start"

})


function sip(){
    let capital =parseInt(document.getElementById("capital").value);
    let returns=parseFloat(document.getElementById("returns").value);
    let sipt=parseInt(document.getElementById("sipt").value);

    let n=sipt*12;
    let i=returns/1200;
    let invest=capital*n;

    let result=capital*((Math.pow((1+i),n)-1)/i)*(i+1);
    let profits=result-invest;


    document.getElementById("result").innerHTML=
    "Capital: "+invest.toLocaleString()+"<br>"+
    "returns: "+profits.toLocaleString()+"<br>" +
    "total amount: "+result.toLocaleString();
    




    let a=Math.floor(capital*((Math.pow((1+i),12)-1)/i)*(i+1)-(capital*12));
    let b=Math.floor(capital*((Math.pow((1+i),(n/4))-1)/i)*(i+1)-(capital*n/4));
    let c=Math.floor(capital*((Math.pow((1+i),(n/2))-1)/i)*(i+1)-(capital*n/2));
    let d=Math.floor(capital*((Math.pow((1+i),(2*n/3))-1)/i)*(i+1)-(capital*n*2/3));
    let e=Math.floor(capital*((Math.pow((1+i),(n))-1)/i)*(i+1)-invest);
    fdchart.data.datasets[0].data = [a,b,c,d,e];
    fdchart.update();

   

}

var fdchart = new Chart(ctx, {
    type: 'bar', // Type of chart
    data: {
        labels: ['firstyear','quarter time','half time','two third time','final year'], // X-axis labels
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