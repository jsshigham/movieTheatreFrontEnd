import React from "react";

const Select = ({ req, setChange, arrayMap, isShowTime, currentValue = undefined }) => {
  let isRequired = false;
  if (req) {
    isRequired = true;
  }

  if (!isShowTime) {
    return (
      <select
        required={isRequired}
        className=" w-full text-black rounded"
        onChange={(e) => setChange(e.target.value)}
        value={currentValue}
      >
        {arrayMap.map((element) => {
          return <option value={element}>{element}</option>;
        })}
      </select>
    );
  } else {
    return(
        <select
            required={isRequired}
            className=" w-full text-black rounded"
            onChange={(e) => setChange(e.target.value)}
            value={currentValue}
          >
            {arrayMap.map((showTime) => {
              {/* if (
                showTime === showTime2 ||
                showTime === showTime3 ||
                showTime === showTime4 ||
                showTime === showTime5 ||
                showTime === showTime6
              ) {
                return;
              } */}

              return <option key={showTime} value={showTime}>{showTime}</option>;
            })}
          </select>
    )
  }
};

export default Select;
