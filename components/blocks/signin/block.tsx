"use client"

import { Field, FieldLabel, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { useForm } from '@tanstack/react-form-nextjs'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

interface SignInProps {
    onSubmit: (email: string, password: string) => void
}

export const SignInForm = ({ onSubmit }: SignInProps) => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        validators: {
            onChange: formSchema,
        },
        onSubmit: async ({ value }) => {
            onSubmit(value.email, value.password)
        }
    })
    return (
        <div className='flex items-center justify-center min-h-screen w-full px-4'>
            <form id='register-form' className='flex flex-col gap-4 w-full max-w-sm' onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
            }}>
                <form.Field name='email' children={(field) => {
                    const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                        <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor='field.name'>
                                Email
                            </FieldLabel>
                            <Input
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)} aria-invalid={isInvalid}
                                placeholder='someone@example.com'
                                autoComplete='off' />
                            {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                            )}
                        </Field>
                    )
                }}
                />
                <form.Field name='password' children={(field) => {
                    const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                        <Field data-invalid={isInvalid}>
                            <FieldLabel htmlFor='field.name'>
                                Password
                            </FieldLabel>
                            <Input
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)} aria-invalid={isInvalid}
                                placeholder='••••••••'
                                type='password'
                                autoComplete='off' />
                            {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                            )}
                        </Field>
                    )
                }}
                />
                <Button type='submit' className='w-full mt-2'>Submit</Button>
            </form>
        </div>
    )
}