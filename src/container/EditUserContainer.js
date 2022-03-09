import React, { useEffect } from "react";
import BackComponent from "../components/BackComponent";
import EditUserComponent from "../components/EditUserComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/userAction";
import { useParams } from "react-router-dom";


const mapStateToProps = ({ users: { userDetail } }) => ({
  userDetail,
});

const EditUserContainer = ({ getUserDetail }) => {
  let { id } = useParams();

  useEffect(() => {
    getUserDetail(id);
  }, [getUserDetail, id]);

  return (
    <div>
      <BackComponent />
      <h1 className="text-4xl text-center font-bold">Edit Data Mahasiswa</h1>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <EditUserComponent />
    </div>
  );
};

export default connect(mapStateToProps, { getUserDetail })(EditUserContainer);
