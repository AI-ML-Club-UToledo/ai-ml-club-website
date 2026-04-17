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

// Auto-import Brady Center event photos from assets
const bradyModules = import.meta.glob('/src/assets/events/bradycenter/*.{png,jpg,jpeg,gif,webp}', { eager: true });
const bradyImages = Object.entries(bradyModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default);
console.log('Brady Images:', bradyImages.length, bradyImages);
const bradyCover = bradyImages.length > 0 ? bradyImages[0] : 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80';
console.log('Brady Cover:', bradyCover);

// Auto-import Prompt Engineering event photos from assets
const promptModules = import.meta.glob('/src/assets/events/promptengineering/*.{png,jpg,jpeg,gif,webp}', { eager: true });
const promptImages = Object.entries(promptModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default);
const promptCover = promptImages.length > 0 ? promptImages[0] : 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80';

// Auto-import Hot Data, Cool Solutions event photos from assets
const hotcoolModules = import.meta.glob('/src/assets/events/hotcool/*.{png,jpg,jpeg,gif,webp}', { eager: true });
const hotcoolImages = Object.entries(hotcoolModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default);
const hotcoolCover = hotcoolImages.length > 0 ? hotcoolImages[0] : 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';

function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photoDirection, setPhotoDirection] = useState('forward'); // 'forward' or 'back'
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState('forward');

  const upcomingEvents = [];

  const pastEvents = [
    {
      id: 4,
      title: "AWS DeepRacer Workshop",
      date: "February 8, 2025",
      location: "SU Ingman Room",
      description: "Hands-on session exploring how AI powers autonomous racing through machine learning.",
      coverImage: awsCover,
      photos: awsImages
    },
    {
      id: 3,
      title: "UTEC HalloweEngineering",
      date: "October 22-24, 2025",
      location: "Nitschke Hall",
      description: "A Halloween-themed outreach event featuring fun, hands-on STEM activities for middle and high-school students.",
      coverImage: halloweenCover,
      photos: halloweenImages
    },
    {
      id: 2,
      title: "Prompt Engineering Workshop",
      date: "November 8, 2025",
      location: "Brady Center",
      description: "Hands-on workshop exploring effective prompt engineering techniques for AI systems, hosted during the Engineering Leadership Summit by UTEC.",
      coverImage: promptCover,
      photos: promptImages
    },
    {
      id: 1,
      title: "Curiosity to Code: Your First Step into AI/ML",
      date: "November 18, 2025",
      location: "The Brady Center",
      description: "Interactive workshop exploring AI and Machine Learning fundamentals for beginners.",
      coverImage: bradyCover,
      photos: bradyImages
    },
    {
      id: 5,
      title: "Hot Data, Cool Solutions: A workshop by Dr. Anju Gupta",
      date: "April 16th, 2026",
      location: "NE 1300",
      description: "A workshop bridging heat transfer fundamentals with machine learning methods, applied to the thermal limits of modern data center cooling systems.",
      coverImage: hotcoolCover,
      photos: hotcoolImages
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
    setCarouselDirection('forward');
    setCurrentEventIndex((prev) => cycleIndex(prev, pastEvents.length, 'next'));
  };

  const prevEvent = () => {
    setCarouselDirection('backward');
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
            <div className="events-grid upcoming-align">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map(event => (
                  <div key={event.id} className="event-card upcoming upcoming-large-card">
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
                ))
              ) : (
                <div className="upcoming-empty-state">
                  <h3>No events yet...</h3>
                  <p>Stay tuned for updates and exciting workshops coming soon.</p>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'past' && (
            <div className="past-events-carousel">
              <button className="carousel-nav carousel-prev" onClick={prevEvent}>
                ‹
              </button>
              
              <div 
                key={currentEventIndex}
                className={`past-event-card-large slide-${carouselDirection}`}
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

