var ctx = document.getElementById('myChart');
var ctx2 = document.getElementById('DieProbability');
var ctx3 = document.getElementById('AliveProb');
var ctx4 = document.getElementById('LifeExp');
var ctx5 = document.getElementById('PopOverTime');

var ctx6 = document.getElementById('PopPyramid');

let dead ="💀"

let alive ="😃"


let appear = "😃";
document.getElementById("DeadOrAlive").innerHTML = appear;

Manydeadoralive= new Array(100).fill(1);

let ManyAppear = "😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃\n😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃\n😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃\n😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃\n😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃\n";
document.getElementById("ManyDeadOrAlive").innerHTML = ManyAppear;

const MaleDeathProb = [6.08100e-03,4.25000e-04,2.60000e-04,1.94000e-04,1.54000e-04,1.42000e-04,1.35000e-04,1.27000e-04,1.17000e-04,1.04000e-04,9.70000e-05,1.06000e-04,
                  1.45000e-04,2.20000e-04,3.24000e-04,4.37000e-04,5.52000e-04,6.76000e-04,8.06000e-04,9.39000e-04,1.07900e-03,1.21500e-03,1.32700e-03,1.40600e-03,
                  1.46100e-03,1.50800e-03,1.55900e-03,1.61200e-03,1.67100e-03,1.73400e-03,1.79800e-03,1.86000e-03,1.92600e-03,1.99400e-03,2.06700e-03,2.14700e-03,
                  2.23300e-03,2.31800e-03,2.39900e-03,2.48300e-03,2.58100e-03,2.69700e-03,2.82800e-03,2.97600e-03,3.14500e-03,3.33900e-03,3.56600e-03,3.83100e-03,
                  4.14200e-03,4.49800e-03,4.88800e-03,5.31900e-03,5.80800e-03,6.36000e-03,6.97000e-03,7.62700e-03,8.32000e-03,9.04700e-03,9.80300e-03,1.05910e-02,
                  1.14470e-02,1.23520e-02,1.32480e-02,1.41170e-02,1.49950e-02,1.59870e-02,1.71070e-02,1.82800e-02,1.95000e-02,2.08290e-02,2.23640e-02,2.41690e-02,
                  2.62490e-02,2.86420e-02,3.13800e-02,3.45930e-02,3.82350e-02,4.21590e-02,4.63360e-02,5.09170e-02,5.62050e-02,6.23270e-02,6.91900e-02,7.68440e-02,
                  8.54070e-02,9.50100e-02,1.05770e-01,1.17771e-01,1.31063e-01,1.45666e-01,1.61582e-01,1.78797e-01,1.97287e-01,2.17013e-01,2.37930e-01,2.58655e-01,
                  2.78786e-01,2.97897e-01,3.15556e-01,3.31333e-01,3.47900e-01,3.65295e-01,3.83560e-01,4.02738e-01,4.22875e-01,4.44018e-01,4.66219e-01,4.89530e-01,
                  5.14007e-01,5.39707e-01,5.66692e-01,5.95027e-01,6.24778e-01,6.56017e-01,6.88818e-01,7.23259e-01,7.59422e-01,7.97393e-01,8.37263e-01,8.79126e-01,1.0];

