const Events = () => {
  const events = [
    {
      title: "Weekly Matcha Tasting",
      date: "Every Wednesday",
      time: "4:00 PM - 5:00 PM",
      location: "Mathews Building, Room 204",
      description: "Join us for our signature weekly event where we explore different grades and origins of matcha.",
      type: "Regular",
    },
    {
      title: "Traditional Tea Ceremony Workshop",
      date: "March 18, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Culture Hub",
      description: "Learn the authentic Japanese tea ceremony with guidance from our experienced practitioners.",
      type: "Workshop",
    },
    {
      title: "Matcha & Mindfulness Session",
      date: "March 22, 2024",
      time: "5:00 PM - 6:00 PM",
      location: "Library Study Room 5",
      description: "Combine meditation practices with matcha preparation for the perfect stress-relief session.",
      type: "Wellness",
    },
    {
      title: "Cultural Exchange Dinner",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Campus East Restaurant",
      description: "Monthly social dinner featuring Japanese cuisine and cultural discussions.",
      type: "Social",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop": return "bg-matcha/10 text-matcha border-matcha/20";
      case "Social": return "bg-muted/10 text-muted-foreground border-muted/20";
      case "Wellness": return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      default: return "bg-matcha/10 text-matcha border-matcha/20";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-warm-beige/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Upcoming <span className="text-matcha">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for engaging activities that celebrate matcha culture, foster community,
            and provide opportunities for learning and relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-matcha/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground flex-1">{event.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full text-sm border ${getTypeColor(event.type)}`}>
                  {event.type}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-matcha">🗓️</span>
                  <span className="text-foreground font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matcha">⏰</span>
                  <span className="text-muted-foreground">{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matcha">📍</span>
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{event.description}</p>
              
              <button className="w-full bg-matcha-dark text-primary-foreground py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md">
                RSVP Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-matcha/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Follow us on social media or join our mailing list to never miss an event!
            </p>
            <div className="flex-col sm:flex-row gap-4 justify-center">
              <button className="flex-1 py-2 px-6 bg-matcha-dark text-primary-foreground rounded-lg transition-all duration-300">
                Join Mailing List
              </button>
              <button className="flex-1 py-2 px-6 border border-matcha text-matcha hover:bg-matcha hover:text-primary-foreground rounded-lg transition-all duration-300">
                Follow on Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;