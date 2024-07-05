
// let emp=[{name:'rakesh',sal:20000},{name:'sagar',sal:23000},
//     {name:'mahesh',sal:25000}]

// let find=emp.filter((data)=>data.name==='rakesh').map((inc)=>inc.sal+5000)

// console.log(find)


// let employees=[101,102,204,140,122]
// let dd=employees.pop()
// console.log(dd)

// let emp=[111,101,203,133,423,234]
// emp.shift()
// // console.log(dd)
// console.log(emp)

// let emp=[111,101,203,133,423,234]
// emp.unshift(2)
// // console.log(dd)
// console.log(emp)

// let emp=[111,101,203,133,423,234]
// let dd=emp.includes(45)
// console.log(dd)
// console.log(emp)

// let emp=[111,101,203,133,423,234]
// let dd=emp.indexOf(203)
// console.log(dd)

// let emp=[111,101,203,133,423,234]
// let dd=emp.slice()
// console.log(dd)

// let emp=[111,253,586,142,102,109]
// let val=emp.push(143)
// console.log(val)
// console.log(emp)


// How would you use the map(), filter(), and reduce() methods in combination to transform an array of objects (representing people with properties like name and age) to get the total age of people whose names start with a specific letter?

// let people=[{name:'rajesh',age:25},{name:'rupesh',age:26},{name:'sagar',age:31},
// {name:'eswar',age:22},{name:'pavan',age:42},{name:'raja',age:35}
// ]
// let val=people.filter((dd)=>dd.name.startsWith('r'))
// .map((val)=>val.age).reduce((a,b)=>a+b,0)
// console.log(val)



// Given an array of objects representing transactions (each with amount and type properties), how can you use the filter(), map(), and reduce() methods to get the total amount of all transactions of a specific type (e.g., "deposit")?

// let acc=[{amount:20000,property:'deposit'},
//     {amount:25000,property:'deposit'},
//     {amount:15000,property:'withdraw'},
//     {amount:16000,property:'deposit'},
//     {amount:36000,property:'withdraw'}]

//     let bal=acc.filter((bal)=>bal.property==='deposit')
//     .map((bal)=>bal.amount).reduce((a,b)=>a+b,0)
//     console.log(bal)






// How can you use the reduceRight() method to reverse an array and simultaneously concatenate all the elements into a single string?

// let num=['kiran ','sai ','srinadh ']

// let rs=num.reduceRight((a,b)=>a+b," ")
// console.log(rs)




// Given an array of mixed data types (numbers, strings, objects, etc.), how can you use the filter() method to create a new array containing only the objects, and then use the map() method to extract a specific property from each object?

let val=[1,2,36,'cat','64',{bike:'xl'},'dog',{bike:'ktm'},{bike:'unicorn'}]

let dd=val.filter((dd)=>Object.keys&&Object.values)
console.log(dd)