const FemaleDeathProb = [5.04600e-03,3.49000e-04,2.12000e-04,1.66000e-04,1.37000e-04,1.22000e-04,1.11000e-04,1.03000e-04,9.80000e-05,9.50000e-05,9.60000e-05,1.02000e-04,
                    1.16000e-04,1.39000e-04,1.70000e-04,2.04000e-04,2.40000e-04,2.78000e-04,3.19000e-04,3.60000e-04,4.05000e-04,4.51000e-04,4.91000e-04,5.23000e-04,
                    5.50000e-04,5.75000e-04,6.05000e-04,6.42000e-04,6.91000e-04,7.49000e-04,8.11000e-04,8.72000e-04,9.33000e-04,9.90000e-04,1.04600e-03,1.10700e-03,
                    1.17200e-03,1.23600e-03,1.29600e-03,1.35600e-03,1.42300e-03,1.50200e-03,1.59600e-03,1.70900e-03,1.84000e-03,1.98800e-03,2.15200e-03,2.33200e-03,
                    2.52800e-03,2.74400e-03,2.98000e-03,3.24000e-03,3.52900e-03,3.85200e-03,4.20700e-03,4.59000e-03,4.99600e-03,5.42500e-03,5.87400e-03,6.34600e-03,
                    6.88000e-03,7.45400e-03,8.00600e-03,8.51500e-03,9.02500e-03,9.61000e-03,1.03200e-02,1.11580e-02,1.21480e-02,1.33010e-02,1.46620e-02,1.62100e-02,
                    1.78920e-02,1.97010e-02,2.17000e-02,2.40640e-02,2.68140e-02,2.98370e-02,3.31320e-02,3.68100e-02,4.11020e-02,4.60800e-02,5.16580e-02,5.78680e-02,
                    6.48290e-02,7.26900e-02,8.15780e-02,9.15870e-02,1.02774e-01,1.15160e-01,1.28749e-01,1.43532e-01,1.59491e-01,1.76600e-01,1.94825e-01,2.13248e-01,
                    2.31570e-01,2.49466e-01,2.66589e-01,2.82585e-01,2.99540e-01,3.17512e-01,3.36563e-01,3.56756e-01,3.78162e-01,4.00852e-01,4.24903e-01,4.50397e-01,
                    4.77421e-01,5.06066e-01,5.36430e-01,5.68616e-01,6.02733e-01,6.38896e-01,6.77230e-01,7.17864e-01,7.59422e-01,7.97393e-01,8.37263e-01,8.79126e-01,1.0];

DeathProb = MaleDeathProb;


const years = [...Array(122).keys()];

curr_LifeExp= [];

for (let i = 0; i < 122; i ++) {
    curr_LifeExp.push(computeLifeExp(121,DeathProb[i],i));
};



var myChart = new Chart(ctx, {

    type: "line",

    data: {

    labels: [],
    datasets: [
      {
        label: "Death Probabilty",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      }
    ]
    },
    options: {
        plugins: {
            //title:{
            //    display: true,
            //    text: "Site Traffic"
            //},

        },

        scales: {
            x: {display: true,
                title:{
                    display:true,
                    text: 'Age(Years)'
                }
            },
            y: {display: true,
                title:{
                    display:true,
                    text: 'Probabilty you are alive()'
                }
            }
        },
        maintainAspectRatio: false,
        responsive: false,
    }
});


function data0(datain){
    var data = myChart.config.data;
    //data.datasets[0].data = datain;
    newdataset=[];
    chart_labels=[]
    CurrentDeathProp=1
    for (let i = datain; i < 121; i ++) {
        chart_labels.push(i);

        newdataset.push(CurrentDeathProp);
        CurrentDeathProp*=1-DeathProb[i]
    }
    chart_labels.push(121);
    newdataset.push(CurrentDeathProp);

    data.datasets[0].data = newdataset;
    data.labels = chart_labels;
    myChart.update('none');
}


var myChart2 = new Chart(ctx2, {

    type: "line",

    data: {

    labels: years,
    datasets: [
      {
        label: "Magic Medicine Death Probabilty",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      },
      {
        label: "Current Death Probabilty",
        data: DeathProb,
        backgroundColor: "rgba(4, 124, 244, 0.2)",
        borderColor: "rgba(4, 124, 244, , 1)",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      }
    ]
    },
    options: {
        plugins: {
            //title:{
            //    display: true,
            //    text: "Site Traffic"
            //},

        },

        scales: {
            x: {display: true,
                title:{
                    display:true,
                    text: 'Age(Years)'
                }
            },
            y: {display: true,
                title:{
                    display:true,
                    text: 'Death Probabilty()'
                }
            }
        },
        maintainAspectRatio: false,
        responsive: false,
    }
});

function DieProp(stopage){
    var data = myChart2.config.data;
    //data.datasets[0].data = datain;
    newdataset=[];
    stopdeath=DeathProb[stopage]
    for (let age=0; age<121;age++){
        if (age<stopage){
            newdataset.push(DeathProb[age]);
        }
        else{
            newdataset.push(DeathProb[stopage]);
        }
    }
    data.datasets[0].data = newdataset;
    myChart2.update('none');
}


