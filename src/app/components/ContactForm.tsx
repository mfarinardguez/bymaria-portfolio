"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import emailjs from "emailjs-com";
import { useState } from "react";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es obligatorio" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(5, { message: "El mensaje es muy corto" }),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setSending(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      .then(() => {
        setSuccess("¡Mensaje enviado con éxito!");
        form.reset();
      })
      .catch(() => {
        setSuccess("Hubo un error al enviar el mensaje.");
      })
      .finally(() => setSending(false));
  };

  return (
    <Card className="p-6 bg-white shadow-md rounded-xl w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Envíame un mensaje</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field}/>
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
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tucorreo@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea placeholder="Escribe tu mensaje..." className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            disabled={sending}
          >
            {sending ? "Enviando..." : "Enviar"}
          </Button>

          {success && (
            <p className={`text-sm ${success.includes("éxito") ? "text-green-600" : "text-red-600"}`}>
              {success}
            </p>
          )}
        </form>
      </Form>
    </Card>
  );
}
