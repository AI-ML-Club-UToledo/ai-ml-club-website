import React, { useState } from 'react';
import NetworkBackground from '../NetworkBackground';
import './Events.css';

function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const upcomingEvents = [
    {
      id: 1,
      title: "Machine Learning Workshop",
      date: "November 15, 2025",
      time: "10:00 PM - 5:00 PM",
      location: "SU, Ingman Room",
      description: "Hands-on workshop covering the fundamentals of machine learning with Python and scikit-learn."
    },
    {
      id: 2,
      title: "AI Ethics Panel Discussion",
      date: "November 22, 2025",
      time: "3:00 PM - 4:30 PM",
      location: "Student Union, Auditorium",
      description: "Join experts as they discuss the ethical implications of AI in modern society."
    },
    {
      id: 3,
      title: "Deep Learning Hackathon",
      date: "December 5, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Computer Science Lab",
      description: "24-hour hackathon focused on building deep learning projects. Prizes for top teams!"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "AWS DeepRacer Workshop",
      date: "February 8, 2025",
      location: "SU Ingman Room",
      description: "Hands-on session exploring how AI powers autonomous racing through machine learning.",
      coverImage: "/images/events/aws1.jpg",
      photos: [
        "/images/events/aws1.jpg",
        "/images/events/aws2.jpg",
        "/images/events/aws4.jpg",
        "/images/events/aws3.jpg"
      ]
    },
    {
      id: 2,
      title: "Python for Data Science",
      date: "September 20, 2025",
      location: "Library, Computer Lab",
      description: "Workshop covering NumPy, Pandas, and Matplotlib for data analysis.",
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      photos: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80"
      ]
    },
    {
      id: 3,
      title: "AI Industry Career Fair",
      date: "September 5, 2025",
      location: "Student Union",
      description: "Meet with industry professionals and learn about career opportunities in AI/ML.",
      coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      photos: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80"
      ]
    }
  ];

  const openGallery = (event) => {
    setSelectedEvent(event);
    setCurrentPhotoIndex(0);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedEvent) {
      setCurrentPhotoIndex((prev) => 
        prev === selectedEvent.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedEvent) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? selectedEvent.photos.length - 1 : prev - 1
      );
    }
  };

  const nextEvent = () => {
    setCurrentEventIndex((prev) => 
      prev === pastEvents.length - 1 ? 0 : prev + 1
    );
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => 
      prev === 0 ? pastEvents.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (!selectedEvent) return;
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'Escape') closeGallery();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent, currentPhotoIndex]);


  return (
    <section id="events" className="section events-section">
      <NetworkBackground />
      <div className="events-container">
        <div className="events-header">
          <h2 className="section-title">Events</h2>
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
                  <button className="event-register-btn">Register Now</button>
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
              src={selectedEvent.photos[currentPhotoIndex]} 
              alt={`${selectedEvent.title} - Photo ${currentPhotoIndex + 1}`}
              className="gallery-image"
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
                  onClick={() => setCurrentPhotoIndex(index)}
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

