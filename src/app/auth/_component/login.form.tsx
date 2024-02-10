'use client'
import {montserrat} from "@/app/_lib/font";
import {authenticate} from "@/app/auth/_lib/action";
import {LoginSchemaType , SignUpSchema , SignUpSchemaType} from "@/app/auth/_lib/types";
import {SubmitHandler , useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form ,
    FormControl ,
    FormDescription ,
    FormField ,
    FormItem ,
    FormLabel ,
    FormMessage
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";
import {useToast} from "@/components/ui/use-toast";
export default function LoginForm() {
    const form = useForm<LoginSchemaType>({resolver:  zodResolver(SignUpSchema)})
    const { toast }= useToast()
    const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
        toast({
            description: "Your message has been sent.",
        })
        const formData = new FormData()
        formData.append('email' , data.email);
        formData.append('password' , data.password)
        try{
            await signIn("credentials",{
                email: formData.get('email'),
                password: formData.get('password'),
                callbackUrl: "/blog"
            })
        }catch (e: Error | any) {

        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input   type="password" placeholder="Enter your password" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <Button type="submit" className="w-full  h-[3rem]">
                    Log in
                </Button>
            </form>
        </Form>
    )
}
