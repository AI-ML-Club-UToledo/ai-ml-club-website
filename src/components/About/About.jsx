import NetworkBackground from '../NetworkBackground';
import { HiBookOpen, HiUserGroup, HiCode } from 'react-icons/hi';
import './About.css';

const ABOUT_CONTENT = {
  title: 'About',
  description: 'The AI/ML Club is where curiosity meets creation. We explore the world of Artificial Intelligence and Machine Learning through hands-on projects, workshops, and collaborations. Our goal? To learn, innovate, and build — turning bold ideas into real impact. Whether you\'re new to AI or an expert in the making, this is your space to grow, connect, and create the future.',
  joinButton: {
    text: 'Join Us',
    url: 'https://invonet.utoledo.edu/organization/ai',
  },
  whatWeDo: {
    title: 'What We Do',
    cards: [
      {
        id: 1,
        title: 'Workshops',
        description: 'Hands-on workshops and interactive sessions to master AI and ML concepts from fundamentals to advanced techniques.',
        icon: HiBookOpen,
      },
      {
        id: 2,
        title: 'Collab with Tech Companies',
        description: 'Partner with leading tech companies to gain real-world experience, industry insights, and networking opportunities.',
        icon: HiUserGroup,
      },
      {
        id: 3,
        title: 'AI Projects',
        description: 'Build innovative AI projects and solutions that solve real-world problems using cutting-edge machine learning technologies.',
        icon: HiCode,
      },
    ],
  },
};

function About() {
  return (
    <section id="about" className="section about-section">
      <NetworkBackground />
      <div className="section-content">
        <h2 className="section-title">{ABOUT_CONTENT.title}</h2>
        <p className="section-text">
          {ABOUT_CONTENT.description}
        </p>
        <a
          href={ABOUT_CONTENT.joinButton.url}
          className="join-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ABOUT_CONTENT.joinButton.text}
        </a>
        
        <div className="what-we-do">
          <h3 className="what-we-do-title">{ABOUT_CONTENT.whatWeDo.title}</h3>
          <div className="what-we-do-cards">
            {ABOUT_CONTENT.whatWeDo.cards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div key={card.id} className="what-we-do-card">
                  <div className="card-icon">
                    <IconComponent />
                  </div>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-description">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

