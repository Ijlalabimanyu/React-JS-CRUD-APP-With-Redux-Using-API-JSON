import React from "react";
import { Button } from "antd";
import { LeftCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const BackComponent = () => {
  return (
    <div className="mb-2 container mx-auto">
      <Link to="/">
        <Button
          type="primary"
          icon={<LeftCircleFilled />}
          className="absolute inset-y-24 right-22 inline-flex justify-center border border-transparent shadow-sm text-sm font-bold rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Menu
        </Button>
      </Link>
    </div>
  );
};

export default BackComponent;
