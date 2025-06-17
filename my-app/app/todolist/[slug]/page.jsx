"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function taskDetails() {
  const [task, setTask] = useState("");
  const params = useParams();
  const id = params.slug;
  
    const router=useRouter();

  useEffect(() => {
    const alltask = JSON.parse(localStorage.getItem("tasklist"));
    if (alltask) {
      const found = alltask.find((item) => item.id === parseInt(id));
      if (found) setTask(found);
    }
  }, [id]);

  return(
    <div>
      {task.Description}
    </div>
    
    
  )
}