var myChart3 = new Chart(ctx3, {

    type: "line",

    data: {

    labels: [],
    datasets: [
      {
        label: "Magic Medicine Alive Probability",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      },
      {
        label: "Current Alive Probability",
        data: [],
        backgroundColor: "rgba(4, 124, 244, 0.2)",
        borderColor: "rgba(4, 124, 244, , 1)",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      }
    ]
    },
    options: {
        plugins: {
            //title:{
            //    display: true,
            //    text: "Site Traffic"},

        },

        scales: {
            x: {display: true,
                title:{
                    display:true,
                    text: 'Age(Years)'
                }
            },
            y: {display: true,
                title:{
                    display:true,
                    text: 'Probabilty you are alive()'
                }
            }
        },
        maintainAspectRatio: false,
        responsive: false,
    }
});

function aliveProb(datain,stopage){
    var data = myChart3.config.data;
    //data.datasets[0].data = datain;
    newdataset=[];
    magicdataset=[];
    chart_labels=[]
    CurrentDeathProp=1
    magicmediceDeathProp=1

    for (let i = datain; i < 200; i ++) {
        chart_labels.push(i);
        if (i < stopage){

            magicdataset.push(magicmediceDeathProp);
            magicmediceDeathProp*=1-DeathProb[i];
        }
        else{

            magicdataset.push(magicmediceDeathProp);
            magicmediceDeathProp*=1-DeathProb[stopage];

        }

        if (i>121){
            newdataset.push(CurrentDeathProp);
            CurrentDeathProp*=0
        }
        else{
            newdataset.push(CurrentDeathProp);
            CurrentDeathProp*=1-DeathProb[i]
        }
    }
    //chart_labels.push(121);
    //newdataset.push(CurrentDeathProp);
    //magicdataset.push(magicmediceDeathProp);

    data.datasets[0].data = magicdataset;
    data.datasets[1].data = newdataset;
    data.labels = chart_labels;
    myChart3.update('none');


}




var myChart4 = new Chart(ctx4, {

    type: "line",

    data: {

    labels: [],
    datasets: [
      {
        label: "Magic Medicine Life Expectancy",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      },
      {
        label: "Current Life Expectancy",
        data: curr_LifeExp,
        backgroundColor: "rgba(4, 124, 244, 0.2)",
        borderColor: "rgba(4, 124, 244, , 1)",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      }
    ]
    },
    options: {
        plugins: {
            //title:{
            //    display: true,
            //    text: "Site Traffic"},

        },

        scales: {
            x: {display: true,
                title:{
                    display:true,
                    text: 'Age(Years)'
                }
            },
            y: {display: true,
                title:{
                    display:true,
                    text: 'Life Expectancy(Years)'
                }
            }
        },
        maintainAspectRatio: false,
        responsive: false,
    }
});


function computeLifeExp(stopage,stopdeath,age){
    pop=1
    life_exp=0
    currentage=age
    if (currentage<stopage)
    {
        for (let i = currentage; i < stopage; i++) {
            dead=DeathProb[i]*pop
            pop*=1-DeathProb[i]
            life_exp+=dead*(i-currentage+0.5)
            //newdataset.push(CurrentDeathProp);
        }
        a=(0.5+stopage-currentage)/(1-(1-stopdeath))
        b=(1-stopdeath)/Math.pow((1-(1-stopdeath)),2)
        life_exp+=(a+b)*pop*stopdeath
        //newdataset.push(life_exp);
    }
    else{
        a=(0.5)/(1-(1-stopdeath))
        b=(1-stopdeath)/Math.pow((1-(1-stopdeath)),2)
        life_exp+=(a+b)*pop*stopdeath
        //newdataset.push(life_exp);
    }
    return life_exp
}

function LifeExpCalc(stopage){
    var data = myChart4.config.data;
    //data.datasets[0].data = datain;
    newdataset=[];
    chart_labels=[]
    stopdeath=DeathProb[stopage]

    for (let age=0; age<121;age++){
        chart_labels.push(age);

        newdataset.push(computeLifeExp(stopage,stopdeath,age))
    }

    data.datasets[0].data = newdataset;
    data.labels = chart_labels;
    myChart4.update('none');

}

