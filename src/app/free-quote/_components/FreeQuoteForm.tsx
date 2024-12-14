"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

type FreeQuoteForm = {
  name: string;
  email: string;
  report_addressee: string;
  owner: string;
  address: string;
  address_two: string;
  city: string;
  state: string;
  zip: string;
  company?: string | undefined;
  phone?: string | undefined;
  info?: string | undefined;
};

const formSchema = z.object({
  name: z.string(),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  report_addressee: z.string(),
  owner: z.string(),
  address: z.string(),
  address_two: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  info: z.string().optional(),
});

export function FreeQuoteForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      report_addressee: "",
      owner: "",
      address: "",
      address_two: "",
      city: "",
      state: "",
      zip: "",
      info: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const sendEmail = (values: FreeQuoteForm) => {
      emailjs
        .send("free_quote_service", "free_quote_form", values, {
          publicKey: "ErEMFeVs-twp1r6im",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            router.push("/contact/success");
          },
          (error) => {
            console.log("FAILED...", error.text);
            router.push("/contact/failure");
          },
        );
    };
    sendEmail(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <h2 className="text-2xl">Your Information</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="John Doe Inc." {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
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
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="916-398-7330" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <h2 className="text-2xl">Property Info</h2>
        <FormField
          control={form.control}
          name="report_addressee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who is the report addressed to?</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="owner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Owner</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Sacramento Way" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address_two"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address 2</FormLabel>
              <FormControl>
                <Input placeholder="PO Box 123" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Sacramento" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Province/State</FormLabel>
              <FormControl>
                <Input placeholder="CA" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Postal/Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="94203" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="info"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Info</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Additional info..."
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-primary text-secondary hover:bg-primaryHover"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
