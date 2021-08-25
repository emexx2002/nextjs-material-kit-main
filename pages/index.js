import React, { useState, useEffect, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLinksl from "components/Header/HeaderLinksl.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [repo, setRepos] = useState([]);
  const [messages, setMessages] = useState(" ")
  const [emessages, setEMessages] = useState(false)
  const [disabled, setDisabled] = useState("false")
  const empty = "";
  let btnRef = useRef();
  const pull = () => {

    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${link}`;

    if (link != "" && emessages == false) {
      setDisabled("true")
      setLoading(true);
      setMessages("Generatin Your Link...")
      setEMessages(false)
      fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
          setLoading(false);
          setRepos(repos.result);
          setMessages(" ")
          setEMessages(false)
          console.log(repo);
          setDisabled("false");
        });
    } else if (link != "" && emessages == true) {
      setEMessages(false)
    }
    else {
      setMessages("input a link")
      setEMessages(true)
    }




  }


  return (
    <div>
      <Header
        rightLinks={<HeaderLinksl />}
        leftLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/illustration-working2.png">
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={5}>
              <div className={classes.brand}>
                <h1 className={classes.title} style={{ color: "#3b3a39", marginTop: "45px", fontSize: "9vh" }}>More than just shorter links</h1>
                <h3 className={classes.subtitle} style={{ color: "#969693", fontWeight: "400" }}>
                  Build your brand's recognitionand and get detailed insights on how your links are performing.
                </h3>
                <Button color="info" size="lg" style={{ textDecoration: "capitalize !important", fontWeight: "bold", marginTop: "25px", fontSize: "18px" }} round>
                  Get Started
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main,)} >
        <div className={classNames(classes.mainRaised)} style={{
          marginLeft: "13%", marginRight: "13%", position: "absolute", width: "74%", padding: "40px",
          backgroundImage: "url('/img/bg-shorten-desktop.svg')", backgroundColor: "#4b2c61", marginTop: "15px"
        }}>
          <GridContainer style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <GridItem md={9} className={classes.textCenter}>
              <input type="links" onChange={(e) => setLink(e.target.value)} placeholder="shorten your link here..." style={{
                width: "95%", marginTop: "20px", border: "1px transparent solid ", borderRadius: "8px", outline: "none",
                height: "40px", padding: "20px",
              }} required ></input>
            </GridItem>
            <GridItem md={3} className={classes.textCenter}>
              <Button color="info" style={{ marginTop: "20px" }} disable={disabled} onClick={pull}> {loading == true ? "Generating..." : "Shorten It!"}</Button>
            </GridItem>
            {emessages == true ? <div className="error" color={"danger"} style={{ color: "red" }}>You must enter a link</div> : ""}
          </GridContainer>


        </div>
        <div className={classes.sections} style={{ position: "relative", paddingBottom: "90px" }} >

        </div>

        <div className={classes.sections} style={{ paddingTop: "200px", backgroundColor: "whitesmoke", paddingBottom: "60px" }} >
          <div className={classes.container} >
            <h3 className={classes.textCenter} onClick={() => { navigator.clipboard.writeText(repo.full_short_link) }}>{repo.full_short_link}</h3>
            <h2 className={classes.textCenter} style={{ fontWeight: "bold", color: "#3b3a39" }}  >Advanced statistics</h2>
            <h4 className={classes.textCenter} style={{ fontWeight: "400", color: "#969693", paddingLeft: "20px", paddingRight: "20px" }} >Track how your links are performing across the web with our advanced statistics dashboard</h4>
          </div>
          <div style={{ marginLeft: "13%", marginRight: "13%", paddingTop: "60px" }}>
            <GridContainer>
              <GridItem md={4} style={{ marginBottom: "48px" }}>
                <div className={classes.container} style={{
                  backgroundColor: "white", paddingTop: "60px", paddingBottom: "30px", position: "relative"

                }}>
                  <div style={{
                    height: "70px", width: "70px", borderRadius: "50%", backgroundColor: "#4b2c61",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "absolute",
                    top: "-40px"
                  }}>
                    <img src="/img/icon-brand-recognition.svg" />
                  </div>
                  <h4 style={{ fontWeight: "bold" }}>Brand recognition</h4>
                  <p> Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. </p>

                </div>


              </GridItem>


              <GridItem md={4} style={{ marginBottom: "48px" }}>
                <div className={classes.container} style={{
                  backgroundColor: "white", paddingTop: "60px", paddingBottom: "30px", position: "relative"

                }}>
                  <div style={{
                    height: "70px", width: "70px", borderRadius: "50%", backgroundColor: "#4b2c61",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "absolute",
                    top: "-40px"
                  }}>
                    <img src="/img/icon-detailed-records.svg" />
                  </div>
                  <h4 style={{ fontWeight: "bold" }}>Detailed Records</h4>
                  <p>  Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. </p>

                </div>

              </GridItem>

              <GridItem md={4} style={{ marginBottom: "48px" }}>
                <div className={classes.container} style={{
                  backgroundColor: "white", paddingTop: "60px", paddingBottom: "30px", position: "relative"

                }}>
                  <div style={{
                    height: "70px", width: "70px", borderRadius: "50%", backgroundColor: "#4b2c61",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "absolute",
                    top: "-40px"
                  }}>
                    <img src="/img/icon-fully-customizable.svg" />
                  </div>
                  <h4 style={{ fontWeight: "bold" }}>Fully Customizable</h4>
                  <p> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. </p>

                </div>

              </GridItem>
            </GridContainer>
          </div>
        </div>


      </div>
      <div className={classNames(classes.main,)} style={{
        backgroundImage: "url('/img/bg-boost-desktop.svg')", backgroundColor: "#4b2c61",
        height: '250px',
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        marginTop: "-16px"
      }} >
        <div className={classes.container} style={{
          background: "transparent",
          paddingTop: "4%",

        }}>
          <h2 className={classes.textCenter} style={{ fontWeight: "bold", color: "white" }}>Boost your links today</h2>
          <div style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: " center"
          }}>
            <Button color="info" style={{ textDecoration: "capitalize !important", fontWeight: "bold", alignSelf: "center" }} round>
              Get Started
            </Button>
          </div>

        </div>

      </div>

      <Footer />
    </div >
  );
}
