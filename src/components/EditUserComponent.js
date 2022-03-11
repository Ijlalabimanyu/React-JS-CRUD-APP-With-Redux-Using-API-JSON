import React from "react";
import { connect, useDispatch } from "react-redux";
import { putUserEdit } from "../actions/userAction";
import { CheckCircleFilled } from "@ant-design/icons";
import { Form, Input, InputNumber, Button, notification } from "antd";

const EditUserComponent = (props) => {
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const dispatch = useDispatch();

  const onFinish = (values) => {
    notification.open({
      message: "Berhasil Mengubah Data",
      description:
        "Data mahasiswa telah diubah, silahkan untuk memeriksa kembali data Anda.",
      icon: <CheckCircleFilled style={{ color: "#22c55e" }} />,
    });
    console.log(values);
    dispatch(putUserEdit(values, props.getUserDetail.id));
  };

  const [form] = Form.useForm();

  const onFill = () => {
    form.setFieldsValue({
      nama: props.getUserDetail.nama,
      nim: props.getUserDetail.nim,
      jurusan: props.getUserDetail.jurusan,
      email: props.getUserDetail.email,
      telepon: props.getUserDetail.telepon,
    });
  };

  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Informasi Data Diri Mahasiswa
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Diharapkan untuk mengisi dengan teliti dan benar.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <Form
              form={form}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      label="Nama"
                      name={["nama"]}
                    >
                      <Input
                        disabled
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      label="NIM"
                      name={["nim"]}
                    >
                      <InputNumber
                        disabled
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      label="Jurusan"
                      name={["jurusan"]}
                    >
                      <Input
                        disabled
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </div>

                  <div className="col-span-4 sm:col-span-4">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      name={["email"]}
                      label="Email"
                      rules={[
                        {
                          type: "email",
                          required: true,
                        },
                      ]}
                    >
                      <Input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        style={{
                          width: "100%",
                        }}
                        placeholder="Example@gmail.com"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      name={["telepon"]}
                      label="Nomor Telepon"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        style={{
                          width: "100%",
                        }}
                        placeholder="81267384951"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Button type="link" htmlType="button" onClick={onFill}>
                    Auto
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="inline-flex justify-center border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

export default connect(mapStateToProps, null)(EditUserComponent);
