import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

// 定义上下文类型
interface CommonContextType {
  showLoadingModal: boolean;
  setShowLoadingModal: Dispatch<SetStateAction<boolean>>;
}
// 使用具有正确类型的默认值创建上下文
const CommonContext = createContext<CommonContextType>({
  showLoadingModal: false, // 默认的 showLoadingModal 状态
  setShowLoadingModal: () => {}, // 空函数作为初始的 setter，注意这里不执行任何操作
});

export const CommonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  return (
    <CommonContext.Provider
      value={{
        showLoadingModal,
        setShowLoadingModal,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export const useCommonContext = () => useContext(CommonContext);