// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// const formSchema = z.object({
//   fullName: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().optional(),
//   budget: z.string(),
//   projectDescription: z.string().min(10, "Please provide more details"),
// });

export function ContactForm() {
  return (
    <Card className="border-0 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">
          Share Your Requirements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <Input
            placeholder="Full Name*"
            className="bg-white/5 text-white placeholder:text-gray-400 h-12"
          />
          <Input
            type="email"
            placeholder="Email Address*"
            className="bg-white/5 text-white placeholder:text-gray-400"
          />
          <Input
            placeholder="Contact Number"
            className="bg-white/5 text-white placeholder:text-gray-400"
          />
          <Select>
            <SelectTrigger className="bg-white/5 text-white">
              <SelectValue placeholder="Select Budget Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Less than $10k</SelectItem>
              <SelectItem value="medium">$10k - $50k</SelectItem>
              <SelectItem value="large">$50k - $100k</SelectItem>
              <SelectItem value="enterprise">$100k+</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Describe Your Project/Idea in Brief"
            className="min-h-[100px] bg-white/5 text-white placeholder:text-gray-400"
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Get Started →
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
