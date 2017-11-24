export default class TimerUtil {
    static checkNumber(value) {
        return (typeof(value) == "number")
    }
    static createTimeInSeconds(timerObj) {
        var time = 0
        var time_properites = [{key:"seconds",value:1},{key:"minutes",value:60},{key:"hours",value:3600}]
        for(var i=0;i<time_properites.length;i++) {
            var time_property = time_properites[i]
            if(timerObj[time_property.key] && this.checkNumber(timerObj[time_property.key])) {
                time += timerObj[time_property.key]*time_property.value
            }
        }
        return time
    }
    static getCurrTimeFromDate() {
        const d = new Date()
        const time = d.getTime()
        return Math.floor(time/1000)
    }
}
