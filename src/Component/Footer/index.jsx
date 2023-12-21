import { Telegram } from '@mui/icons-material';
import { Phone } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {

  const phoneNumber = '+380637119969'; 
  const telegramUsername = 'NasticBaz';
  const emailAddress = 'nasticbazlic@gmail.com';

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleTelegramClick = () => {
    window.location.href = `https://t.me/${telegramUsername}`;
  };
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
		<footer className='contacts' id='contacts'>
      <div>
        <Phone /> <a href={`tel:${phoneNumber}`} onClick={handlePhoneCall}>{phoneNumber}</a>
      </div>
      <div>
        <Telegram /> <a href={`https://t.me/${telegramUsername}`} onClick={handleTelegramClick}>{telegramUsername}</a>
      </div>
      <div>
        <Email /> <a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>{emailAddress}</a>
      </div>
    </footer>
	)
}

export default Footer;