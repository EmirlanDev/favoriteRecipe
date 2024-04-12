import React, { useEffect, useState } from "react";
import addImg from "../../assets/addImg.svg";
import del from "../../assets/delete.svg";
import axios from "axios";

export const Images = ({ setValues, values }) => {
  const [collection, setCollection] = useState([]);
  const [imgIdx, setImgIdx] = useState(0);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setCollection((prevImageUrls) => [...prevImageUrls, ...urls]);
    setImgIdx(imgIdx < 0 ? 0 : imgIdx);
  };

  const deleteImage = (idx) => {
    setCollection(collection.filter((el, ind) => ind !== idx));
    setImgIdx(imgIdx > 0 ? idx - 1 : idx);
  };

  useEffect(() => {
    setValues({ ...values, image: collection });
    setCollection(values.image);
  }, []);

  return (
    <div className="mt-[40px]">
      <div
        style={{
          display: collection.length > 0 ? "" : "none",
        }}
        className="relative"
      >
        <img
          className="w-[100%] h-[300px] rounded-lg"
          src={collection[imgIdx]}
          alt=""
        />
        <button
          onClick={() => deleteImage(imgIdx)}
          className="absolute bottom-3 left-3 text-white"
        >
          <img src={del} alt="" />
        </button>
      </div>
      <div className="flex gap-2 my-4">
        <label className="min-w-[140px] max-w-[140px] h-[120px] rounded-lg flex flex-col items-center bg-[#323232] justify-center">
          <img src={addImg} alt="" />
          <h5 className="text-[#fff]">добавить фото</h5>
          <input onChange={handleImageChange} className="hidden" type="file" />
        </label>
        <div
          id="images"
          className="flex gap-2 max-w-[75%] overflow-x-scroll pb-1"
        >
          {collection.map((img, idx) => (
            <div key={idx} className="relative">
              <img
                style={{
                  border: imgIdx === idx ? "5px solid #FF9A31" : "",
                }}
                onClick={() => setImgIdx(idx)}
                className="min-w-[140px] max-w-[140px] h-[120px] rounded-lg"
                key={idx}
                src={img}
                alt="hjk"
              />
              <h3
                style={{
                  display: imgIdx === idx ? "" : "none",
                }}
                className="absolute bottom-0 text-[#fff] bg-[#FF9A31] px-[10px] rounded-r-lg rounded-br-none rounded-bl-lg pb-[5px]"
              >
                cover
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
