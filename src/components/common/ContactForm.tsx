import React, { useState } from "react";

interface ContactFormProps {
    heading: string;
    fields: { name: string; type: string; placeholder: string; required?: boolean }[];
    onSubmit: (formData: Record<string, string>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ heading, fields, onSubmit}) => {
    const [formData, setFormData] = useState<Record<string, string>>(() =>
        Object.fromEntries(fields.map((field) => [field.name, ""]))
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="py-10 flex flex-col gap-5 bg-white px-10 shadow-lg">
            <h4 className="font-semibold uppercase">{heading}</h4>
            {fields.map((field) => (
                <div key={field.name}>
                    {field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="border p-2 w-full outline-none duration-500	 focus:border-purpleHeading "
                            required={field.required}
                            rows={3}
                        ></textarea>
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="border p-4 w-full outline-none duration-500 focus:border-purpleHeading"
                            required={field.required}
                        />
                    )}
                </div>
            ))}
            <button type="submit" className="py-6 text-white text-lg w-full font-semibold" style={{ backgroundImage: 'linear-gradient(125deg, #1B69F8 70%, #2673FF 70%)' }}>
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
