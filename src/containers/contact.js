import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/319ee050-b609-11ed-aa6e-d1d3c574abee";

const Contact = () => {
    
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };
    if (submitted) {
        return (
            <div className="py-10 mx-auto md:mx-0  px-10 md:px-32">
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </div>
        )
    }
    return ( 
        <div className="flex flex-col md:flex-row">
            <div className="p-10 pt-[40px] mx-auto md:mx-0 w-[90vw] md:w-[50vw] md:max-w-[800px] md:px-24">
                <div className="mb-4">
                    <p className="text-2xl font-bold">Have an enquiry?</p> 
                    <p className="mt-2">Just fill in this quick form and submit a request, we'll get back to you as soon as possible!</p>
                </div>
                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >  
                    <div className="mb-3 pt-0">
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="px-3 py-3 placeholder-slate-500 text-gray-700 relative bg-white rounded text-sm border-[1px] border-slate-400-400 shadow-md w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="px-3 py-3 placeholder-slate-500 text-gray-700 relative bg-white rounded text-sm border-[1px] border-slate-400-400 shadow-md w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                    <textarea
                            placeholder="Details of your request..."
                            name="message"
                            className="px-3 py-3 placeholder-slate-500 text-gray-700 relative bg-white rounded text-sm border-[1px] border-slate-400-400 shadow-md w-full hover"
                            required
                            rows={4}
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <button
                            className="bg-[#3294e2] text-white hover:bg-[#1a70b6] active:bg-[#1a70b6] active:translate-y-0 active:shadow-sm font-bold text-sm px-6 py-3 rounded shadow-md hover:shadow-lg hover:-translate-y-[2px] transition-all duration-150 ease-linear"
                            type="submit"
                        >
                            Send Request
                        </button>
                    </div>
            
                </form>
            </div>
            <div  className="p-10 pt-[10px] md:pt-[40px] mb-6 mx-auto md:mx-0 w-[90vw] md:w-[50vw] md:max-w-[800px] md:px-24">
                <p className="font-bold text-2xl mb-2">Other ways to get in touch</p>
                <p>Call us on <span className="font-bold text-[#3294e2]">01959 928118</span>.</p>
                <br/>
                <p className="mb-3">Our <span className="text-[#3294e2] font-bold">opening hours</span> are: </p>
                <table>
                    <tr>
                        <td className="font-bold w-[120px]">Monday</td>
                        <td>9 am to 5:30 pm</td>
                    </tr>
                    <tr>
                        <td className="font-bold w-[120px]">Tuesday</td>
                        <td>9 am to 5:30 pm</td>
                    </tr>
                    <tr>
                        <td className="font-bold w-[120px]">Wednesday</td>
                        <td>9 am to 5:30 pm</td>
                    </tr>
                    <tr>
                        <td className="font-bold w-[120px]">Thursday</td>
                        <td>9 am to 5:30 pm</td>
                    </tr>
                    <tr>
                        <td className="font-bold w-[120px]">Friday</td>
                        <td>9 am to 5:30 pm</td>
                    </tr>
                    <tr>
                        <td className="font-bold w-[120px]">Saturday</td>
                        <td>9 am to 12 am</td>
                    </tr>
                    <tr>
                        <td className="font-bold w-[120px]">Sunday</td>
                        <td>9 am to 12 am</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
 
export default Contact;