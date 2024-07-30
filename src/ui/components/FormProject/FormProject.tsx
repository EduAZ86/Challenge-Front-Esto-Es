import { FC } from "react"
import { Form } from "../Form/Form"
import { InputField } from "../InputField/InputField"
import { useForm } from "react-hook-form"

export const FormProject: FC = () => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const onSubmit = handleSubmit(async (data) => {
        const newUser: INewUser = {
            email: data.email,
            password: data.password,
            username: data.user,
            role: "user"
        };
        await userRegister(newUser);

        signIn("credentials", {
            email: data.email,
            password: data.password,
            user: data.user,
            callbackUrl: "/",
        });
        reset();
    })
    return (
        <div
            className={`
            w-full h-full
            flex flex-col
            items-center justify-center gap-2                
        `}
        >
            <Form
                title="Create Project"
                name="createProject"
                onSubmit={onSubmit}
            >

            </Form>
            <InputField
                label="Project Name"
                placeholder="Project Name"
                type="text"
                id="projectName"
                name="projectName"
                requiredMessage="Project name is required"
                register={register}
                errors={errors}

            />
            <InputField
                label="Project Description"
                placeholder="Project Description"
                type="text"
                id="projectDescription"
                name="projectDescription"
                requiredMessage="Project Description is required"
                register={register}
                errors={errors}
            />

        </div>
    )
}