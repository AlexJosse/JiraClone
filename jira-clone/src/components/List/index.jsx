import React from "react";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Styles from "./style";
import Table from "./Table";

const List = (props) => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props);
    setData(props);
  }, [props]);

  const columns = React.useMemo(
    () => [
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
    ],
    []
  );

  console.log("data", data);
  if (data === undefined) return <h1>Loading ...</h1>
  return (
    <>
      <div>
        {data !== undefined && (
          <Styles>
            <Table columns={columns} data={data} />
          </Styles>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps)(List);

// eslint-disable-next-line no-lone-blocks
{
  /**
    <button onClick={() => dispatch({ 
      type: 'UPDATE_DATA_UP_PROGRESS',
      payload: 3,
    })}>------</button> */
}
