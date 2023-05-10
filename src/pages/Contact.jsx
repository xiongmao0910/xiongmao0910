import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { MdLocationOn, MdMail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

export function Contact() {
    const nameRef = useRef();
    const mailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !nameRef.current.value ||
            !mailRef.current.value ||
            !messageRef.current.value
        ) {
            return;
        }

        emailjs
            .send(
                "service_m1op3lc",
                "template_f5mx357",
                {
                    from_name: nameRef.current.value,
                    from_email: mailRef.current.value,
                    message: messageRef.current.value,
                },
                "XQdeFR42rLS-3-4CP"
            )
            .then((rs) => {
                console.log(rs.text);
            })
            .catch((error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section className="section contact">
            <div className="contact-container container">
                <div className="contact-heading fs-500 fw-bold text-center text-white">
                    Get in touch!
                </div>
                <div className="contact-info flex">
                    <div className="contact-info-item">
                        <MdLocationOn />
                        <span>HaNoi, VietNam</span>
                    </div>
                    <div className="contact-info-item">
                        <HiPhone />
                        <span>0778422972</span>
                    </div>
                    <div className="contact-info-item">
                        <MdMail />
                        <span>trungwebdev@gmail.com</span>
                    </div>
                </div>
                <form
                    className="contact-form flow bg-white text-black"
                    onSubmit={handleSubmit}
                >
                    <div className="contact-form-heading capitalize fw-medium">
                        contact form
                    </div>
                    <div className="contact-form-group">
                        <label className="contact-form-label" htmlFor="name">
                            name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            ref={nameRef}
                            id="name"
                            className="contact-form-control"
                        />
                    </div>
                    <div className="contact-form-group">
                        <label className="contact-form-label" htmlFor="mail">
                            mail
                        </label>
                        <input
                            type="mail"
                            name="user_email"
                            ref={mailRef}
                            id="mail"
                            className="contact-form-control"
                        />
                    </div>
                    <div className="contact-form-group">
                        <label className="contact-form-label" htmlFor="message">
                            message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            ref={messageRef}
                            className="contact-form-control"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="button"
                        button-variant="contained"
                        button-color="primary"
                    >
                        send message
                    </button>
                </form>
            </div>
        </section>
    );
}
