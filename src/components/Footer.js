import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";

function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col xs={3}>
          <h3>Getting started</h3>
          <a href="#!">Get one month free</a>
          <a href="#!">Switching providers</a>
          <a href="#!">Pricing starts at $46 per month</a>

          <h3>Solutions</h3>
          <a href="#!">By industry</a>
          <a href="#!">For new businesses</a>
          <a href="#!">For small businesses</a>
          <a href="#!">For medium sized businesses</a>
          <a href="#!">W-2 workers</a>
          <a href="#!">Contractors</a>
          <a href="#!">Remote teams</a>
        </Col>
        <Col xs={3}>
          <h3>Products</h3>
          <a href="#!">Payroll</a>
          <a href="#!">HR</a>
          <a href="#!">Benefits</a>
          <h3>Features</h3>
          <a href="#!">Direct deposit payroll Hiring and onboarding</a>
          <a href="#!">PTO management</a>
          <a href="#!">Health insurance</a>
          <a href="#!">Workers’ comp</a>
          <a href="#!">401(k) retirement</a>
          <a href="#!">Employee self-service</a>
          <a href="#!">Custom reporting</a>
          <a href="#!">Org charts</a>
          <a href="#!">Integrations</a>
          <a href="#!">Explore all features</a>
        </Col>
        <Col xs={3}>
          <h3>Why Paymaster</h3>
          <a href="#!">Ratings and reviews</a>
          <a href="#!">Compare providers</a>
          <h3>Resources</h3>
          <a href="#!">Payroll 101</a>
          <a href="#!">HR basics</a>
          <a href="#!">Benefits guide</a>
          <a href="#!">Payroll Calculators</a>
          <a href="#!">State compliance guides</a>
          <h3>Accountants</h3>
          <a href="#!">Become a Partner</a>
          <a href="#!">The Ledger: Accounting Resources</a>
        </Col>
        <Col xs={3}>
          <h3>About us</h3>
          <a href="#!">In the news</a>
          <a href="#!">About us</a>
          <a href="#!">Careers</a>
          <h3>Support</h3>
          <a href="#!">Help Center</a>
          <a href="#!">Contact us</a>
        </Col>
      </Row>
      <Row className="footer-row-2">
        <img src={require("../assets/images/logo.png")} alt="logo" />
        Serving Clients for Over 30 Years
        <br />
        <div>
          <IconButton>
            <FacebookIcon sx={{ color: "#!fff", fontSize: "32px" }} />
          </IconButton>
          <IconButton>
            <YouTubeIcon sx={{ color: "#!fff", fontSize: "32px" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon sx={{ color: "#!fff", fontSize: "32px" }} />
          </IconButton>
          <IconButton>
            <XIcon sx={{ color: "#!fff", fontSize: "32px" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "#!fff", fontSize: "32px" }} />
          </IconButton>
        </div>
        <br />
        Insurance offered through Paymaster Management Solutions
        <br />
        <br />
        <div className="footer-links">
          <a href="#!"> Terms and Conditions</a>&nbsp; |&nbsp;
          <a href="#!"> Privacy</a> &nbsp;|&nbsp;<a href="#!">Cookie Policy</a>
          &nbsp; |&nbsp;
          <a href="#!"> Sitemap</a>
        </div>
        <br />
        <br />
        ©2024 Paymaster, Inc.
      </Row>
    </Container>
  );
}

export default Footer;
