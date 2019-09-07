class Student {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.scores = [];
    this.averageGrade = 0;
  }
  logScore(score) {
    this.scores.push(score);
    this.averageGrade = (this.scores[0] + this.scores[1]) / 2;

  }

}
module.exports = Student;
