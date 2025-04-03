
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { studentProfile, cgpaData, courseGrades, calculateCGPA } from "@/services/mockData";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const CGPADetail = () => {
  const currentCGPA = calculateCGPA();
  
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        studentName={studentProfile.name} 
        studentId={studentProfile.id} 
        department={studentProfile.program} 
      />
      
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-ums-blue" />
              CGPA Analysis
            </h2>
            <p className="text-gray-500">View your academic performance across semesters</p>
          </div>
          <button className="ml-auto flex items-center bg-ums-blue text-white px-3 py-2 rounded-md text-sm">
            <Download className="h-4 w-4 mr-1" /> Download Report
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Cumulative GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">{currentCGPA}</div>
              <p className="text-gray-500 text-sm mt-1">Out of 4.0</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Semester GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">{cgpaData[cgpaData.length - 1].gpa.toFixed(1)}</div>
              <p className="text-gray-500 text-sm mt-1">Out of 4.0</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Credits Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-ums-blue">
                {cgpaData.reduce((total, sem) => total + sem.credits, 0)}
              </div>
              <p className="text-gray-500 text-sm mt-1">Out of 160 required</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Academic Standing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">Good</div>
              <p className="text-gray-500 text-sm mt-1">Dean's List Eligible</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>GPA Trend by Semester</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cgpaData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semester" />
                  <YAxis domain={[0, 4]} />
                  <Tooltip />
                  <Bar dataKey="gpa" name="GPA" fill="#006699" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Credits by Semester</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cgpaData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semester" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="credits" name="Credits" fill="#e67e22" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Course Grades - Current Semester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Course Code</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Course Name</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Credits</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Grade</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseGrades[0].courses.map((course, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="px-4 py-3">{course.code}</td>
                        <td className="px-4 py-3">{course.name}</td>
                        <td className="px-4 py-3">{course.credits}</td>
                        <td className="px-4 py-3 font-medium">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                            course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                            course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {course.grade}
                          </span>
                        </td>
                        <td className="px-4 py-3">{course.gpa.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Course Grades - Semester 5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Course Code</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Course Name</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Credits</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Grade</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseGrades[1].courses.map((course, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="px-4 py-3">{course.code}</td>
                        <td className="px-4 py-3">{course.name}</td>
                        <td className="px-4 py-3">{course.credits}</td>
                        <td className="px-4 py-3 font-medium">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                            course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                            course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {course.grade}
                          </span>
                        </td>
                        <td className="px-4 py-3">{course.gpa.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Course Grades - Semester 4</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Course Code</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Course Name</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Credits</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">Grade</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseGrades[2].courses.map((course, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="px-4 py-3">{course.code}</td>
                        <td className="px-4 py-3">{course.name}</td>
                        <td className="px-4 py-3">{course.credits}</td>
                        <td className="px-4 py-3 font-medium">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                            course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                            course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {course.grade}
                          </span>
                        </td>
                        <td className="px-4 py-3">{course.gpa.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="bg-white p-4 border-t text-center text-sm text-gray-500">
        <p>UMS Pwd will expire after 45 days. Do change your pwd on or before 18-05-2025</p>
      </footer>
    </div>
  );
};

export default CGPADetail;
