import {useState} from "react";

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        setValues((prev) => (
            {...prev,
                [event.target.name]: event.target.value
            })
        );
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return [values, handleChange, resetForm];
}

export default useForm;