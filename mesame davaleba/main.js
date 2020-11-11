// დაწერეთ ფუნქცია რომელიც ღებულობს სტუდენტების 2 მასივს
// (თითო სტუდენტი წარმოდგენილია ობიექტით შემდეგი ველებით {id: number, name: string, gpa: number}) და დააბრუნებს უდიდესი gpa-ს მქონე 5 სტუდენტს მასივის სახით. თუ რამდენიმე სტუდენტი არის ერთნაირი
// gpa-თი და შედის ტოპ 5 gpa-ებში უნდა დააბრუნოს ყველა ასეთი სტუდენტი (მაგალითად თუ სტუდენტებს შემდეგი gpa აქვთ: [2, 2, 3.5, 3.5 4, 4, 4, 4] ფუნქციამ უნდა დააბრუნოს შემდეგი gpa-ს მქონე სტუდენტი:
// [3.5, 3.5 4, 4, 4, 4] მიუხედავად იმსია რომ 5-ზე მეტი იქნება)

// interface Student {
//   id: number;
//   name: String;
//   gpa: number
// }

function getTopStudents(studentsArray1, studentsArray2) {
    const mergedArrays = [...studentsArray1, ...studentsArray2];
  
    const sortedStudents = mergedArrays.sort((student1, student2) => {
      return student2.gpa - student1.gpa;
    });
  
    while (sortedStudents.length > 5) {
      sortedStudents.pop();
    }
  
    return sortedStudents;
  }
  
  [
    { id: 1, name: "mate", gpa: 4 },
    { id: 2, name: "dato", gpa: 2 },
    { id: 1, name: "nino", gpa: 1 },
  ];
  [
    { id: 1, name: "mate", gpa: 3.5 },
    { id: 2, name: "dato", gpa: 2.5 },
    { id: 1, name: "nino", gpa: 0.3 },
  ];
  getTopStudents();