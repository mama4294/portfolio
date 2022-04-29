import { useState } from "react"
import { FormInput } from "../components/FormInput"
import { MultiLineInput } from "../components/MultiLineInput"
import { Button } from "../components/Button"
export const Contact = () =>{
    const defaultFormFields={
        name:"",
        email:"",
        message:""
    }
const [formFields, setFormFields] = useState(defaultFormFields)
const {name, email, message} = formFields;

    const handleChange = (event) =>{
        const {name, value} = event.target
        console.log(`${name} - ${value}`)
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Submitted")

        //resetForm
        setFormFields(defaultFormFields)
    }



    return(
        <div className="m-4">
            <div className="p-10">
                <h1 className="text-primary text-4xl text-center">Contact<span className="text-default">.</span></h1>
            </div>
            <div className="w-full md:w-1/2 m-auto">
                <form onSubmit={handleSubmit}>
                <FormInput type="text" value={name} label="Name" name="name" onChange={handleChange}/>
                <FormInput type="email" value={email} label="Email" name="email" onChange={handleChange}/>
                <MultiLineInput value={message} label="Message" name="message" onChange={handleChange}/>
                <Button type="form">Send Message</Button>
                </form>
            </div>
        </div>
    )
}