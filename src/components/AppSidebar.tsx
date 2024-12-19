import { Home, BookOpen, Users, Building2, Scale, Coins, Shield, HeartHandshake, FileSpreadsheet, BadgeCheck, Presentation, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger
} from "@/components/ui/sidebar";

const chapters = [
  { id: 1, title: "Defining Your Vision and Purpose", icon: Home, description: "Introduction to sober living homes" },
  { id: 2, title: "Legal and Business Setup", icon: BookOpen, description: "Creating your business plan" },
  { id: 3, title: "Financial Planning and Budgeting", icon: Coins, description: "Managing finances effectively" },
  { id: 4, title: "Market Research and Analysis", icon: Presentation, description: "Understanding your market" },
  { id: 5, title: "Finding the Right Property", icon: Building2, description: "Property selection process" },
  { id: 6, title: "Setting Up Your Sober Living Home", icon: Settings, description: "Facility setup and preparation" },
  { id: 7, title: "Licensing, Certifications, and Inspections", icon: BadgeCheck, description: "Meeting legal requirements" },
  { id: 8, title: "Staffing Your Sober Living Home", icon: Users, description: "Building your team" },
  { id: 9, title: "Developing Policies and Procedures", icon: FileSpreadsheet, description: "Creating operational guidelines" },
  { id: 10, title: "Marketing and Networking", icon: HeartHandshake, description: "Building your presence" },
  { id: 11, title: "Managing Daily Operations", icon: Scale, description: "Day-to-day management" },
  { id: 12, title: "Ensuring Long-Term Success", icon: Shield, description: "Sustainability strategies" }
];

const ChapterCard = ({ chapter, isActive, onClick }: { chapter: typeof chapters[0]; isActive: boolean; onClick: () => void }) => {
  const Icon = chapter.icon;
  
  return (
    <Card 
      className={`${
        isActive 
          ? "bg-blue-900/50 border-blue-500" 
          : "bg-black-600 hover:bg-black-500 border-black-500"
      } cursor-pointer transition-colors group`}
      onClick={onClick}
    >
      <CardContent className="p-4 flex items-start space-x-4">
        <div className={`${
          isActive 
            ? "bg-blue-500/20" 
            : "bg-blue-600/10 group-hover:bg-blue-600/20"
          } p-2 rounded-lg transition-colors`}>
          <Icon className={`h-5 w-5 ${isActive ? "text-blue-400" : "text-blue-300"}`} />
        </div>
        <div className="space-y-1">
          <h3 className={`font-medium leading-none ${isActive ? "text-blue-100" : "text-gray-100"}`}>
            Chapter {chapter.id}
          </h3>
          <p className={`text-sm ${isActive ? "text-blue-200" : "text-gray-400"}`}>
            {chapter.title}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentChapterId = parseInt(location.pathname.split('/').pop() || '0');

  const handleChapterClick = (chapterId: number) => {
    navigate(`/chapter/${chapterId}`);
  };

  return (
    <Sidebar className="bg-black-800 border-black-600">
      <SidebarHeader className="border-b border-black-600 px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-100">Chapters</h2>
        <p className="text-sm text-gray-400">Launch your sober living journey</p>
      </SidebarHeader>
      <SidebarContent className="px-6 py-4">
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <ChapterCard 
              key={chapter.id} 
              chapter={chapter} 
              isActive={chapter.id === currentChapterId}
              onClick={() => handleChapterClick(chapter.id)}
            />
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}