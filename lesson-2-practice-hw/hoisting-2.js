//Hoisting 2
//URL
//https://github.com/dmfilipenko/datediff/blob/master/datediff.js

(function(global) {
    //var global;  - I'm not sure that this is correct ))
    function datediff(fromDate, toDate){
        var startDate;
        
        if (!fromDate){
            throw new Error('Date should be specified');
        }

        startDate = new Date(1970, 0, 1, 0).getTime(),
        now = new Date(),
        toDate = toDate && toDate instanceof Date ? toDate : now,
        diff = toDate - fromDate,
        date = new Date(startDate + diff),
        years = date.getFullYear() - 1970,
        months = date.getMonth(),
        days = date.getDate() - 1,
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        diffDate = {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (years < 0){
            return diffDate;
        }

        diffDate.years = years > 0 ? years : 0;
        diffDate.months = months > 0 ? months : 0;
        diffDate.days = days > 0 ? days : 0;
        diffDate.hours = hours > 0 ? hours : 0;
        diffDate.minutes = minutes > 0 ? minutes : 0;
        diffDate.seconds = seconds > 0 ? seconds : 0;

        return diffDate;
    }


    if (typeof define === "function" && define.amd){
        define(function(){  //can't understand how this function should be hoisted.
            return datediff;
        });
    } else if (typeof module === "object" && module.exports){
        module.exports = datediff;  //module object too. 
    } else {
        global.datediff = datediff;
    }
})(this);
