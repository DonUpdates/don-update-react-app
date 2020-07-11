import { Card, Tabs } from '../../components';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';

const newsData = [
	{ id: 1, content: 'கேரள தங்க கடத்தலில் தொடர்புடைய ஸ்வப்னா என்ஐஏ அமைப்பால் பெங்களூருவில் கைது', time: '9:00 AM' },
	{ id: 2, content: `அதிமுக செய்தித்தொடர்பாளரும், தகவல் தொழில்நுட்ப மண்டல செயலாளருமான கோவை சத்யனுக்கு கொரோனா தொற்று உறுதி

	கொரோனாவால் பாதிக்கப்பட்ட கோவை சத்யன் சென்னை கிங் இன்ஸ்டிடியூட்டில் சிகிச்சைக்காக அனுமதி`, time: '10:00 AM' },
	{ id: 3, content: 'தூத்துக்குடி : ஸ்ரீவைகுண்டம் அருகே ஏரலில் நாளைமுதல் ஜூலை 19 வரை கடைகளை அடைக்க வியாபாரிகள் முடிவு', time: '12:00 PM' },
	{ id: 4,content: 'அறந்தாங்கி் : ஜூலை 15-22 வரை பால், மருந்து கடைகள் தவிர பிற கடைகளை அடைக்க வர்த்தக சங்கம் முடிவு', time: '1:00 PM' },
	{ id: 5, content: 'வரும் 14ஆம் தேதி தலைமைச் செயலகத்தில் தமிழக அமைச்சரவைக் கூட்டம் நடைபெறவுள்ளது.', time: '2:00 PM' },
	{ id: 6, content: `டெல்லியில் அனைத்து பல்கலைக்கழகங்களின் செமஸ்டர் தேர்வுகளும் ரத்து

	இறுதி ஆண்டு தேர்வும் ரத்து என டெல்லி அரசு அறிவிப்பு`, time: '4:00 PM' },
	{ id: 7, content: `தமிழகத்தில் அடுத்த 24 மணி நேரத்தில் 15 மாவட்டங்களில் கனமழை பெய்ய வாய்ப்பு

	வானிலை ஆய்வு மையம்`, time: '10:00 PM' },
]

const breakingData = [
	{ id: 1, content: 'தமிழக பாடத்திட்டத்தில் பாடங்களை குறைப்பது குறித்து திங்கட்கிழமை முடிவு செய்யப்படும்; அமைச்சர் செங்கோட்டையன்', time: '7:00 AM' },
	{ id: 2, content: 'புதுச்சேரி பாகூர் தொகுதி எம்.எல்.ஏ தனவேலுவை (காங்கிரஸ் அதிருப்தி) தகுதி நீக்கம் செய்து சபாநாயகர் உத்தரவு', time: '11:00 AM' },
	{ id: 3, content: 'திருச்சி எஸ்.பி.யாக இருந்த ஜியாவுல் ஹப் கள்ளக்குறிச்சி எஸ்.பி.யாக நியமனம்', time: '12:30 PM' },
	{ id: 4, content: `நாவலர் நெடுஞ்செழியனுக்கு சேப்பாக்கம் விருந்தினர் மாளிகையில் முழு உருவ வெண்கலச் சிலை அமைக்கப்படும்.

	அவரது பிறந்த நாளான ஜூலை 11 ஒவ்வொரு ஆண்டும் அரசு விழாவாக கொண்டாடப்படும்.
	
	- முதலமைச்சர்`, time: '1:00 PM' },
	{ id: 5, content: 'ஓய்வூதியதாரர்கள், குடும்ப ஓய்வூதியம் பெறுவோர் வாழ்வு சான்றிதழ் நேரில் சென்று சமர்ப்பிக்க ஓராண்டு விலக்கு', time: '4:00 PM' },
	{ id: 6, content: 'கொரோனாவால் ஏற்பட்டுள்ள நிதி நெருக்கடியால் சிறப்பாக பணியாற்றும் அரசு ஊழியர்கள், அதிகாரிகளுக்கு வழங்கப்பட்ட மதிப்பு ஊதியம் ரத்து செய்து அரசனை வெளியீடு', time: '6:55 PM' },
	{ id: 7, content: 'ICSE & ISC பாடத்திட்டத்தின் கீழ் நடைபெற்ற 10, 12-ம் வகுப்புகளுக்கான பொதுத்தேர்வு முடிவுகள் https://cisce.org இணையதளத்தில் வெளியீடு.', time: '11:55 PM' },
]

