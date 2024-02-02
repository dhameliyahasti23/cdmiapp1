import './App.css';
import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF , FaTwitter , FaLinkedin , FaWhatsapp } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaHandPointRight } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";





import myimg1 from './img/i1.SVG';
import myimg2 from './img/i2.jpg';
import myimg3 from './img/i3.jpg';
import myimg4 from './img/i4.jpg';
import myimg5 from './img/i5.jpg';
import myimg6 from './img/i6.jpg';
import myimg7 from './img/i7.jpg';
import myimg8 from './img/i8.jpg';
import myimg9 from './img/i9.jpg';
import myimg10 from './img/i10.jpg';
import myimg11 from './img/i11.jpg';
import myimg12 from './img/i12.jpg';
import myimg13 from './img/i14.png';
import myimg14 from './img/i15.png';
import myimg15 from './img/i16.png';
import myimg16 from './img/i17.png';
import myimg17 from './img/i18.png';
import myimg18 from './img/i19.png';
import myimg19 from './img/f_logo.SVG';







function App(){
  return(
    <header>
      {/* top header */}
      <div className="bgblue">
        <div className="container">
          <div className="top_header flex">
            <div className="header_add flex"> 
              <div className="header_text flex">
                <p className="icon flex"><TfiEmail></TfiEmail></p>
                <span>info@cdmi.in</span>
              </div>
              <div className="header_text flex">
                <p className="icon flex"><FaCertificate></FaCertificate></p>
                <span>Verify Certificate</span>
              </div>
            </div>

            <div className="center_text">
                <span>HAVE ANY QUESTION ? +91 90333 16003</span>                  
            </div>
            
            <div className="right_icon flex">
              <p className="r_i"><FaFacebookF></FaFacebookF></p>
              <p className="r_i"><FaTwitter></FaTwitter></p>
              <p className="r_i"><FaLinkedin></FaLinkedin></p>
              <p className="r_i"><TiSocialInstagram></TiSocialInstagram></p>
              <p className="r_i"><AiOutlineYoutube></AiOutlineYoutube></p>
              <p className="r_i"><FaWhatsapp></FaWhatsapp></p>
            </div>
          </div>
        </div>
      </div>

    {/* navbar */}
      <nav>
        <div className="container">
          <div className="logo_header flex">
            <div className="logo">
              <img src={require ('./img/i1.SVG')}></img>
            </div>
            <div className="main_menu">
                <div className="s_menu"><a>HOME</a></div>
                <div className="s_menu">COURSES</div>
                <div className="s_menu">ACTIVITIES</div>
                <div className="s_menu">BLOG</div>
                <div className="s_menu">KONW US</div>
                <div className="s_menu">GET IN TOUCH</div>
                <div className="s_menu">STUDENT ZONE</div>
            </div>
          </div>
        </div>
      </nav>

    {/* slider */}
      <div className="img_1">
        <img src={require ('./img/i2.jpg')}></img>
      </div>

    {/* title */}
      <section>
        <div className="container">
          <div className="main_title">
            <p className="title_1">___CREATIVE COURSE</p>
            <p className="bold_text">OFFERED COURSES</p>
          </div>
        </div>
      </section>

    {/* service */}
    <section>
        <div className="container">
          <div className="main_ser flex">
            <div className="single_ser flex">
            <div className="box">
              <div className="ser_img">
                <img src={require ('./img/i3.jpg')}></img>
                <div className="name_text">
                  <a>Development Courses</a><hr></hr>
                  <div className="more_text flex">
                    <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                    <button>Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="ser_img">
                <img src={require ('./img/i4.jpg')}></img>
                <div className="name_text">
                  <a>Design Courses</a><hr></hr>
                  <div className="more_text flex">
                    <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                    <button>Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="ser_img">
                <img src={require ('./img/i5.jpg')}></img>
                <div className="name_text">
                  <a>Programming IT</a><hr></hr>
                  <div className="more_text flex">
                    <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                    <button>Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="main_ser flex">
            <div className="single_ser flex">
            <div className="box">
              <div className="ser_img">
                <img src={require ('./img/i6.jpg')}></img>
                <div className="name_text">
                  <a>Trendy Courses</a><hr></hr>
                  <div className="more_text flex">
                    <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                    <button>Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="box">
              <div className="ser_img">
                <img src={require ('./img/i7.jpg')}></img>
                <div className="name_text">
                  <a>Civil-Mech. Engineering</a><hr></hr>
                  <div className="more_text flex">
                    <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                    <button>Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="ser_img">
                <img src={require ('./img/i8.jpg')}></img>
                <div className="name_text">
                  <a>Business Development</a><hr></hr>
                  <div className="more_text flex">
                    <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                    <button>Know More..!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="button1">
          <button className="btn btn1">View All Courses</button>
        </div>
      </section>

    {/* about info */}
    <section>
        <div className="about_us flex">
          <div className="info">
            <p className="info_1">ABOUT US</p>
            <p className="info_2">IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
            <p className="info_3">Creative Design & Multimedia Institute(CDMI) is a reputed training
              institute in Gujarat for Data Science, Machine Learning, Blockchain Development,
              AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App 
              Development, Video Editing & All types of IT Courses with 9 years of full-fledged, 
              result-oriented training experience. We stepped in the market in 2014 with the goal to
              help students, working professionals and other interested candidates get that dream job 
              or open that desired freelance business in some of the most popular Computer / IT fields.
              Our aim is to ease the hiring process for businesses and organizations by providing work-ready 
              professionals who can contribute greatly to their success. Since then, we have worked hard to
              achieve this goal and dedicated our time and resources to train students extensively.</p>
              <div className="button2">
                <button className="btn btn2">Enroll Now..!<GoArrowRight></GoArrowRight></button>
              </div>
          </div>
          
          <div className="right_img flex">
              <img src={require ('./img/i9.jpg')}></img>      
          </div>

        </div>
    </section>


    <section>
      <div className="count1">
        <img src={require ('./img/i10.jpg')}></img>
      </div>

      <div className="container">
        <div className="count_icon flex">
          <div className="flex">
            <div className="count_img">
              <img src={require ('./img/i20.png')}></img>
              <p className="count">18000+</p>
              <p className="count_text">HAPPY STUDENTS</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i21.png')}></img>
              <p className="count">10+</p>
              <p className="count_text">CERTIFICATION APPROVAL</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i22.png')}></img>
              <p className="count">100+</p>
              <p className="count_text">CERTIFIED TEACHERS</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i23.png')}></img>
              <p className="count">12000+</p>
              <p className="count_text">STUDENTS PLACED</p>
            </div>  
          </div>
        </div>
      </div>
    </section>

    {/* testimonial */}
    <section>
      <div className="container">
        <div className="stu_info flex">
          <div className="tes_info">
            <p className="tes_1">___HAPPY STUDENTS</p>
            <p className="tes_2">ALUMNI SPEAK</p>
            <p className="tes_3"><FaQuoteRight></FaQuoteRight></p>
            <p className="tes_4">Good place to get trained on all the programming languages! Highly 
              qualified trainers with enthusiastic founder! Must visit for all the students
              who are interested to get jobs!</p>
            <div className="tes_img" >
              <img src={require ('./img/i13.jpg')}></img>
              <p className="ceo_stu">Nilay Rabadiya</p>
              <p className="name">CEO @ Techtical Solution</p>
            </div>
          </div>
          <div className="side_img flex">
          <img src={require ('./img/i11.jpg')} style={{objectFit:"cover", width:"90%"}}></img>
          </div>
        </div>
      </div>
    </section>
    <section> 
        <div className="container">
          <div className="main_title">
            <p className="title_1">___READ OUR DIFFERENCE</p>
            <p className="bold_text">WHY CHOOSE CREATIVE</p>
          </div>
        </div>
      </section>

      <section className="spacer">
    <div className="container">
        <div className="main_filp">
            <div className="single_filp">
                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                       <div className="our_i1"> <img src={require ('./img/1.png')}></img> </div>     
                            <h1 className="front_title">Industry Experts As Trainers</h1>
                            <p className="front_text">Our trainers have 5+ years of industry experience coupled with extensive research and analysis</p>   
                        </div>
                    </div> 
                </div>

                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="our_i2"> <img src={require ('./img/2.png')}></img> </div>     
                            <h1 className="front_title">Latest Curriculum</h1>
                            <p className="front_text">We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                        </div>
                    </div> 
                </div>

                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="our_i3"> <img src={require ('./img/3.png')}></img> </div>     
                            <h1 className="front_title">Latest Technology</h1>
                            <p className="front_text">We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div className="main_filp-2">
            <div className="single_filp">
                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="our_i4"> <img src={require ('./img/4.png')}></img> </div>     
                            <h1 className="front_title">Interview Assistance</h1>
                            <p className="front_text">At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>  
                        </div>
                    </div> 
                </div>

                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="our_i5"> <img src={require ('./img/5.png')}></img> </div>     
                            <h1 className="front_title">Free Upgradation</h1>
                            <p className="front_text">We will be provided free upgradation for any newer version of the course you have.</p>
                        </div>
                    </div> 
                </div>

                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="our_i6"> <img src={require ('./img/6.png')}></img> </div>     
                            <h1 className="front_title">Lifetime Support</h1>
                            <p className="front_text">We will provide you lifetime support on all the courses you learned from us.</p>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div>
    </div>
</section>
<section> 
        <div className="container">
          <div className="main_title">
            <p className="title_1">___STUDENT PLACEMENT</p>
            <p className="bold_text">OUR RECRUITMENT PARTNERS</p>
          </div>
        </div>
      </section>

      <section>
  <div className="container">
    <div className="logo_s flex">
      <div className="logo1">
        <img src={require ('./img/i14.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i15.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i16.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i17.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i18.png')}></img>
      </div>
    </div>
  </div>
</section>

<section className="demand">
  <div className="container">
    <p className="d-title">Our Demanded Course-</p>

    <div className="d-name flex">
      <div className="item-name flex">
        <p>Graphics Design Traning in Varachha</p>
        <p>Short Tram Computer Course</p>
        <p>Codeigniter Company in Surat</p>
        <p>Telly Accounting Traning in Katargam</p>
      </div>
    </div>

    <div className="d-name1 flex">
      <div className="item-name flex">
        <p>Spoken Engling Class in Surat</p>
        <p>Wordpress Institute in surat</p>
        <p>Solidwork Traning in Surat</p>
        <p>Best Python Traning institute</p>
      </div>
    </div>

    <div className="d-name2 flex">
      <div className="item-name flex">
        <p>Adobe Xd Design Traning Institute In Mota Varachha</p>
        <p>Photoshop Traning Institute In Katargam</p>
        <p>Learn Multimedia TraningCourse</p>
        <p> c Programming Languages Traning institute</p>
      </div>
    </div>

  </div>
</section>



<footer>
    <section>
        <div className="main_footer flex">
          <div className="single_table1 flex">
            <div className="logo_3">
              <img src={require ('./img/f_logo.SVG')}></img>
              <p className="logo_text">Creative Design and Multimedia Institute is leading computer training 
                institute in surat. We offers government approved computer training courses in Surat.</p>
              <p className="logo_text1">FOLLOW US ON</p>
              <div className="main_logo1 flex">
                <p className="side_logo"><FaFacebookF></FaFacebookF></p>
                <p className="side_logo"><FaTwitter></FaTwitter></p>
                <p className="side_logo"><TiSocialGooglePlus></TiSocialGooglePlus></p>
                <p className="side_logo"><FaLinkedin></FaLinkedin></p>
                <p className="side_logo"><TiSocialInstagram></TiSocialInstagram></p>
                <p className="side_logo"><AiOutlineYoutube></AiOutlineYoutube></p>
                <p className="side_logo"><FaWhatsapp></FaWhatsapp></p>
            </div>
          </div>
        </div>

        <div className="single_table2 flex">
            <div className="table_2">
              <p className="main_f">FEATURE LINKS</p>
              <p className="footer_text"><FaHandPointRight></FaHandPointRight> About Us</p>
              <p className="footer_text"><FaHandPointRight></FaHandPointRight> Blogs</p>
              <p className="footer_text"><FaHandPointRight></FaHandPointRight> Join Us</p>
              <p className="footer_text"><FaHandPointRight></FaHandPointRight> Company Login</p>
              <p className="footer_text"><FaHandPointRight></FaHandPointRight> Certificate Verification</p>
          </div>
        </div>

        <div className="single_table3 flex">
            <div className="table_3">
              <p className="add_info">CONTACT US</p>
              <p className="office">HEAD OFFICE - YOGICHOWK</p>
              <p className="address">401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <p className="footer_mo">Mo :<p className="number">+91 90333 16003</p></p>
              <p className="other">OTHER BRANCHES</p>
              <p className="footer_text3"><MdLocationCity></MdLocationCity> Katargam</p>
              <p className="footer_text3"><MdLocationCity></MdLocationCity> Mota Varachha</p>
              <p className="footer_text3"><MdLocationCity></MdLocationCity> Adajan</p>
              <p className="footer_text3"><MdLocationCity></MdLocationCity> Navsari</p>
          </div>
        </div>
      </div>
    </section>
</footer>
    </header>   
  )
}
export default App