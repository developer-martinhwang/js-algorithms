const s = "07:05:45PM";
const [hours, minutes, seconds] = s.split(':');

console.log(hours, minutes, seconds[0]+seconds[1])

function timeConversion(s) {
    // Write your code here

  let [hours, minutes, seconds] = s.split(':');
  
  if (hours === '12') {
    hours = '00';
  }

  if (seconds[2]+seconds[3] === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}:${seconds[0]}${seconds[1]}`;
}

console.log(timeConversion(s))