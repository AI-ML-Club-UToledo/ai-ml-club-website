import { useState, useEffect } from 'react';
import NetworkBackground from '../NetworkBackground';
import './Events.css';

// Auto-import AWS event photos from assets (Vite glob)
const awsModules = import.meta.glob('/src/assets/events/aws/*.{png,jpg,jpeg,gif,webp}', { eager: true });
const awsImages = Object.entries(awsModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default);
const awsCover = awsImages[0] || '/images/events/aws1.jpg';

// Auto-import HalloweEngineering event photos from assets
const halloweenModules = import.meta.glob('/src/assets/events/halloweengineering/*.{png,jpg,jpeg,gif,webp}', { eager: true });
const halloweenImages = Object.entries(halloweenModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default);
const halloweenCover = halloweenImages[0] || 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=800&q=80';

function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photoDirection, setPhotoDirection] = useState('forward'); // 'forward' or 'back'
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const upcomingEvents = [
    {
      id: 1,
      title: "Curiosity to Code: Your First Step into AI/ML",
      date: "November 18, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "Nitschke Hall Brady Center",
      description: "Every innovation starts with curiosity. Join the AI/ML Club as we explore the fundamentals of Artificial Intelligence and Machine Learning in an interactive, beginner-friendly workshop. Learn how machines learn, where AI is used, and how you can start building your own projects.",
      registerLink: "https://invonet.utoledo.edu/event/11848634"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "AWS DeepRacer Workshop",
      date: "February 8, 2025",
      location: "SU Ingman Room",
      description: "Hands-on session exploring how AI powers autonomous racing through machine learning.",
      coverImage: awsCover,
      photos: awsImages
    },
    {
      id: 2,
      title: "UTEC HalloweEngineering",
      date: "October 22-24, 2025",
      location: "Nitschke Hall",
      description: "A Halloween-themed outreach event featuring fun, hands-on STEM activities for middle and high-school students.",
      coverImage: halloweenCover,
      photos: halloweenImages
    },
    {
      id: 3,
      title: "Coming Soon",
      date: "TBD",
      location: "TBD",
      description: "Details for our next past event will be added soon.",
      coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      photos: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
      ]
    }
  ];

  const openGallery = (event) => {
    setSelectedEvent(event);
    setCurrentPhotoIndex(0);
    setPhotoDirection('forward');
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    setCurrentPhotoIndex(0);
  };

  const cycleIndex = (current, max, direction) => {
    return direction === 'next' 
      ? (current === max - 1 ? 0 : current + 1)
      : (current === 0 ? max - 1 : current - 1);
  };

  const nextPhoto = () => {
    if (!selectedEvent) return;
    setPhotoDirection('forward');
    setCurrentPhotoIndex((prev) => 
      cycleIndex(prev, selectedEvent.photos.length, 'next')
    );
  };

  const prevPhoto = () => {
    if (!selectedEvent) return;
    setPhotoDirection('back');
    setCurrentPhotoIndex((prev) => 
      cycleIndex(prev, selectedEvent.photos.length, 'prev')
    );
  };

  const nextEvent = () => {
    setCurrentEventIndex((prev) => cycleIndex(prev, pastEvents.length, 'next'));
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => cycleIndex(prev, pastEvents.length, 'prev'));
  };


  useEffect(() => {
    if (!selectedEvent) return;
    
    const handleKey = (e) => {
      const event = selectedEvent; // Capture current value
      if (!event) return;
      
      switch (e.key) {
        case 'ArrowRight':
          setPhotoDirection('forward');
          setCurrentPhotoIndex((prev) => 
            cycleIndex(prev, event.photos.length, 'next')
          );
          break;
        case 'ArrowLeft':
          setPhotoDirection('back');
          setCurrentPhotoIndex((prev) => 
            cycleIndex(prev, event.photos.length, 'prev')
          );
          break;
        case 'Escape':
          setSelectedEvent(null);
          setCurrentPhotoIndex(0);
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedEvent]);


  return (
    <section id="events" className="section events-section">
      <NetworkBackground />
      <div className="events-container">
        <div className="events-header">
          <div className="events-toggle">
            <button 
              className={`toggle-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
            <button 
              className={`toggle-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
          </div>
        </div>
        
        <div className="events-content">
          {activeTab === 'upcoming' && (
            <div className="events-grid">
              {upcomingEvents.map(event => (
                <div key={event.id} className="event-card upcoming">
                  <div className="event-header">
                    <h4 className="event-title">{event.title}</h4>
                    <span className="event-badge">Upcoming</span>
                  </div>
                  <div className="event-details">
                    <p className="event-date">📅 {event.date}</p>
                    <p className="event-time">🕒 {event.time}</p>
                    <p className="event-location">📍 {event.location}</p>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <a 
                    href={event.registerLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="event-register-btn"
                  >
                    Register Now
                  </a>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'past' && (
            <div className="past-events-carousel">
              <button className="carousel-nav carousel-prev" onClick={prevEvent}>
                ‹
              </button>
              
              <div 
                className="past-event-card-large"
                onClick={() => openGallery(pastEvents[currentEventIndex])}
                style={{ backgroundImage: `url(${pastEvents[currentEventIndex].coverImage})` }}
              >
                <div className="past-event-overlay-large">
                  <h3 className="past-event-title-large">{pastEvents[currentEventIndex].title}</h3>
                  <p className="past-event-location-large">📍 {pastEvents[currentEventIndex].location}</p>
                  <p className="past-event-description-large">{pastEvents[currentEventIndex].description}</p>
                  <p className="past-event-date-large">{pastEvents[currentEventIndex].date}</p>
                  <div className="click-hint">Click to view photos →</div>
                </div>
              </div>
              
              <button className="carousel-nav carousel-next" onClick={nextEvent}>
                ›
              </button>
              
              <div className="carousel-dots">
                {pastEvents.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentEventIndex ? 'active' : ''}`}
                    onClick={() => setCurrentEventIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full-screen Photo Gallery Modal */}
      {selectedEvent && (
        <div className="gallery-modal" onClick={closeGallery}>
          <button className="gallery-close" onClick={closeGallery}>
            ✕
          </button>
          
          <button className="gallery-nav gallery-prev" onClick={(e) => { e.stopPropagation(); prevPhoto(); }}>
            ‹
          </button>
          
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <img 
              key={`gallery-photo-${selectedEvent.id}-${currentPhotoIndex}-${photoDirection}`}
              src={selectedEvent.photos[currentPhotoIndex]} 
              alt={`${selectedEvent.title} - Photo ${currentPhotoIndex + 1}`}
              className={`gallery-image slide-${photoDirection}`}
            />
            
            <div className="gallery-info">
              <h3 className="gallery-title">{selectedEvent.title}</h3>
              <p className="gallery-counter">
                {currentPhotoIndex + 1} / {selectedEvent.photos.length}
              </p>
            </div>

            {/* Thumbnail strip */}
            <div className="gallery-thumbnails">
              {selectedEvent.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className={`gallery-thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
                  onClick={() => {
                    if (index === currentPhotoIndex) return;
                    setPhotoDirection(index > currentPhotoIndex ? 'forward' : 'back');
                    setCurrentPhotoIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
          
          <button className="gallery-nav gallery-next" onClick={(e) => { e.stopPropagation(); nextPhoto(); }}>
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Events;

