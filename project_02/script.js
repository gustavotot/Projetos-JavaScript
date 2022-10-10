
var ms = 00;
var ss = 00;
var mm = 00;
var hh = 00;

var time = 1000/60;
var cron;

var start_btn = document.getElementById("start_btn");
var pause_btn = document.getElementById("pause_btn");
var stop_btn = document.getElementById("stop_btn");
function start(){
    cron = setInterval(timer,time)
    start_btn.disabled = true;
    pause_btn.disabled = false;
    stop_btn.disabled = false;
}
function pause(){
    clearInterval(cron)
    start_btn.disabled = false;
    pause_btn.disabled = true;
}
function stop(){
    clearInterval(cron)
    ms = 0;
    ss = 0;
    mm = 0;
    hh = 0;
    document.getElementById("cron").innerText = `00:00:00:00`

    start_btn.disabled = false;
    pause_btn.disabled = true;
    stop_btn.disabled = true;
}

function timer(){
    ms++;
    if(ms == 60){
        ss++;
        ms = 0;

        if(ss == 60){
            mm++;
            ss = 0;

            if(mm == 60){ 
                hh++;
                mm = 0;
            }
        }
    }
    var format = (hh < 10 ? '0'+hh : hh) + ':' + (mm < 10 ? '0'+mm : mm) + ':' + (ss < 10 ? '0'+ss : ss) + ':' + (ms < 10 ? '0'+ms : ms);
    document.getElementById("cron").innerText = format
}