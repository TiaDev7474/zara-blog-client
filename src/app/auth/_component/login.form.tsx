'use client'
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
import {router} from "next/client";
import {useRouter} from "next/navigation";
export default function LoginForm() {
    const form = useForm<LoginSchemaType>({resolver:  zodResolver(SignUpSchema)})
    const { toast }= useToast();
    const router = useRouter();
    toast({
        description: "Your message has been sent.",
    })
    const onSubmit: SubmitHandler<SignUpSchemaType> = async (data, event) => {

        const formData = new FormData()
        formData.append('email' , data.email);
        formData.append('password' , data.password)
        try{
            console.log(formData.get('email'));
            await signIn("credentials",{
                email: formData.get('email'),
                password: formData.get('password'),
                redirect:false
            })
            router.push('/blog')
        }catch (e: Error | any) {
            console.log(e);
        }
    }
    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input
                    {...form.register('email')}
                    type="email"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    {...form.register('password')}
                    type="password"
                />
            </div>
            <Button >
                Log in
            </Button>
        </form>
    )
}
