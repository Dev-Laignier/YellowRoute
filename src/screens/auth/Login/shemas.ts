import * as yup from "yup";

// Validation schema for the form fields
export const loginSchema = yup.object({
    email: yup.string().required("Preencha seu e-mail.").email("E-mail invalido."),
    password: yup.string().required("Preencha sua senha.").min(6, "A senha deve ter pelo menos 6 caracteres."),
});