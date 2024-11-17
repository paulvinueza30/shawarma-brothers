"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your message. We'll get back to you soon!"
        );
        form.reset();
      } else {
        setSubmitMessage(
          "There was an error submitting your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        "There was an error submitting your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full bg-white dark:bg-black p-4">
      {/* Optional Title */}
      <h2 className="text-[40px] font-bold text-customRed text-center mb-4">
        Contact Us
      </h2>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-customRed font-semibold mb-2"
          >
            Name
          </label>
          <input
            {...form.register("name")}
            id="name"
            className="w-full px-4 py-3 rounded-md border border-customRed focus:outline-none focus:ring-2 focus:ring-customDRed"
            placeholder="Your name"
          />
          {form.formState.errors.name && (
            <p className="mt-2 text-red-600">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-customRed font-semibold mb-2"
          >
            Email
          </label>
          <input
            {...form.register("email")}
            id="email"
            type="email"
            className="w-full px-4 py-3 rounded-md border border-customRed focus:outline-none focus:ring-2 focus:ring-customDRed"
            placeholder="Your email"
          />
          {form.formState.errors.email && (
            <p className="mt-2 text-red-600">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-customRed font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            {...form.register("message")}
            id="message"
            className="w-full px-4 py-3 rounded-md border border-customRed focus:outline-none focus:ring-2 focus:ring-customDRed h-40 resize-none"
            placeholder="Your message"
          ></textarea>
          {form.formState.errors.message && (
            <p className="mt-2 text-red-600">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-customRed text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-customDRed transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {submitMessage && (
          <p
            className={`mt-4 text-center ${submitMessage.includes("error")
                ? "text-red-600"
                : "text-green-600"
              }`}
          >
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  );
}
