import React from "react";

/**
 * About Us page for Paradise Nursery.
 * Describes the company, its mission and the nursery team.
 */
function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Paradise Nursery</h1>

      <p>
        Paradise Nursery was founded in 2016 by a small group of plant lovers who
        wanted to make healthy indoor plants accessible to everyone. What started
        as a weekend stall at a local farmers market has grown into a full
        online garden centre serving more than 40,000 households.
      </p>

      <h2>Our Mission</h2>
      <p>
        We believe a greener home is a calmer home. Our mission is to help people
        build a living space that feels healthy and welcoming, one plant at a
        time. Every houseplant we ship is grown in our own climate controlled
        nursery, inspected by hand, and packed so it arrives ready to thrive.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Over 60 varieties of air purifying houseplants</li>
        <li>Beginner friendly plant care guides with every order</li>
        <li>Sustainable packaging and peat free soil</li>
        <li>Free replacement guarantee for the first 30 days</li>
      </ul>

      <h2>Our Team</h2>
      <p>
        Our horticulturists bring more than 50 years of combined experience in
        botany and sustainable agriculture. The customer care team answers every
        question personally, because we want your plants to live as long as
        possible.
      </p>
    </div>
  );
}

export default AboutUs;
