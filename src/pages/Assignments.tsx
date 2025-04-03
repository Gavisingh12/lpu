import { Link } from "react-router-dom";
import { ArrowLeft, FileText, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { assignmentData } from "@/services/mockData";

const Assignments = () => {
  const evaluatedAssignments = assignmentData.assignments.filter(a => a.status === "Evaluated");
  const pendingAssignments = assignmentData.assignments.filter(a => a.status === "Pending");

  const getStatusColor = (percentage: number | null) => {
    if (percentage === null) return "bg-gray-100 text-gray-800";
    if (percentage >= 80) return "bg-green-100 text-green-800";
    if (percentage >= 60) return "bg-blue-100 text-blue-800";
    if (percentage >= 40) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <FileText className="h-6 w-6 mr-2 text-ums-blue" />
              Assignments & Evaluations
            </h2>
            <p className="text-gray-500">View your assignment marks and evaluations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                Pending Evaluations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingAssignments.map((assignment) => (
                  <div key={assignment.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{assignment.courseCode}: {assignment.courseName}</h3>
                        <p className="text-sm text-gray-500">{assignment.type}</p>
                        <p className="text-sm text-amber-600 mt-1">
                          Reason: {assignment.reason}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Marks: /{assignment.maxMarks}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                Evaluated Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {evaluatedAssignments.map((assignment) => (
                  <div key={assignment.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{assignment.courseCode}: {assignment.courseName}</h3>
                        <p className="text-sm text-gray-500">{assignment.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          Marks: {assignment.obtainedMarks}/{assignment.maxMarks}
                        </p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs mt-1 ${getStatusColor(assignment.percentage)}`}>
                          {assignment.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Submission Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <p>
                <span className="font-bold">File Format:</span> Submit your assignments in PDF, DOCX, or ZIP format only. Maximum file size: 10MB.
              </p>
              <p>
                <span className="font-bold">Late Submissions:</span> Late submissions may incur a penalty as per the course policy. Check with your course instructor for specific details.
              </p>
              <p>
                <span className="font-bold">Plagiarism:</span> All assignments are checked for plagiarism using automated tools. Ensure your work is original and properly cited.
              </p>
              <p>
                <span className="font-bold">Technical Issues:</span> If you encounter any technical issues while submitting assignments, contact the IT helpdesk immediately at helpdesk@lpu.in.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <footer className="bg-white p-4 border-t text-center text-sm text-gray-500">
        <p>UMS Pwd will expire after 45 days. Do change your pwd on or before 18-05-2025</p>
      </footer>
    </div>
  );
};

export default Assignments;
