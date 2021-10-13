import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PaginationList from "react-pagination-list";

import Styles from "./style";
const Board = (props) => {
  const [notStart, setNotStarted] = useState();
  const [inProgress, setInProgress] = useState();
  const [done, setDone] = useState();

  useEffect(() => {
    if (props.data.length) {
      setNotStarted(props.data.filter((el) => el.progress === "not_started"));
      setInProgress(props.data.filter((el) => el.progress === "progress"));
      setDone(props.data.filter((el) => el.progress === "done"));
    }
  }, [props]);

  return (
    <Styles>
      <div className="row">
        <div className="column">
          <h2>TO DO</h2>
          <PaginationList
            data={notStart}
            pageSize={2}
            renderItem={(item, key) => (
              <p key={key}>
                {item.userId} {item.title}
              </p>
            )}
          />
        </div>
        <div className="column">
          <h2>IN PROGRESS</h2>
          <PaginationList
            data={inProgress}
            pageSize={2}
            renderItem={(item, key) => (
              <p key={key}>
                {item.userId} {item.title}
              </p>
            )}
          />
        </div>
        <div className="column">
          <h2>DONE</h2>
          <PaginationList
            data={done}
            pageSize={2}
            renderItem={(item, key) => (
              <p key={key}>
                {item.userId} {item.title}
              </p>
            )}
          />
        </div>
      </div>
    </Styles>
  );
};

const mapStateToProps = (state) => ({ data: state.data });
export default connect(mapStateToProps)(Board);
