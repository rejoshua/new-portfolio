import s from './IntroSection.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {

  FaLinkedinIn,
  FaInstagramSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
 

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a web Developer with eight month 
              experience <br />
            
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  html , css ,javascript , reactjs
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in
              integrating various <br />
              third-party libraries, API integration, push
              notifications and analytics.
            </p>

     
          </div>
        </div>
    
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/rejoshua"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="whatsapp"
            >
              <FaWhatsappSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/2smart__swag/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="instagram"
            >
              <FaInstagramSquare/>
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/edward-joshua-b3305a246/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
