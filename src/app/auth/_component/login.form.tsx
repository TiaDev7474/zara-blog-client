'use client'
import {
    AtSymbolIcon ,
    KeyIcon ,
    ExclamationCircleIcon , ArrowRightIcon ,
} from '@heroicons/react/24/outline';
import {montserrat} from "@/app/_lib/font";
import {authenticate} from "@/app/auth/_lib/action";
import Button from "@/app/component/button";
import {LoginSchemaType , SignUpSchema , SignUpSchemaType} from "@/app/auth/_lib/types";
import {SubmitHandler , useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
export default function LoginForm() {
    const {register, formState: {errors}, handleSubmit } = useForm<LoginSchemaType>({resolver:  zodResolver(SignUpSchema)})

    const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
        const formData = new FormData()
        formData.append('email' , data.email);
        formData.append('password' , data.password)
        await authenticate(undefined , formData)

    }
    return (
        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex-1 rounded-lg bg-gray-50  px-6 pb-4 pt-8">
                <h1 className={`${montserrat.className} mb-3 text-lg dark:text-black`}>
                    Please log in to continue.
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="form-label dark:text-black"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                required
                                {...register('email')}
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

                        </div>
                        <div
                            className="flex h-fit items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {errors.email &&  <>
                                <ExclamationCircleIcon className="h-fit w-5 text-red-500" />
                                <p className="text-sm text-red-500">{errors.email.message}</p>
                            </>}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="form-label dark:text-black"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                required
                                {...register('password')}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

                        </div>
                        <div
                            className="flex h-fit items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {errors.password &&  <>
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500">{errors.password.message}</p>
                            </>}
                        </div>
                    </div>
                </div>
                <LoginButton />
            </div>
        </form>
    )
}

function LoginButton() {

    return (
        <Button
            isLink={false}
            type={"primary"}
            style="w-full mt-4"
            icon={<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />}
            actionType="submit"
            label='Log in'
        />
    )
}