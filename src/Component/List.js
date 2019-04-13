import React from 'react';
import Style from "../Styles/App.module.css";

const Header = (props) => {
    return (
        <div className={Style.list}>
            <div className={Style.list_head}>
                <span >{props.index}</span>
                <a href={props.data.url}>
                    <div className={Style.upvote} title="upvote"></div>{props.data.title}
                    <span className={Style.list_url}> ({props.data.url})</span>
                </a>
            </div>
            <div className={Style.list_detail}>
                &nbsp;&nbsp;&nbsp;{props.data.score} points by {props.data.by}
            </div>
            <div className={Style.line}>
                <hr />
            </div>
        </div>

    );
};

export default Header;

// {
//     "by" : "dhouston",
//     "descendants" : 71,
//     "id" : 8863,
//     "kids" : [ 9224, 8917, 8952, 8884, 8887, 8869, 8958, 8940, 8908, 9005, 8873, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876 ],
//     "score" : 104,
//     "time" : 1175714200,
//     "title" : "My YC app: Dropbox - Throw away your USB drive",
//     "type" : "story",
//     "url" : "http://www.getdropbox.com/u/2/screencast.html"
//   }