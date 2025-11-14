import NetworkBackground from '../NetworkBackground';
import { FaLinkedin } from 'react-icons/fa';
import './Members.css';
import ShubhamVerma from '../../assets/team/ShubhamVerma.jpeg';
import AayushiGoel from '../../assets/team/AayushiGoel.jpeg';
import RohitPatidar from '../../assets/team/RohitPatidar.jpeg';
import ZaidSiddiqui from '../../assets/team/ZaidSiddiqui.jpeg';
import AshishKharel from '../../assets/team/AshishKharel.jpeg';

const getPlaceholderImage = (name) => 
  `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23112244" width="200" height="200"/%3E%3Ctext fill="%234ff0ff" font-family="Arial" font-size="60" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E${name.charAt(0)}%3C/text%3E%3C/svg%3E`;

const handleImageError = (e, name) => {
  e.target.src = getPlaceholderImage(name);
};

const eboardMembers = [
  {
    name: 'Shubham Verma',
    title: 'President',
    image: ShubhamVerma,
    linkedin: 'https://www.linkedin.com/in/shubham-verma-cse/',
    funFact: 'Loves playing with hardware and building drones in his free time',
  },
  {
    name: 'Aayushi Goel',
    title: 'Vice President',
    image: AayushiGoel,
    linkedin: 'https://www.linkedin.com/in/aayushi-goel0702/',
    funFact: 'Won the AWS Deepracer Workshop',
  },
  {
    name: 'Rohit Patidar',
    title: 'Treasurer',
    image: RohitPatidar,
    linkedin: 'https://www.linkedin.com/in/rohit-patidar1504/',
    funFact: 'Can solve a Rubik\'s cube in under 2 minutes',
  },
  {
    name: 'Zaid Siddiqui',
    title: 'Technical Chair',
    image: ZaidSiddiqui,
    linkedin: 'https://www.linkedin.com/in/zaid-siddiqui-22a1a52b7/',
    funFact: 'Once scored a half line volley goal in football',
  },
  {
    name: 'Interested?',
    title: 'Marketing Chair',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23112244" width="200" height="200"/%3E%3Ctext fill="%234ff0ff" font-family="Arial" font-size="100" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dy=".35em"%3E?%3C/text%3E%3C/svg%3E',
    linkedin: 'https://linkedin.com/in/mikechen',
    funFact: 'Join us by reaching out!',
  },
  {
    name: 'Dr. Ashish Kharel',
    title: 'Faculty Advisor',
    image: AshishKharel,
    linkedin: 'https://www.linkedin.com/in/ashish-kharel/',
    funFact: 'Organized 20+ tech events in the past year',
  },
];

function Members() {
  return (
    <section id="members" className="section members-section">
      <NetworkBackground />
      <div className="members-container">
        <div className="members-header">
          <h2 className="members-title">Our Team</h2>
          <p className="members-subtitle">
            Meet the executive board leading our AI/ML community
          </p>
        </div>
        
        <div className="members-grid">
          {eboardMembers.map((member) => (
            <div key={member.name} className="member-card-wrapper">
              <div className="member-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="member-image"
                      onError={(e) => handleImageError(e, member.name)}
                    />
                  </div>
                  <div className="flip-card-back">
                    <p className="fun-fact-label">Fun Fact</p>
                    <p className="fun-fact-text">{member.funFact}</p>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="member-link"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;

