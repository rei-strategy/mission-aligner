import React from 'react';
import { useParams } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";

const chapters = [
  { id: 1, title: "Getting Started", description: "Introduction to sober living homes" },
  { id: 2, title: "Business Planning", description: "Creating your business plan" },
  { id: 3, title: "Client Management", description: "Managing residents effectively" },
  { id: 4, title: "Property Setup", description: "Setting up your facility" },
  { id: 5, title: "Legal Compliance", description: "Understanding regulations" },
  { id: 6, title: "Financial Planning", description: "Managing finances" },
  { id: 7, title: "Safety Protocols", description: "Ensuring resident safety" },
  { id: 8, title: "Community Relations", description: "Building relationships" },
  { id: 9, title: "Documentation", description: "Record keeping" },
  { id: 10, title: "Certification", description: "Getting certified" },
  { id: 11, title: "Marketing", description: "Promoting your business" },
  { id: 12, title: "Operations", description: "Day-to-day management" }
];

const Chapter = () => {
  const { id } = useParams();
  const chapterId = parseInt(id || "1");
  const chapter = chapters.find(c => c.id === chapterId);

  if (!chapter) return null;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black-800">
        <AppSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <header className="text-center mb-10 pt-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-3">Chapter {chapter.id}: {chapter.title}</h1>
              <p className="text-lg text-gray-600">{chapter.description}</p>
            </header>

            <Separator className="bg-gray-200 my-10" />
            
            {chapterId !== 1 && (
              <section className="bg-white rounded-xl p-8 shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt={`Chapter ${chapter.id} content`}
                  className="w-full h-auto rounded-lg"
                />
              </section>
            )}
            
            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
              <p className="text-gray-600 text-lg">
                This section contains supplementary materials and resources to help you implement the concepts covered in Chapter {chapter.id}.
              </p>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Chapter;