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

  console.log("props->", props);
  const columns = [
      {
        Header: "Name",
        columns: [
          {
            Header: "Name",
            accessor: "id",
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

  const updateTask = (el) => {
    if (el.progress === "not_started") {
      dispatch({
        type: "UPDATE_DATA_UP_PROGRESS",
        payload: el.id,
      });
    } else if (el.progress === "done") {
    } else {
    }
    const tempSelectedList = [...props.data];
    setData(tempSelectedList);
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
