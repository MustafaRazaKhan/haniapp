import React from "react";
import LeftBar from "../../Components/LeftBar";
import RightBar from "../../Components/RightBar";
import { useProduct } from "../../Context/Products";
import Heading from "../../Components/Heading";
import {  FaTrash } from "react-icons/fa";

const ProductsList = () => {
  const {state} = useProduct()
  return (
    <div className="flex w-full min-h-screen">
      <LeftBar />
      <RightBar>
        {state.isLoading ? <Loader /> : null}
        {/* <AddBtn icon={<FaPlus />} title="New Category" link="newcat" /> */}
        <div className="table-container overflow-x-scroll w-[100%] p-2">
          <Heading title="Category List" />
          <table className="w-full ">
            <thead className="">
              <tr className="border-b-[2px] border-black text-center">
                <th className="p-2">S.no</th>
                <th>Category Name</th>
                <th>Sub Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="border-b-[2px] border-black text-center">
              {state?.allProduct?.map((curEle, index) => {
                return (
                  <tr className="border-b-[2px] text-center" key={curEle._id}>
                    <td className="p-2">{index + 1}</td>
                    <td>{curEle?.category}</td>
                    <td>{curEle?.subCategory}</td>
                    <td className="border border-black">
                      <div className="flex justify-center">
                        <FaTrash className="text-red-600 font-bold" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </RightBar>
    </div>
  );
};

export default ProductsList;
