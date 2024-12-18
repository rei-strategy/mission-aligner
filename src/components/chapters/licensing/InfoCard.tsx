import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  items: string[];
}

export const InfoCard = ({ title, items }: InfoCardProps) => {
  return (
    <Card className="bg-white [&_*]:text-black">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};