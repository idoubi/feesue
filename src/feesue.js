import React from "react";
import { Component } from "react";

import HeaderComponent from "./components/header";
import CommentComponent from "./components/comment";

import "./style/index.less";

import "github-markdown-css/github-markdown.css";

export default class FeesueComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="feesue-container">
        {this.props.product && <HeaderComponent {...this.props} />}
        <CommentComponent {...this.props} />
      </div>
    );
  }
}
