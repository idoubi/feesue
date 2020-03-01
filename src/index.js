import React from "react";
import ReactDOM from "react-dom";

import FeesueComponent from "./feesue";

export default class Feesue {
  opts = {
    owner: "",
    repo: "",
    token: "",
    theme_color: "",
    per_page: 0,
    direction: "",
    sort: "",
    state: "",
    labels: [],
    product: null
  };

  constructor(opts) {
    this.opts.owner = opts.owner;
    this.opts.repo = opts.repo;
    this.opts.token = opts.token;
    this.opts.theme_color = opts.theme_color || "#08a5e0";
    this.opts.per_page = opts.per_page || 20;
    this.opts.direction = opts.direction || "asc";
    this.opts.sort = opts.sort || "updated_at";
    this.opts.state = opts.state || "all";
    this.opts.labels = opts.labels || [];
    this.opts.product = opts.product || null;
    if (this.opts.product) {
      this.opts.product.home_title = opts.product.home_title || "项目主页";
      this.opts.product.github_title = opts.product.github_title || "GITHUB";
    }
  }

  render(container, callback) {
    let ele = document.getElementById(container);
    ReactDOM.render(<FeesueComponent {...this.opts} />, ele);
  }
}
