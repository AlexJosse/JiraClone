import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../store/actions";
import List from "./List";
import Board from "./Board";

const Jira = (props) => {
  const [isEdit, setIdEdit] = useState(false);

  useEffect(() => {
    if (isEdit === false) {
      props.requestApiData();
      setIdEdit(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>List</h1>
      <List />
      <Board />
    </>
  );
};

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Jira);
