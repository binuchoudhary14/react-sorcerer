import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

const Message = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default Message;
