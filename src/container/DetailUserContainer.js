import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BackComponent from '../components/BackComponent';
import { getUserDetail } from '../actions/userAction';
import { useParams } from 'react-router-dom';

const DetailUserContainer = ({ userDetail, getUserDetail, history, match }) => {
  let { id } = useParams();

  useEffect(() => {
    getUserDetail(id);
  }, [getUserDetail, id]);

  return (
    <div>
      <BackComponent />
      <h1 className="text-4xl text-center font-bold">Detail Data Mahasiswa</h1>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <pre>{JSON.stringify(userDetail)}</pre>

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
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">NIM</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Jurusan</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Telepon</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users: { userDetail } }) => ({
  userDetail,
});

export default connect(mapStateToProps, { getUserDetail })(DetailUserContainer);

// export default class DetailUserContainer extends Component {
//   render() {
//     console.log(this.props);
//     console.log(
//       '🚀 ~ file: DetailUserContainer.js ~ line 6 ~ DetailUserContainer ~ render ~ console.log(this.props);',
//       this.props
//     );

//     return (
//       <div>
//         <BackComponent />
//         <h1 className="text-4xl text-center font-bold">
//           Detail Data Mahasiswa
//         </h1>

//         <div className="hidden sm:block" aria-hidden="true">
//           <div className="py-5">
//             <div className="border-t border-gray-200" />
//           </div>
//         </div>

//         <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//           <div className="px-4 py-5 sm:px-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">
//               Informasi Mahasiswa
//             </h3>
//             <p className="mt-1 max-w-2xl text-sm text-gray-500">
//               Harap di cek kembali dengan seksama dan benar.
//             </p>
//           </div>
//           <div className="border-t border-gray-200">
//             <dl>
//               <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">Nama</dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
//               </div>
//               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">NIM</dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
//               </div>
//               <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">Jurusan</dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
//               </div>
//               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">Email</dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
//               </div>
//               <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">Telepon</dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
//               </div>
//             </dl>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
