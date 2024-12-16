import { Inbox, BookOpen } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const chapters = [
  { id: 1, title: "Introduction to Sober Living Homes", content: ["What is a Sober Living Home?", "Legal Requirements", "Initial Planning"] },
  { id: 2, title: "Location and Property Selection", content: ["Zoning Laws", "Neighborhood Research", "Property Requirements"] },
  { id: 3, title: "Business Structure and Licensing", content: ["Legal Entity Formation", "Required Permits", "Insurance"] },
  { id: 4, title: "Financial Planning", content: ["Startup Costs", "Operating Budget", "Pricing Strategy"] },
  { id: 5, title: "House Rules and Policies", content: ["House Guidelines", "Resident Agreements", "Safety Protocols"] },
  { id: 6, title: "Staffing and Management", content: ["Hiring Process", "Staff Training", "Management Structure"] },
  { id: 7, title: "Resident Screening", content: ["Application Process", "Interview Guidelines", "Background Checks"] },
  { id: 8, title: "Recovery Program Integration", content: ["Support Services", "Meeting Requirements", "Progress Monitoring"] },
  { id: 9, title: "Marketing and Outreach", content: ["Marketing Strategy", "Community Relations", "Referral Networks"] },
  { id: 10, title: "Quality Assurance", content: ["Standards Compliance", "Regular Assessments", "Improvement Plans"] },
  { id: 11, title: "Crisis Management", content: ["Emergency Procedures", "Incident Reporting", "Risk Management"] },
  { id: 12, title: "Growth and Expansion", content: ["Scaling Operations", "Multiple Locations", "Long-term Planning"] },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-2 text-accent">
          <BookOpen className="h-6 w-6" />
          <span className="font-semibold">Chapters</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Accordion type="single" collapsible className="w-full">
          {chapters.map((chapter) => (
            <AccordionItem key={chapter.id} value={`chapter-${chapter.id}`}>
              <AccordionTrigger className="px-4 text-sm hover:no-underline hover:bg-accent/10">
                {chapter.id}. {chapter.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4 py-2">
                  {chapter.content.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-accent/10 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SidebarContent>
    </Sidebar>
  );
}