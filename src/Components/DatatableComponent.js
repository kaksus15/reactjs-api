import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";

const columns = [
  {
    dataField: "id",
    text: "ID",
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "name",
    text: "Nama",
  },
  {
    dataField: "alamat",
    text: "Alamat",
  },
  {
    dataField: "nohp",
    text: "No. HP/Phone",
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="dark" className="mr-2">
            Detail
          </Button>
          <Button color="dark" className="mr-2">
            Edit
          </Button>
          <Button color="dark" className="mr-2">
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
      <BootstrapTable keyField="id" data={props.users} columns={columns} />
    </Container>
  );
};

export default DatatableComponent;
