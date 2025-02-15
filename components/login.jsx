"use client"

import { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from 'next-auth/react';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Obrigatório"),
    password: Yup.string().min(8, "Senha deve ser mais do que 8 caracteres").required("Obrigatório"),
})

export default function LoginPage() {
    const [loginError, setLoginError] = useState(null)

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log("Login successful", values)
        } catch (error) {
            setLoginError("Invalid email or password")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <Formik initialValues={{ email: "", password: "", age: "" }} validationSchema={LoginSchema} onSubmit={handleSubmit}>
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Field as={Input} id="email" name="email" type="email" placeholder="Insira seu email" />
                                    {errors.email && touched.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Senha</Label>
                                    <Field as={Input} id="password" name="password" type="password" placeholder="Insira sua senha" />
                                    {errors.password && touched.password && <p className="text-sm text-red-500">{errors.password}</p>}
                                </div>

                                {loginError && (
                                    <Alert variant="destructive">
                                        <AlertDescription>{loginError}</AlertDescription>
                                    </Alert>
                                )}
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button className="w-full" onClick={() => signIn('github', { callbackUrl: "/homepage" })}>
                                    Logar com Github
                                </Button>
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Cadastrando..." : "Cadastro"}
                                </Button>
                            </CardFooter>
                        </Form>
                    )}
                </Formik>
            </Card>
        </div>
    )
}

