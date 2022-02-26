import { createContext, useEffect, useState } from "react";
import MainData from "../data/Data.json";
import CurrentData from "../data/CurrentData.json";

export const DataContext = createContext();

const ContextProvider = (props) => {
  const [buttonType, setButtonType] = useState(1);
  const [data, setData] = useState([]);
  const [commentData, setCommentData] = useState();
  const [isFalse, setIsFalse] = useState();

  const setButtonTypeFunc = (data) => {
    setButtonType(data);
  };

  const setSelectedIdFunc = (id) => {
    const newData = data.find((item) => item.id === id);
    setCommentData(newData);
    setIsFalse(true);
  };

  useEffect(() => {
    setData(buttonType === 1 ? MainData : CurrentData);
  }, [buttonType]);

  useEffect(() => {
    setCommentData(data[0]);
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        data,
        commentData,
        buttonType,
        isFalse,
        setIsFalse,
        setButtonTypeFunc,
        setSelectedIdFunc,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
