import { Home, BookOpen, Users, Building2, Scale, Coins, Shield, HeartHandshake, FileSpreadsheet, BadgeCheck, Presentation, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger
} from "@/components/ui/sidebar";

const chapters = [
  { id: 1, title: "Getting Started", icon: Home, description: "Introduction to sober living homes" },
  { id: 2, title: "Business Planning", icon: BookOpen, description: "Creating your business plan" },
  { id: 3, title: "Client Management", icon: Users, description: "Managing residents effectively" },
  { id: 4, title: "Property Setup", icon: Building2, description: "Setting up your facility" },
  { id: 5, title: "Legal Compliance", icon: Scale, description: "Understanding regulations" },
  { id: 6, title: "Financial Planning", icon: Coins, description: "Managing finances" },
  { id: 7, title: "Safety Protocols", icon: Shield, description: "Ensuring resident safety" },
  { id: 8, title: "Community Relations", icon: HeartHandshake, description: "Building relationships" },
  { id: 9, title: "Documentation", icon: FileSpreadsheet, description: "Record keeping" },
  { id: 10, title: "Certification", icon: BadgeCheck, description: "Getting certified" },
  { id: 11, title: "Marketing", icon: Presentation, description: "Promoting your business" },
  { id: 12, title: "Operations", icon: Settings, description: "Day-to-day management" }
];

const ChapterCard = ({ chapter, onClick }: { chapter: typeof chapters[0]; onClick: () => void }) => {
  const Icon = chapter.icon;
  
  return (
    <Card 
      className="bg-black-600 hover:bg-black-500 cursor-pointer transition-colors group border-black-500"
      onClick={onClick}
    >
      <CardContent className="p-4 flex items-start space-x-4">
        <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
          <Icon className="h-5 w-5 text-blue-300" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium leading-none text-gray-100">Chapter {chapter.id}</h3>
          <p className="text-sm text-gray-400">{chapter.title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export function AppSidebar() {
  const navigate = useNavigate();

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
              onClick={() => handleChapterClick(chapter.id)}
            />
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}