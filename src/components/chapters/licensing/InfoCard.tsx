import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListCheck } from "lucide-react";

interface InfoCardProps {
  title: string;
  items: string[] | { title: string; description: string; }[] | { section: string; tasks: { id: string; label: string; }[]; }[];
  checkedItems?: { [key: string]: boolean };
  onCheckboxChange?: (id: string) => void;
}

export const InfoCard = ({ title, items, checkedItems, onCheckboxChange }: InfoCardProps) => {
  // Helper function to determine the type of items
  const isZoningResearch = items.length > 0 && 'title' in (items[0] as any);
  const isTaskSection = items.length > 0 && 'section' in (items[0] as any);

  return (
    <Card className="bg-[#13171A] [&_*]:text-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <div className="bg-[#00BEFF]/10 p-2 rounded-full">
            <ListCheck className="h-5 w-5 text-[#00BEFF]" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isTaskSection ? (
          <div className="space-y-4">
            {(items as { section: string; tasks: { id: string; label: string; }[]; }[]).map((section, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold">{section.section}</h3>
                <ul className="space-y-1">
                  {section.tasks.map((task) => (
                    <li key={task.id}>{task.label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : isZoningResearch ? (
          <ul className="space-y-2">
            {(items as { title: string; description: string; }[]).map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-2">
            {(items as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};