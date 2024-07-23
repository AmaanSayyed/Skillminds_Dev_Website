const Form = () => {
    return (
        <div className="bg-smoke space" data-bg-src="./assets/img/bg/contact_bg_1.png" id="contact-sec">
        <div className="container">
            <div className="row">
                <div className="col-xl-8">
                    <div className="title-area mb-35 text-xl-start text-center">
                        <span className="sub-title">
                            <div className="icon-masking me-2">
                                <span className="mask-icon" data-mask-src="./assets/img/theme-img/title_shape_2.svg"></span>
                                <img src="./assets/img/theme-img/title_shape_2.svg" alt="shape"/>
                            </div>contact with us!
                        </span>
                        <h2 className="sec-title">Have Any Questions?</h2>
                        <p className="sec-text">Enthusiastically disintermediate one-to-one leadership via business e-commerce. Dramatically reintermediate compelling process improvements rather than empowered relationships.</p>
                    </div>
                    <form action="mail.php" method="POST" className="contact-form ajax-contact">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name"/>
                                <i className="fal fa-user"></i>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email Address"/>
                                <i className="fal fa-envelope"></i>
                            </div>
                            <div className="form-group col-md-6">
                                <select name="subject" id="subject" className="form-select">
                                    <option value="" disabled selected hidden>Select Subject</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Brand Marketing">Brand Marketing</option>
                                    <option value="UI/UX Designing">UI/UX Designing</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                </select>
                                <i className="fal fa-chevron-down"></i>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number"/>
                                <i className="fal fa-phone"></i>
                            </div>
                            <div className="form-group col-12">
                                <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Your Message"></textarea>
                                <i className="fal fa-comment"></i>
                            </div>
                            <div className="form-btn text-xl-start text-center col-12">
                                <button className="th-btn">Send Message<i className="fa-regular fa-arrow-right ms-2"></i></button>
                            </div>
                        </div>
                        <p className="form-messages mb-0 mt-3"></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Form;