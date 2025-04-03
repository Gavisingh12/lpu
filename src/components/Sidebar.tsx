import { Link } from "react-router-dom";
import { BookOpen, Clock, Home, User, FileText, LogOut } from "lucide-react";

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar = ({ onLogout }: SidebarProps) => {
  return (
    <div className="w-24 h-screen bg-sidebar flex flex-col items-center border-r">
      <div className="mt-6 mb-8">
        <img src="https://ums.lpu.in/lpuums/assets/login/img/logos/seal.svg" alt="UMS Logo" className="w-16 h-16" />
      </div>
      
      <nav className="flex flex-col items-center space-y-4 flex-1">
        <Link to="/" className="sidebar-link">
          <Home className="h-6 w-6 mb-1" />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/attendance" className="sidebar-link">
          <Clock className="h-6 w-6 mb-1" />
          <span>Attendance</span>
        </Link>
        
        <Link to="/cgpa" className="sidebar-link">
          <BookOpen className="h-6 w-6 mb-1" />
          <span>CGPA</span>
        </Link>
        
        <Link to="/profile" className="sidebar-link">
          <User className="h-6 w-6 mb-1" />
          <span>Profile</span>
        </Link>
        
        <Link to="/assignments" className="sidebar-link">
          <FileText className="h-6 w-6 mb-1" />
          <span>Assignments</span>
        </Link>
      </nav>

      <button 
        onClick={onLogout}
        className="sidebar-link mb-6 text-red-500 hover:bg-red-500 hover:text-white"
      >
        <LogOut className="h-6 w-6 mb-1" />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default Sidebar;
