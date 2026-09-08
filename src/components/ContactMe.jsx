import { useState } from "react"
import emailJs from '@emailjs/browser'

function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        emailJs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

        .then(() => {
            alert("Message Sent Succesfully");

            setFormData({
                name: "",
                email: "",
                mobile: "",
                message: ""
            });
        })
        .catch((error) => {
            alert("Failed to send message")
        })
    }

  return (
    <section className="contact" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <p>Have a project or opportunity? Let's connect!</p>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" 
                name="name" 
                id="name" 
                placeholder="Enter your name" 
                value={formData.name} 
                onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" 
                name="email" 
                id="email" 
                placeholder="Enter your email" 
                value={formData.email} 
                onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input type="tel" 
                name="mobile" 
                id="mobile" 
                placeholder="Enter your mobile number" 
                value={formData.mobile} 
                onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea type="text" 
                name="message" 
                id="message" 
                placeholder="Enter your message" 
                value={formData.message} 
                onChange={handleChange}> 
                </textarea>
            </div>

            <button type="submit">Send Message</button>
    
        </form>
    </section>
  )
}

export default ContactMe
