import React from "react";
import { connect } from "react-redux";
import { Result, Spin } from "antd";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <div>
      {props.getUserDetail ? (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Informasi Mahasiswa
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Harap di cek kembali dengan seksama dan benar.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Nama</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.getUserDetail.nama}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">NIM</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.getUserDetail.nim}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Jurusan</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.getUserDetail.jurusan}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.getUserDetail.email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Telepon</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.getUserDetail.telepon}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div>
          {props.errorUserDetail ? (
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
            >
              {props.errorUserDetail}
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

export default connect(mapStateToProps, null)(DetailUserComponent);
