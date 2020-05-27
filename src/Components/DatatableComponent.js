import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col } from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";

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
          <Link to={"detail/" + row.id}>
            <Button color="primary" className="mr-2">
              Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="primary" className="mr-2">
              Edit
            </Button>
          </Link>
          <Link to={"delete/" + row.id}>
            <Button color="primary" className="mr-2">
              Delete
            </Button>
          </Link>
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
            <Row>
              <Col>
                <Link to={"/create"}>
                  <Button color="primary" className="mr-2">
                    Create
                  </Button>
                </Link>
              </Col>
              <Col>
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="Goleti ...." />
                </div>
              </Col>
            </Row>
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
