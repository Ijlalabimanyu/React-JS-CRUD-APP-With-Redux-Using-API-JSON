import React from "react";
import { Table, Button, Space, Result, Spin, Modal } from "antd";
import {
  InfoCircleFilled,
  DeleteFilled,
  EditFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser} from "../actions/userAction";

const handleClick = (dispatch, id) => {
  confirm({
    title: "Anda yakin ingin menghapus data ?",
    icon: <QuestionCircleFilled style={{ color: "#ef4444" }} />,
    content: "Data yang telah dihapus akan hilang.",
    async onOk() {
      try {
        return await new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          console.log("OK");
          dispatch(deleteUser(id));
        });
      } catch {
        return console.log("Oops errors!");
      }
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

const { confirm } = Modal;

const TableComponent = (props) => {

  const columns = [
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
      width: "20%",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
      width: "10%",
    },
    {
      title: "Action",
      key: "action",
      width: "10%",
      render: (text, record) => (
        <Space>
          <Link to={"detail/" + record.id}>
            <Button
              type="primary"
              icon={<InfoCircleFilled />}
              className="inline-flex justify-center border border-transparent shadow-sm text-sm font-semibold rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Detail
            </Button>
          </Link>

          <Link to={"edit/" + record.id}>
            <Button
              type="primary"
              icon={<EditFilled />}
              className="inline-flex justify-center border border-transparent shadow-sm text-sm font-semibold rounded-md bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Edit
            </Button>
          </Link>

          <Button
            type="danger"
            icon={<DeleteFilled />}
            onClick={() => handleClick(props.dispatch, record.id)}
            className="inline-flex justify-center border border-transparent shadow-sm text-sm font-semibold rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold">Tabel Data Mahasiswa</h1>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <Link to="/create">
        <Button
          type="primary"
          icon={<PlusCircleFilled />}
          className="inline-flex justify-center absolute inset-y-24 right-22 border border-transparent shadow-sm text-sm font-bold rounded-md bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
        >
          Add
        </Button>
      </Link>
      {props.getUsersList ? (
        <Table columns={columns} dataSource={props.getUsersList} />
      ) : (
        <div>
          {props.errorUsersList ? (
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
            >
              {props.errorUsersList}
            </Result>
          ) : (
            <>
              <div className="flex justify-center">
                <div>
                  <Spin tip="Loading..." size="large" />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
    deleteUser: state.users.deleteUser,
  };
};

export default connect(mapStateToProps, null)(TableComponent);
