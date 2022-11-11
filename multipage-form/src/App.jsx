import React from "react";
import Form from "./components/Form";
import { FormProvider } from "./context/FormContext";

const App = () => {
    return (
        <FormProvider>
            <Form />
        </FormProvider>
    )
}

export default App