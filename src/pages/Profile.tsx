import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Calendar, GraduationCap, User, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { studentProfile } from "@/services/mockData";

const Profile = () => {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <User className="h-6 w-6 mr-2 text-ums-blue" />
              Student Profile
            </h2>
            <p className="text-gray-500">View and manage your profile information</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="lg:col-span-1">
            <Card className="dashboard-card">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-gray-500">{studentProfile.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold">{studentProfile.name}</h3>
                <p className="text-gray-500 mb-2">{studentProfile.vid}</p>
                <p className="text-sm text-gray-500 mb-1">{studentProfile.program}</p>
                <p className="text-sm text-gray-500">Section: {studentProfile.section}</p>
                
                <div className="w-full mt-6 space-y-3">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{studentProfile.lpuEmail}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{studentProfile.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span>DOB: {studentProfile.dateOfBirth}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Category: {studentProfile.category}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="personal">Personal Information</TabsTrigger>
                <TabsTrigger value="address">Address Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <Card className="dashboard-card mb-6">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4">Basic Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">VID</span>
                            <span className="font-medium">{studentProfile.vid}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Full Name</span>
                            <span className="font-medium">{studentProfile.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Date of Birth</span>
                            <span className="font-medium">{studentProfile.dateOfBirth}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Gender</span>
                            <span className="font-medium">{studentProfile.gender}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Category</span>
                            <span className="font-medium">{studentProfile.category}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Personal Email</span>
                            <span className="font-medium">{studentProfile.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">LPU Email</span>
                            <span className="font-medium">{studentProfile.lpuEmail}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Mobile</span>
                            <span className="font-medium">{studentProfile.phone}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Landline</span>
                            <span className="font-medium">{studentProfile.landline || "Not provided"}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-semibold mb-4">Family Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Father's Name</span>
                            <span className="font-medium">{studentProfile.fatherName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Father's Mobile</span>
                            <span className="font-medium">{studentProfile.fatherMobile}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Father's Email</span>
                            <span className="font-medium">{studentProfile.fatherEmail || "Not provided"}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Mother's Name</span>
                            <span className="font-medium">{studentProfile.motherName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Mother's Mobile</span>
                            <span className="font-medium">{studentProfile.motherMobile || "Not provided"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Emergency Contact</span>
                            <span className="font-medium">{studentProfile.emergencyContact || "Not provided"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="address">
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle>Address Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Permanent Address
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Address Line 1</span>
                            <span className="font-medium">{studentProfile.permanentAddress.addressLine1}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Town/City</span>
                            <span className="font-medium">{studentProfile.permanentAddress.townCity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">District</span>
                            <span className="font-medium">{studentProfile.permanentAddress.district}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">State/UT</span>
                            <span className="font-medium">{studentProfile.permanentAddress.stateUT}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Country</span>
                            <span className="font-medium">{studentProfile.permanentAddress.country}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Pin Code</span>
                            <span className="font-medium">{studentProfile.permanentAddress.pinCode}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-4 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Corresponding Address
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Address Line 1</span>
                            <span className="font-medium">{studentProfile.correspondingAddress.addressLine1}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Town/City</span>
                            <span className="font-medium">{studentProfile.correspondingAddress.townCity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">District</span>
                            <span className="font-medium">{studentProfile.correspondingAddress.district}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">State/UT</span>
                            <span className="font-medium">{studentProfile.correspondingAddress.stateUT}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Country</span>
                            <span className="font-medium">{studentProfile.correspondingAddress.country}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Pin Code</span>
                            <span className="font-medium">{studentProfile.correspondingAddress.pinCode}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <footer className="bg-white p-4 border-t text-center text-sm text-gray-500">
        <p>UMS Pwd will expire after 45 days. Do change your pwd on or before 18-05-2025</p>
      </footer>
    </div>
  );
};

export default Profile;
