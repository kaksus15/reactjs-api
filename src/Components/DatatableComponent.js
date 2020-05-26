import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "name",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "nohp",
    text: "No. HP/Phone",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="primary" className="mr-2">
            Detail
          </Button>
          <Button color="primary" className="mr-2">
            Edit
          </Button>
          <Button color="primary" className="mr-2">
            Delete
          </Button>
        </div>
      );
    },
  },
];

const DatatableComponent = (props) => {
  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={props.users}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <div className="float-right">
              <SearchBar {...props.searchProps} placeholder="Goleti ...." />
            </div>
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

export default DatatableComponent;
