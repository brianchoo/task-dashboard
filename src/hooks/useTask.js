import { useState } from "react";

export const useTask = () => {
  const [task, setTask] = useState(null);

  return { task };
};
