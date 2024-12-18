import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListCheck } from "lucide-react";

interface InfoCardProps {
  title: string;
  items: string[] | { title: string; description: string }[];
}

export const InfoCard = ({ title, items }: InfoCardProps) => {
  const isZoningResearch = items.length > 0 && typeof items[0] !== 'string';

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
        {isZoningResearch ? (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <strong>{(item as { title: string; description: string }).title}:</strong> {(item as { title: string; description: string }).description}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
