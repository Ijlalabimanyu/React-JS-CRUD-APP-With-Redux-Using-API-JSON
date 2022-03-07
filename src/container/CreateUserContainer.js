import React from "react";
import BackComponent from "../components/BackComponent";
import CreateUserComponent from "../components/CreateUserComponent";
import { connect } from "react-redux";

const CreateUserContainer = () => {

  return (
    <div>
      <BackComponent />
      <h1 className="text-4xl text-center font-bold">Tambah User Mahasiswa</h1>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <CreateUserComponent />
    </div>
  );
};

export default connect()(CreateUserContainer);
