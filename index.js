/* Your Code Here */
function createEmployeeRecord(employeeArray){
    const [ firstName, familyName, title, payPerHour] = employeeArray
    return{
       firstName: firstName,
       familyName: familyName,
       title: title,
       payPerHour: payPerHour,
       timeInEvents: [],
       timeOutEvents: [],
    }
   }
   let createEmployeeRecords = function(employeeArrayData) {
       return employeeArrayData.map(function(employeeArray){
           return createEmployeeRecord(employeeArray)
       })
   }
   let createTimeInEvent = function( dateStamp){
       let [date, hour] = dateStamp.split(" ")
   
       this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
   
   let createTimeOutEvent = function(dateStamp){
       let [date, hour] = dateStamp.split(" ")
   
       this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
   let hoursWorkedOnDate = function( date){
       let inEvent = this.timeInEvents.find(function(e){
           return e.date === date
       })
   
       let outEvent = this.timeOutEvents.find(function(e){
           return e.date === date
       })
   
       return (outEvent.hour - inEvent.hour) / 100
   }
   let wagesEarnedOnDate = function(date){
           const payPerHr = this.payPerHour
           const wagesEarned = hoursWorkedOnDate.call(this,date) * payPerHr
         return parseFloat(wagesEarned.toString())
   }
   function allWagesFor(){
       const datesWorked = this.timeInEvents.map(element => element.date)
       const totalWages = datesWorked.reduce((total, date) =>{
           return total + wagesEarnedOnDate.call(this, date)
       },0)

       return totalWages
   }
   let findEmployeeByFirstName = function(srcArray, firstName) {
       return srcArray.find(function(rec){
         return rec.firstName === firstName
       })
     }
     let calculatePayroll = function(arrayOfEmployeeRecords){
       return arrayOfEmployeeRecords.reduce((total,employeeWage)=>{
           return total + allWagesFor.call(employeeWage)
       }, 0)
   }
