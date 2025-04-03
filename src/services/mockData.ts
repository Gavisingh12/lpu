// Student profile
export const studentProfile = {
  vid: "12303557",
  name: "Gavinder Singh",
  dateOfBirth: "04/15/2005",
  category: "GEN",
  gender: "M",
  section: "K23GN",
  program: "B.Tech. (Computer Science and Engineering)",
  semester: "P132",
  
  // Contact Information
  email: "rathorebanna4152@gmail.com",
  lpuEmail: "gavinder.singh23@lpu.in",
  phone: "9680095920",
  landline: "",

  // Family Information
  fatherName: "Bhawani Singh",
  fatherMobile: "9116350746",
  fatherEmail: "",
  motherName: "Seema Kanwar",
  motherMobile: "",
  emergencyContact: "",

  // Permanent Address
  permanentAddress: {
    addressLine1: "C-96 Priyanshu Vihar, Sirsi",
    addressLine2: "",
    townCity: "Jaipur (Rajasthan)",
    district: "Jaipur",
    stateUT: "Rajasthan",
    country: "India",
    pinCode: "302012"
  },

  // Corresponding Address (same as permanent in this case)
  correspondingAddress: {
    addressLine1: "C-96 Priyanshu Vihar, Sirsi",
    addressLine2: "",
    townCity: "Jaipur (Rajasthan)",
    district: "Jaipur",
    stateUT: "Rajasthan",
    country: "India",
    pinCode: "302012"
  },

  // Paying Guest Address (empty in this case)
  pgAddress: {
    hnoBuilding: "",
    colony: "",
    townCity: "",
    district: "",
    stateUT: "",
    country: ""
  },

  // International Student Details (empty in this case)
  international: {
    countryName: "",
    passportNo: "",
    passportIssueDate: "",
    passportExpiryDate: "",
    visaNo: "",
    visaIssueDate: "",
    visaExpiryDate: "",
    nationalIdNo: "",
    froPermitNo: "",
    froIssueDate: "",
    froExpiryDate: ""
  },

  enrollmentDate: "2021-08-15",
  expectedGraduation: "2025-05-30",
  advisor: "Dr. Amit Kumar"
};

// CGPA data by semester
export const cgpaData = [
  { semester: "Semester 1", gpa: 6.95, credits: 24, status: "Completed" },
  { semester: "Semester 2", gpa: 6.90, credits: 24, status: "Completed" },
  { semester: "Semester 3", gpa: 6.50, credits: 24, status: "Completed" },
  { semester: "Current (Sem 4)", gpa: 0, credits: 24, status: "Awaited" },
];

// Calculate CGPA
export const calculateCGPA = () => {
  const completedSemesters = cgpaData.filter(sem => sem.status === "Completed");
  const totalPoints = completedSemesters.reduce((sum, sem) => sum + (sem.gpa * sem.credits), 0);
  const totalCredits = completedSemesters.reduce((sum, sem) => sum + sem.credits, 0);
  
  // Calculate CGPA to 2 decimal places
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "N/A";
};

