import React from "react";
import { Link } from "react-router-dom";

const CampaignContent = (props) => {
  return (
    <Link to={"/campaign" + props.link}>
      <div
        className="mr-12 rounded-md shadow-lg p-8  cursor-pointer"
        style={{ width: "300px", height: "400px" }}
      >
        <div>
          <img
            className="rounded-lg mb-3"
            src={props.item.image}
            style={{ height: "200px", width: "100%" }}
          />
        </div>
        <div className="text-lg font-bold">{props.item.name}</div>
        <div className="flex flex-row items-center">
          <div className="text-base mr-3">Status:</div>
          <div
            className="text-base pl-4 pr-4 pt-1 pb-1 rounded-md"
            style={{
              backgroundColor:
                props.item.status == "Live" ? "#baffbe" : "#e3e3e3",
            }}
          >
            {props.item.status}
          </div>
        </div>
        <div>Responses: {props.item.responses}</div>
        <div>Time left: {props.item.timeleft}</div>
      </div>
    </Link>
  );
};

export default CampaignContent;
