'use client'
/* eslint-disable react/no-unescaped-entities */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {
  const form = useForm()

  const handleSubmit =  form.handleSubmit(async(data) => {
    try {

      console.log(data)

      await signIn("nodemailer", { email: data.email, redirect: false} )
      toast({
        
        title: "Magic Link Sent",
        description: "Check your email for the magic link to login"
      })
    } catch (err) {
      console.error(err)
      toast({
        title: "Error",
        
        description: "An error occurred. Please try again"
      })
    }
  })

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Magic Link Login</h1>
        <p className="mt-4 text-muted-foreground">
          Enter your email below and we'll send you a magic link to log in instantly, no password required.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input id="email" type="email" placeholder="Enter your email" required  {...form.register('email')} />
          </div>
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Sending...' : ' Send Magic Link'}
           
          </Button>
        </form>
      </div>
    </div>
  )
}