var myChart5 = new Chart(ctx5, {

    type: "line",

    data: {

    labels: [],
    datasets: [
      {
        label: "Total Magic Medicine Population",
        data: [],
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      },
      {
        label: "Male Magic Medicine Population",
        data: [],
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      },
      {
        label: "Femal Magic Medicine Population",
        data: [],
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
        fill: false,
        lineTension: 0
      },
    ]
    },
    options: {

        scales: {
            x: {display: true,
                title:{
                    display:true,
                    text: 'Years After Magic Medicine(Years)'
                }
            },
            y: {display: true,
                title:{
                    display:true,
                    text: 'World Population in billions'
                }
            }
        },
        maintainAspectRatio: false,
        responsive: false,
    }
});

function sum(array){

    var count = 0;
    for(var i = 0; i < array.length; i++)
    {
        count = count+ array[i];
    }
    return count
}

function CalculatePop(stopage){

    var data = myChart5.config.data;

    yearsafter=[]
    TotalWpop=[]
    TotalMpop=[]
    TotalPop=[]

    StopWDeath=1-FemaleDeathProb[stopage]
    StopMDeath=1-MaleDeathProb[stopage]

    wpop=[1];
    mpop=[1];

    tempMpop=1;
    tempWpop=1;
    for (let i =0; i < MaleDeathProb.length; i++){
        tempMpop*=(1-MaleDeathProb[i])
        mpop.push(tempMpop)

        tempWpop*=(1-FemaleDeathProb[i])
        wpop.push(tempWpop)

    }

    TotalWpop.push(sum(wpop)*0.0441528952)
    TotalMpop.push(sum(mpop)*0.0441528952)
    TotalPop.push(TotalWpop[0]+TotalMpop[0])
    yearsafter.push(0)


    for (let years =0; years < 250; years++){
        oldmpop=mpop;
        oldwpop=wpop;
        for (let i =wpop.length-2; i!=0; i--){
            if (i>stopage){
                mpop[i]=(mpop[i-1]*StopMDeath);

                wpop[i]=(wpop[i-1]*StopWDeath);
            }
            else{
                mpop[i]=(mpop[i-1]*(1-MaleDeathProb[i-1]));

                wpop[i]=(wpop[i-1]*(1-FemaleDeathProb[i-1]));
            }
        }

        mpop.push(mpop[mpop.length-1]*StopMDeath);

        wpop.push(wpop[wpop.length-1]*StopWDeath);

        TotalWpop.push(sum(wpop)*0.0441528952)
        TotalMpop.push(sum(mpop)*0.0441528952)
        TotalPop.push(TotalWpop[years+1]+TotalMpop[years+1])
        yearsafter.push(years+1)
        //console.log(wpop);
    }



    data.datasets[0].data = TotalPop;
    data.datasets[1].data = TotalMpop;
    data.datasets[2].data = TotalWpop;

    data.labels = yearsafter;
    myChart5.update('none');

}


var myChart6 = new Chart(ctx6, {
    type: "bar",


    data: {
      labels: [],
      datasets: [{
        axis: 'y',
        label: 'Men',
        data: [],
        fill: true,
        backgroundColor: "Red",
        borderColor: "Red",
        borderWidth: 0
      },
      {
        axis: 'y',
        label: 'Women',
        data: [],
        fill: true,
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 0
      }]

    },

    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context){
                        return (context['raw'] < 0 ? -context['raw'] : context['raw']).toFixed(3);
                    },
                }
            }
        },


        indexAxis: 'y',
        scales: {
            y: {

                stacked: true,
                ticks: {
                        beginAtZero: true,
                      },
                position: "left",

            },
            x: {

                ticks: {
                  beginAtZero: true,
                  callback: (v) => {
                      return v < 0 ? (-v).toFixed(5) : v.toFixed(4);
                   },
                },
                stacked: false
            }

        },

  }
});


