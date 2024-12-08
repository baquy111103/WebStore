import React from 'react';
import PropTypes from 'prop-types';

Contact.propTypes = {

};

function Contact(props) {
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
                <div className="container mb-60">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6574509020293!2d105.78236867486306!3d21.046387980607378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb158a2305d%3A0x5c357d21c785ea3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyDEkGnhu4duIEzhu7Fj!5e0!3m2!1svi!2s!4v1733241095223!5m2!1svi!2s%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                            <div className="contact-page-side-content">
                                <h3 className="contact-page-title">Contact Us</h3>
                                <p className="contact-page-message mb-25">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem sapiente ab cum accusantium, incidunt nihil fugit similique? Reiciendis ex dignissimos libero iusto quos, consequuntur nobis tenetur a minima! Voluptatum, ab?
                                </p>
                                <div className="single-contact-block">
                                    <h4><i className="fa fa-fax"></i> Address</h4>
                                    <p>235 Hoang Quoc Viet, Cau Giay, Ha Noi, Viet Nam</p>
                                </div>
                                <div className="single-contact-block">
                                    <h4><i className="fa fa-phone"></i> Phone</h4>
                                    <p>Mobile: 0345573088</p>
                                    <p>Hotline: 19008008</p>
                                </div>
                                <div className="single-contact-block last-child">
                                    <h4><i className="fa fa-envelope-o"></i> Email</h4>
                                    <p>ktfsq44@gmail.com</p>
                                    <p>ktfsq44@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="contact-form-content pt-sm-55 pt-xs-55">
                                <h3 className="contact-page-title">Tell Us Your Message</h3>
                                <div className="contact-form">
                                    <form id="contact-form" action="http://demo.hasthemes.com/limupa-v3/limupa/mail.php" method="post">
                                        <div className="form-group">
                                            <label>Your Name <span className="required">*</span></label>
                                            <input type="text" name="customerName" id="customername" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Your Email <span className="required">*</span></label>
                                            <input type="email" name="customerEmail" id="customerEmail" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input type="text" name="contactSubject" id="contactSubject" />
                                        </div>
                                        <div className="form-group mb-30">
                                            <label>Your Message</label>
                                            <textarea name="contactMessage" id="contactMessage" ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Send" className="li-btn-3" name="submit" />
                                        </div>
                                    </form>
                                </div>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;