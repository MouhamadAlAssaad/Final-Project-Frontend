import React from "react";
import heroImage from "../../components/images/5111593.jpg";
import flowe from "../../components/images/flower.svg";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="home-page-hero-section" id="home">
        <div className="hero-section-desc basis">
          <img src={flowe} className="flower" width="100px" />
          <h1>Care And Embrace</h1>
          <p>
            A midwife clinic is a specialized healthcare facility that provides
            comprehensive care to women during pregnancy, childbirth, and the
            postpartum period. Midwives offer personalized support, prenatal
            check-ups, assist in labor and delivery, and provide postpartum
            care, promoting positive birth experiences and women's overall
            well-being.
          </p>
        </div>
        <div className="hero-section-img basis">
          <img src={heroImage} width="100%" />
        </div>
      </section>
      <section id="our-services" >
          <h1 className="our-services-title">OUR SERVICES</h1>
        <div className="homepage-services-cards">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="profile-image">
                  <div className="name">Prenatal Care</div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="Description">
                  <p className="description">
                    Midwives offer prenatal care, monitoring the health of the
                    mother and baby, providing check-ups, guidance on healthy
                    choices, and education about pregnancy changes. They help
                    create birth plans and offer emotional support throughout
                    the journey.
                  </p>
                  <div classNameName="socialbar"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="profile-image">
                  <div className="name">Labor and Birth Support</div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="Description">
                  <p className="description">
                    Midwives support women during labor and childbirth,
                    providing continuous care, comfort measures, and emotional
                    support. They assist with natural birth processes, monitor
                    progress, and ensure safety for mother and baby.
                  </p>
                  <div className="socialbar"></div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="profile-image">
                  <div className="name">Postpartum Care</div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="Description">
                  <p className="description">
                    Midwives offer postpartum care and support, assisting with
                    breastfeeding, newborn care, and addressing new mother's
                    concerns. They monitor recovery, provide check-ups, and
                    offer emotional support as women adjust to parenthood. They
                    prioritize the well-being of both mother and baby during
                    this critical phase.
                  </p>
                  <div className="socialbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
