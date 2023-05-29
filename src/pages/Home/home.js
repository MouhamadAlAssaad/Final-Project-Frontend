import React from "react";
import Contact from "../../components/contactus/contactus";
import heroImage from "../../components/images/5111593.jpg";
import flowe from "../../components/images/flower.svg";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="home-page-hero-section" id="home">
        <div className="hero-section-desc basis">
          <img src={flowe} className="flower" width="100px" />
          <h1>Care And Embrace Clinic</h1>
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
      <section id="our-services">
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
      <section className="home-page-tips" id="tips">
        <h1 className="pregn-tips">PREGNANCY TIPS</h1>
        <div className="befor-pregnancy-tips">
          <h1 className="befor-preg-title">Before Pregnancy</h1>

          <div className="bef-pregn-tipsss">
            <div className="box-1">
              <div className="first-befor-tip">
                <h3>1-Preconception Care</h3>
                <p>
                  Seek preconception care to optimize your health before getting
                  pregnant. This may involve reviewing your medical history,
                  assessing any chronic conditions, and making necessary
                  lifestyle changes.
                </p>
              </div>
              <div className="second-befor-tip">
                <h3>2-Nutrition and Supplements</h3>
                <p>
                  Focus on a well-balanced diet that includes a variety of
                  fruits, vegetables, whole grains, lean proteins, and healthy
                  fats. Discuss the need for prenatal vitamins and supplements
                  like folic acid with your midwife.
                </p>
              </div>
            </div>
            <div className="box-2">
              <div className="third-befor-tip">
                <h3>3-Lifestyle Choices</h3>
                <p>
                  Avoid smoking, alcohol, and illicit drugs. Maintain a healthy
                  weight and engage in regular exercise.
                </p>
              </div>
              <div className="fourth-befor-tip">
                <h3>4-Genetic Testing</h3>
                <p>
                  Consider genetic testing or counseling if you have a family
                  history of genetic disorders or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="during-pregnancy-tips">
          <h1 className="during-preg-title">During Pregnancy</h1>

          <div className="dur-pregn-tipsss">
            <div className="box-1">
              <div className="first-dur-tip">
                <h3>1-Prenatal Care</h3>
                <p>
                  Attend regular prenatal check-ups with your midwife to monitor
                  your health and the development of the baby.
                </p>
              </div>
              <div className="second-dur-tip">
                <h3>2-Nutrition</h3>
                <p>
                  Engage in regular low-impact exercises approved by your
                  midwife. Avoid activities with a high risk of falling or
                  injury.
                </p>
              </div>
            </div>

            <div className="box-2">
              <div className="third-dur-tip">
                <h3>3-Exercise</h3>
                <p>
                  Avoid smoking, alcohol, and illicit drugs. Maintain a healthy
                  weight and engage in regular exercise.
                </p>
              </div>

              <div className="fourth-dur-tip  ">
                <h3>4-Birth Plan</h3>
                <p>
                  Discuss your birth preferences and create a birth plan with
                  your midwife, outlining your preferences for pain management,
                  labor positions, and other aspects of the birthing process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="after-pregnancy-tips">
          <h1 className="after-preg-title">After Pregnancy</h1>

          <div className="after-pregn-tipsss">
            <div className="box-1">
              <div className="first-after-tip">
                <h3>1-Postpartum Care</h3>
                <p>
                  Schedule postpartum check-ups with your midwife to monitor
                  your recovery and ensure the well-being of both you and your
                  baby.
                </p>
              </div>
              <div className="second-after-tip">
                <h3>2-Breastfeeding Support</h3>
                <p>
                  Seek guidance and support from your midwife to establish
                  successful breastfeeding. Attend breastfeeding classes if
                  available.
                </p>
              </div>
            </div>

            <div className="box-2">
              <div className="third-after-tip">
                <h3>3-Emotional Support</h3>
                <p>
                  Recognize and address any postpartum mood disorders or
                  emotional challenges. Communicate with your midwife or
                  healthcare provider if you experience symptoms of postpartum
                  depression or anxiety.
                </p>
              </div>
              <div className="fourth-after-tip">
                <h3>4-Physical Recovery</h3>
                <p>
                  Take care of your body by getting plenty of rest, practicing
                  gentle exercises as advised, and maintaining a nutritious
                  diet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactus-section" id="contact">
        <h1 className="pregn-tips">CONTACT US</h1>

        <Contact />
      </section>
    </>
  );
}
