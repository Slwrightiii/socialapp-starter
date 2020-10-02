import Axios from "axios";
// import React from "react";
import { useEffect, useState } from "react";
import DataService from "../../dataService";
import "./InfiniteScroll.css";

export default function InfiniteScroll(query, pageNumber) {
  useEffect(() => {
    Axios({
      method: "GET",
      url: "https://socialapp-api.herokuapp.com",
      params: {},
    }).then((response) => {
      response.data;
    });
  }, [query, pageNumber]);
  return null;
}

// https://youtu.be/NZKUirTtxcg    Infinite Scrolling With React - Tutorial by Web Dev Simplified
