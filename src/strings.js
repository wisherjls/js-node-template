const student1 = {
	name: "Jonathan Sayers",
	course: "Web Development 1",
	grade: 95,
};

function displayStudentInfo(student) {
	return `${student.name} is taking ${student.course} and expects to earn ${student.grade}%`;
}

console.log(displayStudentInfo(student1));
