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
    <section className="w-full bg-customGrey py-12 px-50">
      {" "}
      {/* Full width with padding */}
      <div className="max-w-8xl mx-auto">
        {" "}
        {/* Sets max width for readability */}
        <h2 className="text-4xl font-bold text-customRed mb-8 text-center">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg w-full" // Increased padding for better look on wider screen
          >
            <div>
              <label
                htmlFor="name"
                className="block text-amber-800 font-semibold mb-2"
              >
                Name
              </label>
              <input
                {...form.register("name")}
                id="name"
                className="w-full px-4 py-2 rounded-md border border-customRed focus:outline-none focus:ring-2 focus:ring-customDRed"
                placeholder="Your name"
              />
              {form.formState.errors.name && (
                <p className="mt-1 text-red-600">
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
                className="w-full px-4 py-2 rounded-md border border-customRed focus:outline-none focus:ring-2 focus:ring-customDRed"
                placeholder="Your email"
              />
              {form.formState.errors.email && (
                <p className="mt-1 text-red-600">
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
                className="w-full px-4 py-2 rounded-md border border-customRed focus:outline-none focus:ring-2 focus:ring-customDRed h-32 resize-none"
                placeholder="Your message"
              ></textarea>
              {form.formState.errors.message && (
                <p className="mt-1 text-red-600">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-customRed text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-customDRed transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitMessage && (
              <p
                className={`mt-4 text-center ${
                  submitMessage.includes("error")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-customRed font-semibold">Get in Touch</p>
            <p>
              Feel free to reach out to us with any questions, comments, or
              feedback. We look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
