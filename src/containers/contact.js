import React, { useState } from "react";

const FORM_ENDPOINT = "";

const Contact = () => {
    
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };
    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        )
    }
    return (  
        <form
            className="py-10 mx-auto md:mx-0 w-[90vw] md:w-[80vw] md:max-w-[800px] px-10 md:px-32"
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
                    className="bg-[#3294e2] text-white active:bg-[#1a70b6] active:translate-y-0 active:shadow-sm font-bold uppercase text-sm px-6 py-3 rounded shadow-md hover:shadow-lg hover:-translate-y-[2px] transition-all duration-150 ease-linear"
                    type="submit"
                >
                    Send Request
                </button>
            </div>

        </form>
    );
}
 
export default Contact;