function CreatePopPyramid(stopage){
    var data = myChart6.config.data;
    //data.datasets[0].data = datain;
    Mendataset=[];
    Womendataset=[];

    FinalMendataset=[];
    FinalWomendataset=[];

    chart_labels=[];
    Mstopdeath=1-MaleDeathProb[stopage];
    Wstopdeath=1-FemaleDeathProb[stopage];
    MPop=1;
    WPop=1;

    Total_Mpop=0;
    Total_Wpop=0;

    count=0;
    age=0;
    while ((age<120 || WPop>0.002) && age<50000){

        Mendataset.push(MPop);
        Womendataset.push(-WPop);

        Total_Mpop+=MPop;
        Total_Wpop+=WPop;

        if (age>stopage){
            MPop*=Mstopdeath;
            WPop*=Wstopdeath;
        }
        else{
            MPop*=1-MaleDeathProb[age];
            WPop*=1-FemaleDeathProb[age];
        }
        age++;
    }
    length = Mendataset.length


    if (length>20000){
        bins=1000;
    }
    else if (length>10000){
        bins=500;
    }
    else if (length>5000){
        bins=250;
    }
    else if (length>2000){
        bins=100;
    }
    else if (length>1000){
        bins=50;
    }
    else if(length>500) {
        bins=25;
    }
    else if(length>200) {
        bins=10;
    }
    else{
        bins=5;
    }
    Mtempcount=0;
    Wtempcount=0;

    for(var i = 0; i < length+1; i++){
        Mtempcount+= Mendataset[i];
        Wtempcount+= Womendataset[i];
        if (i!=0 && i% bins == 0){
            FinalMendataset.push(Mtempcount/Total_Mpop);
            FinalWomendataset.push(Wtempcount/Total_Wpop);
            chart_labels.push((i-bins).toString()+'-'+i.toString());
            Mtempcount=0;
            Wtempcount=0;
        }
    }

    data.datasets[0].data = FinalMendataset;
    data.datasets[1].data = FinalWomendataset;
    data.labels = chart_labels;
    myChart6.update('none');
}



function YearsGained(age,stopage){
    var data = myChart4.config.data;
    magicdeath=data.datasets[0].data[age];
    currentdeath=data.datasets[1].data[age];
    return magicdeath-currentdeath
}




function CheckDead(age){
    if (Math.random()<DeathProb[age]){
        appear = "💀";
        document.getElementById("DeadOrAlive").innerHTML = appear;
        return true;
    }
    else{
        appear="😃"
        document.getElementById("DeadOrAlive").innerHTML = appear;
        return false;
    }

}

function ManyCheckDead(age){
    var ManyAppear = '';
    for (let i=0; i<100; i++){
        if (i%20==0 && i!=0){
            ManyAppear +="\n";
        }
        if (Manydeadoralive[i]==1){
            if (Math.random()<DeathProb[age]){
                ManyAppear+= "💀";
                Manydeadoralive[i]=0
                //document.getElementById("ManyDeadOrAlive").innerHTML = appear;
            }
            else{
                ManyAppear +="😃";
                //document.getElementById("ManyDeadOrAlive").innerHTML = appear;
            }
        }
        else{
            ManyAppear +="💀";
        }


    }
    document.getElementById("ManyDeadOrAlive").innerHTML = ManyAppear;
}

