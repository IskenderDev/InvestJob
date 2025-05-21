import { useParams } from "react-router-dom";

const countryData: Record<string, { title: string; content: string }> = {
  poland: { title: "Работа в Польше", content: "Описание условий в Польше..." },
  germany: { title: "Работа в Германии", content: "Описание условий в Германии..." },
  russia: { title: "Работа в России", content: "Описание условий в России..." },
};

export const Country = () => {
  const { name } = useParams<{ name: string }>();
  const country = countryData[name || ""] || { title: "Страна не найдена", content: "" };

  return (
    <div>
      <h1 className="text-2xl font-bold">{country.title}</h1>
      <p>{country.content}</p>
    </div>
  );
};