const infoData = [
	{ id: 1, content: 'ரயில்வே துறையில் பாதுகாப்பு பிரிவை தவிர்த்து மற்ற பிரிவுகளில் காலி பணியிடங்களை நிரப்புவதை நிறுத்தி வைக்க முடிவு', time: '8:30 AM' },
	{ id: 2, content: 'கொரோனாவுக்கு மருந்து கண்டுபிடித்ததாக கூறியதால் கைது செய்யப்பட்ட தணிகாசலத்திற்கு நிபந்தனை ஜாமீன் வழங்கியது சென்னை எழும்பூர் நீதிமன்றம்', time: '10:30 AM' },
	{ id: 3, content: 'சென்னையில் கொரனோ பரிசோதனை முடிவுகளை குறுஞ்செய்தி வாயிலாக தெரிவிக்கும் நடைமுறையை இன்று முதல் சென்னை மாநகராட்சி அமல்படுத்தியுள்ளது', time: '11:30 AM' },
	{ id: 4, content: 'அதிமுகவில் சசிகலாவுக்கு இடமில்லை - அமைச்சர் ஜெயகுமார்', time: '12:00 PM' },
	{ id: 5, content: 'கூட்டுறவுத்துறை அமைச்சர் செல்லூர் ராஜூக்கு கொரோனா தொற்று உறுதி செய்யப்பட்டுள்ளது', time: '3:00 PM' },
	{ id: 6, content: 'நாளை இரவு 10 மணி முதல் 13-ஆம் தேதி காலை 5 மணி வரை உத்தரபிரதேச மாநிலம் முழுவதும் பொது முடக்கம்', time: '5:45 PM' },
	{ id: 7, content: 'விருத்தாசலம் - திமுக முன்னாள் எம்.எல்.ஏ குழந்தை தமிழரசன் காலமானார்!', time: '9:25 PM' },
]

const Home = ({ ...props }) => {
	const [news, setNews] = React.useState([]);
	const [breaking, setBreaking] = React.useState([]);
	const [info, setInfo] = React.useState([]);

	React.useEffect(() => {
		setNews(newsData);
		setBreaking(breakingData);
		setInfo(infoData);
	  }, []);
	
	const { classes } = props;
	
	const onRemoveNewsClick = (id) => {
		setNews(news.filter(x => x.id !== id));
	}
	const onRemoveBreakingClick = (id) => {
		setBreaking(breaking.filter(x => x.id !== id));
	}
	const onRemoveInfoClick = (id) => {
		setInfo(info.filter(x => x.id !== id));
	}
	
	return (
    <>
      <div className={classes.bottomContainer}>
        <Tabs
          newsItem={
            <>
			  {
				news.map((x, index) => (
					<Card
					key={index}
					content={x.content}
					time={x.time}
					onRemoveClick={(e) => onRemoveNewsClick(x.id)}
					/>
				))
			  }
            </>
		  }
		  breakingItem={
            <>
			  {
				breaking.map((x, index) => (
					<Card
					key={index}
					content={x.content}
					time={x.time}
					onRemoveClick={(e) => onRemoveBreakingClick(x.id)}
					/>
				))
			  }
            </>
		  }
		  infoItem={
            <>
			  {
				info.map((x, index) => (
					<Card
					key={index}
					content={x.content}
					time={x.time}
					onRemoveClick={(e) => onRemoveInfoClick(x.id)}
					/>
				))
			  }
            </>
          }
        />
      </div>
    </>
  );
};

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Home);
