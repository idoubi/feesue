import React from "react";
import { Component } from "react";

import { Comment, Avatar } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import { Octokit } from "@octokit/rest";
import ReactMarkdown from "react-markdown";
import moment from "moment";
moment.locale("zh-cn");

export default class CommentComponent extends Component {
  state = {
    issues: [],
    page: 1,
    hasMore: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchIssues();
  }

  fetchIssues() {
    const octokit = new Octokit({
      auth: this.props.token
    });

    octokit.issues
      .listForRepo({
        owner: this.props.owner,
        repo: this.props.repo,
        page: this.state.page,
        per_page: this.props.per_page,
        labels: this.props.labels,
        state: this.props.state,
        sort: this.props.sort
      })
      .then(res => {
        if (res.status == 200) {
          let curIssues = this.state.issues;
          let hasMore = false;
          if (res.data.length > 0) {
            hasMore = true;
          }
          curIssues.push(...res.data);
          this.setState({
            issues: curIssues,
            hasMore: hasMore
          });
        }
      });
  }

  render() {
    const { theme_color } = this.props;
    const comments = [];
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
    const newIssueUrl =
      "https://github.com/" +
      this.props.owner +
      "/" +
      this.props.repo +
      "/issues/new";

    this.state.issues.map((v, k) => {
      comments.push(
        <Comment
          key={k}
          actions={[
            <a href={v.html_url} target="_blank">
              <MessageOutlined /> {v.comments}{" "}
              <span className="reply">回复</span>
            </a>
          ]}
          author={
            <div>
              <a href={v.user.html_url} target="_blank" style={fontColor}>
                @{v.user.login}
              </a>
              <span>{moment(v.updated_at, "YYYYMMDD").fromNow()} 更新</span>
            </div>
          }
          avatar={<Avatar src={v.user.avatar_url} alt="" />}
          content={
            <div className="markdown-body">
              <h3>{v.title}</h3>
              <p>{<ReactMarkdown source={v.body} />}</p>
            </div>
          }
        />
      );
    });
    return (
      <div className="comments">
        <div className="toolbar">
          <span className="total">
            <a
              href="https://github.com/idoubi/feesue"
              target="_blank"
              style={borderColor}
            >
              Feesue
            </a>
            0.1.0
          </span>
          <a
            href={newIssueUrl}
            target="_blank"
            className="publish"
            style={fontColor}
          >
            发表评论 >>
          </a>
        </div>
        {comments}
        <div className="more">
          {this.state.hasMore && (
            <span
              className="more"
              onClick={this.fetchIssues.bind(this, this.state.page++)}
              style={backColor}
            >
              显示更多
            </span>
          )}
          {!this.state.hasMore && <span className="nomore">没有更多了~</span>}
        </div>
      </div>
    );
  }
}
