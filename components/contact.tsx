"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Linkedin, Mail } from "lucide-react";
import Form from "next/form";
import { useState } from "react";
import {
  capitalizeFirst,
  getObjectEmptyKeys,
  objectHasEmptyValue,
} from "@/lib/utils";

type MessageForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [errorMessages, setErrorMessages] = useState<MessageForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (queryData: FormData) => {
    const data = {
      name: queryData.get("name")?.toString(),
      email: queryData.get("email")?.toString(),
      subject: queryData.get("subject")?.toString(),
      message: queryData.get("message")?.toString(),
    };

    if (objectHasEmptyValue(data)) {
      getObjectEmptyKeys(data).map((value) => {
        setErrorMessages((prev) => ({
          ...prev,
          [value]: `${capitalizeFirst(value)} cannot be empty`,
        }));
      });
      return;
    }

    const response = await fetch("api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    setErrorMessages({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const MessageForm = () => {
    return (
      <Form action={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              placeholder="Your full name"
              id="name"
              name="name"
            />
            <small className="text-red-600">{errorMessages.name}</small>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              id="email"
              name="email"
            />
            <small className="text-red-600">{errorMessages.email}</small>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            placeholder="What's this about?"
            id="subject"
            name="subject"
          />
          <small className="text-red-600">{errorMessages.subject}</small>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <Label htmlFor="message">Message</Label>
          <Textarea
            rows={5}
            placeholder="Tell me about your project, ideas, or just say hello..."
            id="message"
            name="message"
          />
          <small className="text-red-600">{errorMessages.message}</small>
        </div>
        <Button className="w-full" type="submit">
          Send Message
        </Button>
      </Form>
    );
  };

  return (
    <section id="contact-section" className="flex justify-center w-full">
      <div className="max-w-7xl w-full px-9 py-5 mt-20 mb-32">
        <div className="w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold"
          >
            Contact Me
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "all" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid md:grid-cols-[3fr_1fr] items-center gap-4 mt-20"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MessageForm />
            </CardContent>
          </Card>
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-center mb-10">
              Or Reach Me Directly
            </h4>
            <Card
              className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-[#004a4b] cursor-pointer mb-6"
              onClick={() => {
                window.open("mailto:farisrafi048@gmail.com", "_blank");
              }}
            >
              <CardContent className="flex items-center gap-4">
                <Mail />
                <div className="flex flex-col">
                  <p className="text-muted-foreground">Email</p>
                  <p>farisrafi048@gmail.com</p>
                </div>
              </CardContent>
            </Card>
            <Card
              className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-[#004a4b] cursor-pointer mb-6"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/muhammad-faris-rafi-230a2022b/",
                  "_blank"
                );
              }}
            >
              <CardContent className="flex items-center gap-4">
                <Linkedin />
                <div className="flex flex-col">
                  <p className="text-muted-foreground">LinkedIn</p>
                  <p>Muhammad Faris Rafi</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
