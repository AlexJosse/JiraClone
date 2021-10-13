import React from "react";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Styles from "./style";
import Table from "./Table";

const List = (props) => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setData(props);
  }, [props]);

  const columns = [
      {
        Header: "Name",
        columns: [
          {
            Header: "Name",
            accessor: "userId",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Description",
            accessor: "title",
          },
          {
            Header: "Progress",
            accessor: "progress",
          },
        ],
      },
    ];

  const updateTask = (el, id) => {
    if (el.progress === "not_started") {
      dispatch({
        type: "UPDATE_DATA_UP_PROGRESS",
        payload: id,
      });
    } else if (el.progress === "done") {
      dispatch({
        type: "UPDATE_DATA_NOT_STARTED",
        payload: id,
      });
    } else {
      dispatch({
        type: "UPDATE_DATA_UP_DONE",
        payload: id,
      });
    }
    const tempData = [...props.data];
    setData(tempData);
  };

  if (data === undefined) return <h1>Loading ...</h1>;
  return (
    <>
      <div>
        {data !== undefined && (
          <Styles>
            <Table myClick={updateTask} props={props} columns={columns} data={data} />
          </Styles>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps)(List);
