import React from "react";
import { Component } from "react";

export default class HeaderComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    const { theme_color, product } = this.props;
    const fontColor = {
      color: theme_color
    };
    const backColor = {
      background: theme_color
    };
    const borderColor = {
      borderColor: theme_color,
      color: theme_color
    };
    return (
      <div class="header">
        <div className="logo">
          <a href="" className="logo">
            {product.logo && <img src={product.logo} alt="" />}
            <h1 style={fontColor}>{product.name}</h1>
          </a>
        </div>
        <h2 className="intro" style={fontColor}>
          {product.intro}
        </h2>
        <div className="act">
          <a
            href={product.home_url}
            target="_blank"
            className="home"
            style={backColor}
          >
            {product.home_title}
          </a>
          <a
            href={product.github_url}
            target="_blank"
            className="github"
            style={borderColor}
          >
            {product.github_title}
          </a>
        </div>
        <div className="tab">
          <span style={borderColor}>{product.comments_title}</span>
        </div>
      </div>
    );
  }
}
