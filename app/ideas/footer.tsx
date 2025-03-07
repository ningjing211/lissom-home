"use client";
import '@/app/ui/ideas/footer.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            
            <div className='footer-bottom-wrap'>
                <button onClick={scrollToTop} className="back-to-top-btn">
                    <span className="triangle-up"></span>
                    Top
                </button>
            </div>

            <footer className="footer">
                <div className="footer-group-left">
                    <div className="footer__addr">
                        <h1 className="footer__logo">
                            <a href="/" className="footer-logo-desktop">
                                <img src="/footer-logo.png" alt="Footer Logo" />
                            </a>
                            <a href="/" className="footer-logo-mobile">
                                <img className="footer-img-mobile" src="/footer-logo-2.png" alt="Footer Logo" />
                            </a>
                        </h1>
                        <br />
                        <div className="footer-outer-wrap">
                            <div className="footer-item-wrap">
                                <h2>Address</h2>
                                <address className="address">
                                    台南市安平區健康三街237號B1
                                    <br /><br />
                                    +886 0911-637-888
                                    <br />
                                </address>
                            </div>
                            {/* <div className="footer-item-wrap">
                                <h2>城市的景點</h2>
                                <address className="address">
                                    高雄市三民區博愛一路190號1樓
                                    <br />
                                    <br />
                                </address>
                            </div> */}
                        </div>
                    </div>
                    <ul className="footer__nav">
                        <li className="nav__item nav__item--extra">
                            <h2 className="nav__title">Social Media</h2>
                            <ul className="nav__ul nav__ul--extra">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Thread</a></li>
                                <li><a href="#">Line</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav__item">
                            <h2 className="nav__title">Legal</h2>
                            <ul className="nav__ul nav__ul--extra">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
                <div className="footer-group-right">
                    <div className="footer-btn-group">
                        <a className="footer__btn" href="mailto:pmp@conflux-tech.com">
                            Contact
                        </a>
                    </div>
                    <div className="footer-btn-group share-group">
                        <p className="footer-label label-desktop">讓美好因為你流動~</p>
                        <a className="footer__btn" href="mailto:pmp@conflux-tech.com">
                            Share
                        </a>
                    </div>
                    <p className="footer-label label-mobile">讓美好因為你流動~</p>
                    <div className="footer-legal-group">
                        <div className="legal">
                            <div className="legal__links">
                                <span>
                                    All rights reserved.{' '}
                                    <span className="heart">
                                        © 2025 LISSOM
                                    </span>
                                    {' '}
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="back-to-top-container">
                    
                </div>
            </footer>
        </div>
    );
}
