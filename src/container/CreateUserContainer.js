import React from "react";
import BackComponent from "../components/BackComponent";
import { Form, Input, InputNumber, Button } from "antd";

const CreateUserContainer = () => {
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

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <BackComponent />
      <h1 className="text-4xl text-center font-bold">Tambah Data Mahasiswa</h1>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

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
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      name={["user", "nama"]}
                      label="Nama"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        style={{
                          width: "100%",
                        }}
                        placeholder="John Doe"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      name={["user", "nim"]}
                      label="NIM"
                      rules={[
                        {
                          required: true,
                          type: "number",
                          min: 0,
                          max: 99,
                        },
                      ]}
                    >
                      <InputNumber
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        style={{
                          width: "100%",
                        }}
                        placeholder="2301956600"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      name={["user", "jurusan"]}
                      label="Jurusan"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        style={{
                          width: "100%",
                        }}
                        placeholder="Informatics"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-span-4 sm:col-span-4">
                    <Form.Item
                      className="block text-sm font-medium text-gray-700"
                      name={["user", "email"]}
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
                      name={["user", "telepon"]}
                      label="Nomor Telepon"
                      rules={[
                        {
                          required: true,
                          type: "number",
                          min: 0,
                          max: 99,
                        },
                      ]}
                    >
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          +62
                        </span>
                        <InputNumber
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          style={{
                            width: "100%",
                          }}
                          placeholder="81267384951"
                        />
                      </div>
                    </Form.Item>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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

export default CreateUserContainer;