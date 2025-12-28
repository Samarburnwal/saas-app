"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";



const formSchema = z.object({
    name: z.string().min(2, {message: "Companion is required"}).max(30, {message: "Companion is required"}),
    subject: z.string().min(2, {message: "Subject is required"}),
    topic: z.string().min(2, {message: "topic is required"}),
    voice: z.string().min(2, {message: "voice is required"}),
    style: z.string().min(2, {message: "style is required"}),
    duration: z.coerce.number().min(2, {message: "duration is required"}),
});


const CompanionForm = () => {
    //1. Define your form

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className="input capitalize">
                                <SelectValue placeholder="Select the subject"/>
                              </SelectTrigger>
                              <SelectContent>
                                {/* <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="colorful">Colorful</SelectItem> */}
                                {subjects.map((subject)=>(
                                    <SelectItem key={subject} value={subject} className="capitalize">{subject}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>What should the companion help with ?</FormLabel>
                        <FormControl>
                            <Textarea
                              placeholder="Ex. Derivatives & Integrals"
                              {...field}
                              className="input"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="voice"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Voice</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className="input">
                                <SelectValue placeholder="Select the voice"/>
                              </SelectTrigger>
                              <SelectContent>
                                {/* <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="colorful">Colorful</SelectItem> */}
                                <SelectItem value="male" className="capitalize">Male</SelectItem>
                                <SelectItem value="female" className="capitalize">Female</SelectItem>
                              </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Style</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className="input">
                                <SelectValue placeholder="Select the style"/>
                              </SelectTrigger>
                              <SelectContent>
                                {/* <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="colorful">Colorful</SelectItem> */}
                                <SelectItem value="formal" className="capitalize">Formal</SelectItem>
                                <SelectItem value="casual" className="capitalize">Casual</SelectItem>
                              </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="Duration" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {/* Add more fields as needed */}

            <Button type="submit" className="w-full">Build Your Companion</Button>
        </form>
    </Form>
  )
}

export default CompanionForm