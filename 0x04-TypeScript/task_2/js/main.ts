interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
  workFromHome(): string {
    return 'working from home';
  }

}

class Teacher implements TeacherInterface {
  getCoffeeBreak(): string {
    return 'cannot have a break'
  }
  workTeacherTasks(): string {
    return 'Getting to teacher tasks'
  }
  workFromHome(): string {
      return 'Cannot work from home';
  }
}

function createEmployee(salary: string | number ) {
  if (typeof(salary) === 'number' && salary < 500 ) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Teacher | Director) : Boolean {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  if (employee instanceof Director) {
    employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}
