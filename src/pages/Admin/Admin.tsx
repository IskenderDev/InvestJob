import { useState } from "react";
import { Input, Button } from "antd";
import { updatePost } from "../../shared/api/postsApi";

export const Admin = () => {
  const [text, setText] = useState("");

  const handleSave = async () => {
    await updatePost("1", 123);
    alert("Обновлено!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Админка</h1>
      <Input.TextArea value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="primary" onClick={handleSave} className="mt-4">
        Сохранить
      </Button>
    </div>
  );
};
