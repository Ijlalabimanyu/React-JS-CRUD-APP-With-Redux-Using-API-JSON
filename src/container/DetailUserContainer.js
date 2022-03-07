import React, { useEffect } from "react";
import DetailUserComponent from "../components/DetailUserComponent";
import { connect } from "react-redux";
import BackComponent from "../components/BackComponent";
import { getUserDetail } from "../actions/userAction";
import { useParams } from "react-router-dom";

const mapStateToProps = ({ users: { userDetail } }) => ({
  userDetail,
});

const DetailUserContainer = ({ getUserDetail }) => {
  let { id } = useParams();

  useEffect(() => {
    getUserDetail(id);
  }, [getUserDetail, id]);

  return (
    <div>
      <BackComponent />
      <h1 className="text-4xl text-center font-bold">Detail User Mahasiswa</h1>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <DetailUserComponent />
    </div>
  );
};

export default connect(mapStateToProps, { getUserDetail })(DetailUserContainer);
