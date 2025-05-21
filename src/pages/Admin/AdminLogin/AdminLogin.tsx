import { useState } from "react";
import { Input, Button, Form } from "antd";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("authToken", "some-auth-token");
      window.location.href = "/admin"; 
    } else {
      setError("Неверный логин или пароль");
    }
  };
  
  

  return (
    <div className="max-w-sm mx-auto mt-12">
      <h1 className="text-2xl font-bold text-center">Вход в админку</h1>
      <Form>
        <Form.Item label="Логин">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите логин"
          />
        </Form.Item>
        <Form.Item label="Пароль">
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </Form.Item>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Form.Item>
          <Button type="primary" onClick={handleLogin} className="w-full">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminLogin;