function checknumberalive(age){
    count=0;
    for (let i=0; i<100; i++){
        count+=Manydeadoralive[i];
    }
    return count
}

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
var ViewModel = function() {

    this.rangeValue = ko.observable(25);
    this.ageValue = ko.observable(30);
    this.Gender = ko.observable("Boy");
    this.isdead = ko.observable(false);

    this.numberOfClicks = ko.observable(this.rangeValue());

    this.registerClick = function() {
        this.isdead(CheckDead(parseInt(this.numberOfClicks())));
        this.numberOfClicks(1 + parseInt(this.numberOfClicks()));
    },this;

    this.resetClicks = function() {
        appear="😃"
        document.getElementById("DeadOrAlive").innerHTML = appear;
        this.isdead(false);
        this.numberOfClicks(parseInt(this.rangeValue()));
    },this;


    this.Manyisdead = ko.observable(false);
    this.ManynumberOfClicks = ko.observable(this.rangeValue());
    this.numberAlive = ko.observable(100);
    this.numberDead = ko.observable(0);
    this.Manyisdead = ko.observable(false);

    this.ManyregisterClick = function() {
        ManyCheckDead(parseInt(this.ManynumberOfClicks()));
        //this.Manyisdead(CheckDead(parseInt(this.numberOfClicks())));
        this.ManynumberOfClicks(this.ManynumberOfClicks()+1);
        this.numberAlive(checknumberalive(parseInt(this.ManynumberOfClicks)));
        this.numberDead(100-this.numberAlive());
        this.Manyisdead(this.numberAlive()==0);

    },this;

    this.ManyresetClicks = function() {
        //appear="😃"
        //document.getElementById("DeadOrAlive").innerHTML = appear;
        //this.isdead(false);
        var ManyAppear = '';
        for (let i=0; i<100; i++){
            if (i%20==0 && i!=0){
                ManyAppear +="\n";
            }
            Manydeadoralive[i]=1;
            ManyAppear +="😃";
        }
        document.getElementById("ManyDeadOrAlive").innerHTML = ManyAppear;

        this.Manyisdead(false);
        this.ManynumberOfClicks(parseInt(this.rangeValue()));
        this.numberAlive(100);
        this.numberDead(0);
    },this;

//    this.numberAlive = ko.pureComputed(function() {
//        return checknumberalive(parseInt(this.ManynumberOfClicks));
//    }, this);

    data0(parseInt(this.rangeValue(),10));
    DieProp(parseInt(this.ageValue(),10));
    LifeExpCalc(parseInt(this.ageValue(),10));
    aliveProb(parseInt(this.ageValue()),parseInt(this.rangeValue(),10));
    CreatePopPyramid(parseInt(this.ageValue(),10))

    this.replot = function(){
        data0(parseInt(this.rangeValue()));
    };

    this.rangeValue.subscribe(function(newValue) {
        data0(parseInt(newValue,10));
        appear="😃"
        document.getElementById("DeadOrAlive").innerHTML = appear;
        this.isdead(false);
        this.numberOfClicks(parseInt(this.rangeValue()));

        var ManyAppear = '';
        for (let i=0; i<100; i++){
            if (i%20==0 && i!=0){
                ManyAppear +="\n";
            }
            Manydeadoralive[i]=1;
            ManyAppear +="😃";
        }
        document.getElementById("ManyDeadOrAlive").innerHTML = ManyAppear;

        this.Manyisdead(false);
        this.numberAlive(100);
        this.numberDead(0);
        this.ManynumberOfClicks(parseInt(this.rangeValue()));

    },this);

    this.ageValue.subscribe(function(newValue) {
        DieProp(parseInt(newValue,10));
        LifeExpCalc(parseInt(newValue,10));
        CalculatePop(parseInt(newValue,10));
        CreatePopPyramid(parseInt(newValue,10));

    });

    this.Gender.subscribe(function(newValue) {
        if (newValue=="Boy"){
            DeathProb = MaleDeathProb;

        }
        if (newValue=="Girl"){
            DeathProb = FemaleDeathProb;
        }
        curr_LifeExp=[]
        for (let i = 0; i < 122; i ++) {
            curr_LifeExp.push(computeLifeExp(121,DeathProb[i],i));
        };
        this.rangeValue.valueHasMutated();
        this.ageValue.valueHasMutated();
    },this);

    ko.computed(function() {
        //var params = { stopage: this.ageValue(), age: this.rangeValue() };
        aliveProb(parseInt(this.rangeValue(),10),parseInt(this.ageValue(),10));
        },
        this);

    this.DyingProb = ko.pureComputed(function() {
        return (DeathProb[this.ageValue()]*100).toFixed(3);
    },this);

    this.GainedYears = ko.pureComputed(function() {
        return YearsGained(parseInt(this.rangeValue()),this.ageValue()).toFixed(2);
    },this);

}

// Activates knockout.js
ko.applyBindings(new ViewModel());

//data0(30);
//DieProp(30);
//LifeExpCalc(30);
//aliveProb(30,25);
myChart4.render();

//CreatePopPyramid(8);

CalculatePop(55);

//console.log(ko.rangeValue);
