import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DealFlow = () => {
  const [hoverItem, setHoverItem] = useState(0);
  // const [anime, setAnime] = useState(false);
  const [prevHoverItem, setPrevHoverItem] = useState(0);
  const [firsth0verDone, setFirsth0verDone] = useState(false);

  const [step, setStep] = useState([
    {
      id: 0,
      title: "Sourcing deals",
      text: `We receive over 1000 applications per month with the help of our partners <span>Unicorn.Events</span> and
    <span> Startup.Network</span>.`,
    },
    {
      id: 1,
      title: "Evaluation and looking for lead",
      text: `At this step we screen deals more precisely and with the help of <span>VC.House</span> look for the lead investors to back up the deal.`,
    },
    {
      id: 2,
      title: "Investing with the club",
      text: `We select the best and organize online meeting with founders and club memebers to decide on investing.`,
    },
  ]);
  const [currentStep, setCurrentStep] = useState(step[0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const idTrigger = (trigger, start, end, setItem, color) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start,
          end: () => end,
          toggleActions: "restart none restart none",
          //markers: { startColor: color, endColor: color },
        },
      });
      tl.to(trigger, {
        onStart: () => {
          setHoverItem(setItem);
        },
      });
    };

    ScrollTrigger.matchMedia({
      // desktop
      "(min-height: 1005px)": function () {
        idTrigger("#sa", "top 35%", "+=110px", 0, "red");
        idTrigger("#psd", "top 35%", "+=200px", 1, "blue");
        idTrigger("#ids", "top 35%", "+=110px", 2, "black");
      },
      // mobile
      "(min-height: 805px) and (max-height: 1004px)": function () {
        idTrigger("#sa", "top 45%", "+=130px", 0, "red");
        idTrigger("#psd", "top 45%", "+=140px", 1, "blue");
        idTrigger("#ids_mob", "top 45%", "+=110px", 2, "black");
      },
      "(min-height: 705px)  and (max-height: 804px)": function () {
        idTrigger("#sa", "top 45%", "+=160px", 0, "red");
        idTrigger("#psd", "top 45%", "+=160px", 1, "blue");
        idTrigger("#ids_mob", "top 45%", "+=110px", 2, "black");
      },
      "(max-height: 704px)": function () {
        idTrigger("#sa", "top 45%", "+=170px", 0, "red");
        idTrigger("#psd_mob", "top 45%", "+=150px", 1, "blue");
        idTrigger("#ids_mob", "top 45%", "+=110px", 2, "black");
      },
    });
  }, []);

  // const callback = () => {
  //   const hoverBG = document.querySelector(".dealFlow__left__item__hover");
  //   if (firsth0verDone) {
  //     hoverBG.classList.remove(`dealFlow__left__item__hover_${prevHoverItem}`);
  //   }
  //   console.log("000  -" + hoverItem);

  //   hoverBG.classList.add(`dealFlow__left__item__hover_${hoverItem}`);
  //   setPrevHoverItem(hoverItem);
  //   setCurrentStep(step[hoverItem]);

  //   setFirsth0verDone(true);
  // };

  // const callback2 = () => {
  //   const hoverBG = document.querySelector(".dealFlow__left__item__hover");
  //   if (firsth0verDone) {
  //     hoverBG.classList.remove(`dealFlow__left__item__hover_${prevHoverItem}`);
  //   }
  //   console.log("111  -" + hoverItem);

  //   hoverBG.classList.add(`dealFlow__left__item__hover_${hoverItem}`);
  //   setPrevHoverItem(hoverItem);
  //   setCurrentStep(step[hoverItem]);

  //   setFirsth0verDone(true);
  // };

  useEffect(() => {
    const hoverBG = document.querySelector(".dealFlow__left__item__hover");
    if (firsth0verDone) {
      hoverBG.classList.remove(`dealFlow__left__item__hover_${prevHoverItem}`);
    }

    hoverBG.classList.add(`dealFlow__left__item__hover_${hoverItem}`);
    setCurrentStep(step[hoverItem]);
    setPrevHoverItem(hoverItem);
    setFirsth0verDone(true);
    // setAnime(false);
  }, [hoverItem]);

  return (
    <div className="section grey__section secDealFlow ">
      <div className="sectionWrap sectionWrap_noFlex">
        <div className="section__title__regText" id="sa">
          Our dealflow process
        </div>
        <div className="section__title__date section__title__date_low">every month</div>

        <div className="dealFlow">
          <div className="dealFlow__left">
            <div
              className="dealFlow__left__item"
              onMouseEnter={() => {
                // setHoverItem(0);
                // setAnime(true);
              }}
            >
              <div className="dealFlow__left__count" id="psd">
                1,500
              </div>
              <div className="dealFlow__left__descr">startup applications</div>
              <div id="ids_mob"></div>
              <div id="psd_mob"></div>
            </div>

            <div
              className="dealFlow__left__item"
              onMouseEnter={() => {
                // setHoverItem(1);
                // setAnime(true);
              }}
            >
              <div className="dealFlow__left__count">200</div>
              <div className="dealFlow__left__descr">pre-selected deals</div>
              <div id="ids"></div>
            </div>

            <div
              className="dealFlow__left__item"
              onMouseEnter={() => {
                // setHoverItem(2);
                // setAnime(true);
              }}
            >
              <div className="dealFlow__left__count">3-4</div>
              <div className="dealFlow__left__descr">invested deals</div>
            </div>

            <div className="dealFlow__left__item__hover"></div>
          </div>
          <div className="dealFlow__right">
            <>
              {/* <CSSTransition in={anime} classNames="dealFlowWhite" timeout={400}> */}
              <div className="dealFlow__right__count"> Step {currentStep.id + 1} </div>
              {/* </CSSTransition> */}
              {/* <CSSTransition in={anime} classNames="dealFlowWhite" timeout={600}> */}
              <div className="dealFlow__right__title">{currentStep.title}</div>
              {/* </CSSTransition> */}
              {/* <CSSTransition in={anime} classNames="dealFlowWhite" timeout={600}> */}
              <div className="dealFlow__right__text" dangerouslySetInnerHTML={{ __html: currentStep.text }}></div>
              {/* </CSSTransition> */}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealFlow;
