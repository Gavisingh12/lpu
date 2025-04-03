import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { studentProfile } from "@/services/mockData";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-1 flex flex-col">
        <Header 
          studentName={studentProfile.name}
          studentId={studentProfile.id}
          department={studentProfile.program}
        />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
