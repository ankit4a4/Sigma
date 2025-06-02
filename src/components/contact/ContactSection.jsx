import React, { useState } from "react";

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
                {/* Left Side - Info */}
                <div className="w-full md:w-2/5 text-gray-800">
                    <h2 className="text-[2.4vh] md:text-[2vw] font-bold mb-6 text-blue-900 leading-snug">
                        Our Contacts
                    </h2>
                    <p className="text-base mb-4 text-gray-700">
                        Thank you for contacting us. Please let us know more about your product approval needs and regulatory compliance in the US and abroad. Our team of experts will help you choose the best cost-effective regulatory strategy. We are assisting companies in USA, Europe, Asia and Latin America.
                    </p>
                    <div className="mt-6">
                        <h3 className="font-semibold text-lg text-blue-800">Address</h3>
                        <p className="text-base text-gray-700 mt-1">
                            490 Sawgrass Corporate Parkway, Suite 130 Sunrise, FL 33325
                        </p>
                    </div>
                    <div className="mt-4">
                        <h3 className="font-semibold text-lg text-blue-800">Phone</h3>
                        <p className="text-base text-gray-700 mt-1">
                            (305) 239-4441
                        </p>
                    </div>
                    <div className="mt-4">
                        <h3 className="font-semibold text-lg text-blue-800">Email</h3>
                        <p className="text-base text-gray-700 mt-1">sigmabiomedical@gmail.com <br />
                            jmillan@sigmascientific.us
                        </p>
                    </div>
                </div>
                {/* Right Side - Form */}
                <div className="w-full md:w-3/5 bg-gray-100 p-8 rounded-xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quick Contact Form</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="p-3 rounded-md border border-gray-300 focus:outline-blue-500 w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="p-3 rounded-md border border-gray-300 focus:outline-blue-500 w-full"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            className="p-3 rounded-md border border-gray-300 focus:outline-blue-500 w-full"
                        />
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="p-3 rounded-md border border-gray-300 focus:outline-blue-500 w-full"
                        />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Case Description..."
                            className="p-3 rounded-md border border-gray-300 focus:outline-blue-500 md:col-span-2 w-full h-32 resize-none"
                        ></textarea>
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                {/* Map Section */}
            </div>
            <div className="w-full px-12 py-12">
                <div className="w-full h-[400px]">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.337823037207!2d-80.3272949246233!3d26.123596377123025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d902611cb47925%3A0xb16dd6175b79f0b0!2s490%20Sawgrass%20Corporate%20Pkwy%20%23130%2C%20Sunrise%2C%20FL%2033325%2C%20USA!5e0!3m2!1sen!2sin!4v1713082299924!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-md shadow-md"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactFormSection;
