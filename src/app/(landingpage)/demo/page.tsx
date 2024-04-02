"use client"
import { createDemoBook } from "@/lib/actions/book.actions";
import { useState } from "react"

const Demo = () => {
    const [businessName, setBusinessName] = useState("");
    const [industry, setIndustry] = useState("");
    const [contact, setContact] = useState("")

    const createDemoBooking = async () => {
        await createDemoBook({
            businessName, industry, contact
        })
    }

    return (
        <div className='h-[80vh]'>
            <div className='flex justify-center items-center h-full'>
                <div className='border rounded-md shadow-sm p-4 w-[340px]'>
                    <p>Sign up for demo</p>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name">Business Name</label>
                        <input type="text" className='border p-2 rounded-md' value={businessName} onChange={e => setBusinessName(e.target.value)} />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name">Select Industry</label>
                       <select name="industry" id="indusrty" className='border p-2 rounded-md' value={industry} onChange={e => setIndustry(e.target.value)}>
                        <option value="select">Select</option>
                        <option value="dentist">Dentist</option>
                        <option value="restaurant">Restaurant</option>
                       </select>
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="contact">Contact</label>
                        <input type="text" className='border p-2 rounded-md' value={contact} onChange={e => setContact(e.target.value)} />
                    </div>

                    <button onClick={createDemoBooking} className='p-2 bg-blue-500 text-blue-50 rounded-md w-full'>Book now</button>
                </div>
            </div>
        </div>
    )
}

export default Demo