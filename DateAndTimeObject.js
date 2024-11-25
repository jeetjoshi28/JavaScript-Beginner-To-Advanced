// There are nine ways to create a new date object
// 1 -> new Date()
// 2 -> new Date('2022-01-01')
// 3 -> new Date('2022-01-01T00:00:00')
// 4 -> new Date('2022-01-01T00:00:00.000Z)


const currentDate = new Date();
console.log(currentDate);


const dateString = "2024-02-19T10:44:09.274Z";
const dateFromString = new Date(dateString)
console.log(dateString);

const date1 = new Date(2024, 1);
console.log(date1);

const curMilliSecinds = new Date().getTime();
const milliseconds = 1632090690883;

const dateFromMilliseconds = new Date(curMilliSecinds);
console.log(dateFromMilliseconds);


const date = new Date();
const localDateString = date.toLocaleDateString();
console.log(localDateString);


const date3 = new Date();
const localTime = date3.toLocaleTimeString();
console.log(localTime);