// Course grades data
export const courseGrades = [
  {
    semester: "Current Semester (4)",
    status: "Awaited",
    courses: [
      { code: "CSE310", name: "PROGRAMMING IN JAVA", credits: 3, status: "Awaited" },
      { code: "CSE316", name: "OPERATING SYSTEMS", credits: 3, status: "Awaited" },
      { code: "CSE325", name: "OPERATING SYSTEMS LABORATORY", credits: 2, status: "Awaited" },
      { code: "CSE408", name: "DESIGN AND ANALYSIS OF ALGORITHMS", credits: 3, status: "Awaited" },
      { code: "INT217", name: "INTRODUCTION TO DATA MANAGEMENT", credits: 3, status: "Awaited" },
      { code: "INT375", name: "DATA SCIENCE TOOLBOX: PYTHON PROGRAMMING", credits: 3, status: "Awaited" },
      { code: "INT428", name: "ARTIFICIAL INTELLIGENCE ESSENTIALS", credits: 3, status: "Awaited" },
      { code: "PEA305", name: "ANALYTICAL SKILLS-I", credits: 2, status: "Awaited" }
    ]
  },
  {
    semester: "Semester 3",
    status: "Completed",
    courses: [
      { code: "CSE101", name: "COMPUTER PROGRAMMING", credits: 3, grade: "B", gpa: 7.0 },
      { code: "CSE121", name: "ORIENTATION TO COMPUTING-II", credits: 3, grade: "A+", gpa: 10.0 },
      { code: "CSE320", name: "SOFTWARE ENGINEERING", credits: 3, grade: "C", gpa: 6.0 },
      { code: "INT306", name: "DATABASE MANAGEMENT SYSTEM", credits: 3, grade: "A+", gpa: 10.0 },
      { code: "MEC136", name: "ENGINEERING GRAPHICS AND DIGITAL FABRICATION", credits: 3, grade: "D", gpa: 5.0 },
      { code: "MTH401", name: "DISCRETE MATHEMATICS", credits: 3, grade: "B", gpa: 7.0 },
      { code: "PEL121", name: "COMMUNICATION SKILLS-I", credits: 3, grade: "A", gpa: 9.0 },
      { code: "PHY110", name: "ENGINEERING PHYSICS", credits: 3, grade: "B", gpa: 7.0 }
    ]
  },
  {
    semester: "Semester 2",
    status: "Completed",
    courses: [
      { code: "CSE202", name: "OBJECT ORIENTED PROGRAMMING", credits: 3, grade: "B+", gpa: 8.0 },
      { code: "CSE205", name: "DATA STRUCTURES AND ALGORITHM", credits: 3, grade: "C", gpa: 6.0 },
      { code: "CSE211", name: "COMPUTER ORGANIZATION DESIGN", credits: 3, grade: "B", gpa: 7.0 },
      { code: "CSE306", name: "COMPUTER NETWORKS", credits: 3, grade: "A", gpa: 9.0 },
      { code: "CSE307", name: "INTERNETWORKING ESSENTIALS", credits: 3, grade: "A", gpa: 9.0 },
      { code: "GEN231", name: "COMMUNITY DEVELOPMENT PROJECT", credits: 3, grade: "B+", gpa: 8.0 },
      { code: "MTH302", name: "PROBABILITY AND STATICS", credits: 3, grade: "B", gpa: 7.0 },
      { code: "PEL132", name: "COMMUNITY SKILLS-II", credits: 3, grade: "B+", gpa: 8.0 }
    ]
  },
  {
    semester: "Semester 1",
    status: "Completed",
    courses: [
      { code: "CHE110", name: "ENVIRONMENTAL STUDIES", credits: 3, grade: "B+", gpa: 8.0 },
      { code: "CSE111", name: "ORIENTATION OF COMPUTING", credits: 3, grade: "B+", gpa: 8.0 },
      { code: "CSE326", name: "INTERNET PROGRAMMING LABORATORY", credits: 3, grade: "A", gpa: 9.0 },
      { code: "CSE249", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING", credits: 3, grade: "B+", gpa: 8.0 },
      { code: "CSE279", name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY", credits: 3, grade: "B+", gpa: 8.0 },
      { code: "INT108", name: "PYTHON PROGRAMMING", credits: 3, grade: "A", gpa: 9.0 },
      { code: "MTH174", name: "ENGINEERING MATHEMATICS", credits: 3, grade: "C", gpa: 6.0 },
      { code: "PES318", name: "SOFT SKILLS-I", credits: 3, grade: "B+", gpa: 8.0 }
    ]
  }
];

// Adding missing exports that Dashboard.tsx requires
export const attendanceData = {
  overall: 79,
  courses: [
    { code: "CSE310", name: "PROGRAMMING IN JAVA", attendance: 82, classes: 45, present: 37 },
    { code: "CSE316", name: "OPERATING SYSTEMS", attendance: 76, classes: 45, present: 34 },
    { code: "INT375", name: "DATA SCIENCE TOOLBOX: PYTHON PROGRAMMING", attendance: 80, classes: 45, present: 36 },
    { code: "INT428", name: "ARTIFICIAL INTELLIGENCE ESSENTIALS", attendance: 73, classes: 45, present: 33 },
    { code: "CSE408", name: "DESIGN AND ANALYSIS OF ALGORITHMS", attendance: 84, classes: 45, present: 38 }
  ],
  monthly: [
    { month: "January", attendance: 82 },
    { month: "February", attendance: 80 },
    { month: "March", attendance: 77 },
    { month: "April", attendance: 77 }
  ]
};

export const pendingAssignments = [
  { 
    id: 1, 
    title: "Java Programming Assignment 3", 
    course: "CSE310", 
    dueDate: "2025-04-10", 
    status: "Pending" 
  },
  { 
    id: 2, 
    title: "OS Lab Exercise 5", 
    course: "CSE325", 
    dueDate: "2025-04-12", 
    status: "Pending" 
  },
  { 
    id: 3, 
    title: "Algorithm Analysis Report", 
    course: "CSE408", 
    dueDate: "2025-04-15", 
    status: "Pending" 
  }
];

export const announcements = [
  {
    id: 1,
    title: "Mid Semester Exam Schedule",
    content: "Mid semester exams will begin from April 10th, 2025. Please check the exam schedule on the university portal.",
    date: "2025-04-03"
  },
  {
    id: 2,
    title: "Campus Placement Drive",
    content: "Major tech companies will be visiting for campus placements on April 22nd. Register through the placement portal.",
    date: "2025-04-02"
  },
  {
    id: 3,
    title: "Lab Maintenance Notice",
    content: "Computer labs will be closed for maintenance on April 5th and 6th. Plan your work accordingly.",
    date: "2025-04-01"
  },
  {
    id: 4,
    title: "Holiday Announcement",
    content: "The university will remain closed on April 14th on account of Dr. Ambedkar Jayanti.",
    date: "2025-03-30"
  }
];

export const assignmentData = {
  assignments: [
    {
      id: 1,
      courseCode: "CSE316",
      courseName: "OPERATING SYSTEMS",
      type: "Project",
      status: "Pending",
      maxMarks: 30,
      obtainedMarks: null,
      percentage: null,
      reason: "Not yet evaluated"
    },
    {
      id: 2,
      courseCode: "CSE316",
      courseName: "OPERATING SYSTEMS",
      type: "Test",
      status: "Evaluated",
      maxMarks: 30,
      obtainedMarks: 24.25,
      percentage: 80.8,
      reason: null
    },
    {
      id: 3,
      courseCode: "CSE408",
      courseName: "DESIGN AND ANALYSIS OF ALGORITHMS",
      type: "Test",
      status: "Evaluated",
      maxMarks: 30,
      obtainedMarks: 17.5,
      percentage: 58,
      reason: null
    },
    {
      id: 4,
      courseCode: "INT217",
      courseName: "INTRODUCTION TO DATA MANAGEMENT",
      type: "Test",
      status: "Evaluated",
      maxMarks: 30,
      obtainedMarks: 27,
      percentage: 90,
      reason: null
    },
    {
      id: 5,
      courseCode: "INT217",
      courseName: "INTRODUCTION TO DATA MANAGEMENT",
      type: "Project",
      status: "Pending",
      maxMarks: 100,
      obtainedMarks: null,
      percentage: null,
      reason: "Not yet evaluated"
    },
    {
      id: 6,
      courseCode: "INT375",
      courseName: "DATA SCIENCE TOOLBOX: PYTHON PROGRAMMING",
      type: "Test",
      status: "Evaluated",
      maxMarks: 30,
      obtainedMarks: 25,
      percentage: 84.6,
      reason: null
    },
    {
      id: 7,
      courseCode: "PEA305",
      courseName: "ANALYTICAL SKILLS-I",
      type: "Test",
      status: "Evaluated",
      maxMarks: 30,
      obtainedMarks: 14,
      percentage: 46.7,
      reason: null
    },
    {
      id: 8,
      courseCode: "INT428",
      courseName: "AI ESSENTIALS",
      type: "Test",
      status: "Evaluated",
      maxMarks: 30,
      obtainedMarks: 20,
      percentage: 74,
      reason: null
    },
    {
      id: 9,
      courseCode: "CSE325",
      courseName: "OPERATING SYSTEM LABORATORY",
      type: "P1: Intro to Linux commands",
      status: "Evaluated",
      maxMarks: 100,
      obtainedMarks: 72,
      percentage: 72,
      reason: null
    }
  ]
};
