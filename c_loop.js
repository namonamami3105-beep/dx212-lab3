
const scores = [72, 88, 95, 60, 81];

let sum = 0;
let max = scores[0];
let countOver80 = 0;

for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i];

  if (scores[i] > max) {
    max = scores[i];
  }

  if (scores[i] > 80) {
    countOver80++;
  }
}

const average = sum / scores.length;

console.log("รวม:", sum);
console.log("เฉลี่ย:", average);
console.log("คะแนนสูงสุด:", max);
console.log("คนที่ได้เกิน 80:", countOver80);
