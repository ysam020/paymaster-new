import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/rating.scss";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Payroll from "./Payroll";
import HR from "./HR";
import Benefits from "./Benefits";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function RatingSection(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fluid className="rating-container">
      <h2>{props.data?.partners_heading}</h2>
      <Row gutter={0} className="rating-row-1">
        <Col xs={3}>
          <img src={props.data?.partners_icon_1} alt="" />
          <p>{props.data?.partners_text_1}</p>
        </Col>
        <Col xs={3}>
          <img src={props.data?.partners_icon_2} alt="" />
          <p>{props.data?.partners_text_2}</p>
        </Col>
        <Col xs={3}>
          <img src={props.data?.partners_icon_3} alt="" />
          <p>{props.data?.partners_text_3}</p>
        </Col>
        <Col xs={3}>
          <img src={props.data?.partners_icon_4} alt="" />
          <p>{props.data?.partners_text_4}</p>
        </Col>
      </Row>

      <a href="#!">See all ratings and reviews</a>

      <Row className="rating-row-2">
        <h1>{props.data?.products_heading}</h1>

        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="ffffff1a"
            centered
          >
            <Tab
              icon={<AttachMoneyIcon />}
              iconPosition="start"
              label={props.data?.product_1_name}
              sx={{
                margin: "0 20px",
                color: "white",
                fontSize: "20px",
                borderBottom:
                  value === 0 ? "2px solid white" : "2px solid #ffffff1a", // Active tab border
                "&.Mui-selected": {
                  borderBottom: "2px solid white", // Active tab border color
                },
              }}
            />
            <Tab
              icon={<AttachMoneyIcon />}
              iconPosition="start"
              label={props.data?.product_2_name}
              sx={{
                margin: "0 20px",
                color: "white",
                fontSize: "20px",
                borderBottom:
                  value === 1 ? "2px solid white" : "2px solid #ffffff1a", // Active tab border
                "&.Mui-selected": {
                  borderBottom: "2px solid white", // Active tab border color
                },
              }}
            />
            <Tab
              icon={<AttachMoneyIcon />}
              iconPosition="start"
              label={props.data?.product_3_name}
              sx={{
                margin: "0 20px",
                color: "white",
                fontSize: "20px",
                borderBottom:
                  value === 2 ? "2px solid white" : "2px solid #ffffff1a", // Active tab border
                "&.Mui-selected": {
                  borderBottom: "2px solid white", // Active tab border color
                },
              }}
            />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Payroll data={props.data} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <HR data={props.data} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Benefits data={props.data} />
          </CustomTabPanel>
        </Box>
      </Row>
    </Container>
  );
}

export default RatingSection;
