import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>R.EDWARD JOSHUA </span>
        from <span className={s.purple}> TIRUNELVELI, TAMILNADU.</span>
        <br />
        Software engineer with expertise in cross-platform development{' '}
        <br />
        using React Native.
        <br />
        <br />
        I have a Bachelor's degree in Computer Science in nagercoil, kaniyakumari district.
        
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Listing music
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Drawing
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Love In Nature
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
