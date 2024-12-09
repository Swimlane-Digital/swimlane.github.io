// components/forms/cost-estimation.tsx
"use client";

// import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid contact number is required"),
  budget: z.string().min(1, "Please select a budget range"),
  projectDescription: z
    .string()
    .min(10, "Please provide more details about your project"),
  nda: z.boolean(),
  captcha: z.string().min(1, "Please solve the captcha"),
});

const budgetRanges = [
  { value: "small", label: "Less than $50k" },
  { value: "medium", label: "$50k - $100k" },
  { value: "large", label: "$100k - $500k" },
  { value: "enterprise", label: "$500k+" },
];

export function CostEstimation() {
  //   const [captchaResult, setCaptchaResult] = useState<string>('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      budget: "",
      projectDescription: "",
      nda: false,
      captcha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (parseInt(values.captcha) !== 7) {
      form.setError("captcha", { message: "Incorrect result" });
      return;
    }
    // Handle form submission
    console.log(values);
  }

  return (
    <section className="w-full bg-gradient-to-br from-purple-900 via-black to-blue-900 py-24">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center">
        {/* Left Content */}
        <div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Estimated Custom Software Development Cost
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            We take a comprehensive approach to providing accurate and
            transparent quotes for software development projects. Our team
            considers multiple factors when giving you the quotation for
            software development.
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              The complexity of features and functionalities
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              The intricacy of third-party integrations
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              The project scope and size
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="rounded-2xl bg-gray-900/50 p-6 backdrop-blur-sm md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="E-mail ID*"
                        type="email"
                        className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Contact Number"
                        className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-gray-800 bg-gray-900/50 text-white">
                          <SelectValue placeholder="Select a Budget Range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)*"
                        className="min-h-[100px] border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between gap-4">
                <FormField
                  control={form.control}
                  name="nda"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <label className="text-sm text-gray-400">
                        Include Copy of a Non-Disclosure Agreement
                      </label>
                    </FormItem>
                  )}
                />

                <div className="flex items-center gap-2">
                  <span className="text-white">3 + 4 =</span>
                  <Input
                    type="text"
                    className="w-16 border-gray-800 bg-gray-900/50 text-white"
                    {...form.register("captcha")}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Request Proposal
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
