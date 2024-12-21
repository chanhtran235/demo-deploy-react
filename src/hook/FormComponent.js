import React from "react";
import useForm from "./useForm";

function FormComponent() {
    const [formValues, handleChange, resetForm] = useForm({ username: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted values:", formValues);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                value={formValues.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;