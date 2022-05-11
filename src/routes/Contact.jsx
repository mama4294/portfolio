import { useState } from "react"
import { FormInput } from "../components/FormInput"
import { MultiLineInput } from "../components/MultiLineInput"
import { Button } from "../components/Button"
import { motion } from "framer-motion"
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
        setFormFields({...formFields, [name]: value})
    }


    return(
        <section className="bg-light p-10" id="contact">
            <div className="py-10">
                <h1 className="text-primary text-4xl text-center">Contact<span className="text-default">.</span></h1>
            </div>
            <motion.div 
                className="w-full md:w-1/2 m-auto max-w-5xl"
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{type:'spring', duration: 1, bounce: 0.3 }}
                viewport={{ once: true }}
                >
                <form 
                    name="portfolio-contact" 
                    method="POST" 
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    >
                     
                  <input
                    type="hidden"
                    name="form-name"
                    value="portfolio-contact"
                />
                  <label className="hidden">
                    Don’t fill this out if you’re human:
                    <input name="bot-field" />
                </label>
                <FormInput type="text" value={name} label="Name" name="name" placeholder="John Doe" onChange={handleChange}/>
                <FormInput type="email" value={email} label="Email" name="email" placeholder="example@gmail.com" onChange={handleChange}/>
                <MultiLineInput value={message} label="Message" name="message" placeholder="Type your message here" onChange={handleChange}/>
                <Button type="form">Send Message</Button>
                </form>
            </motion.div>
        </section>
    )
}