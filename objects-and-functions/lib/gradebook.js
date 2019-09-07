class Course {
  constructor(className, level) {
    this.className = className;
    this.level = level;
  }
}


class GradeBook {
  constructor(course, instructor) {
    this.course = course;
    this.instructor = 'Ms. Frizzle';
  }

}


module.exports = GradeBook;
