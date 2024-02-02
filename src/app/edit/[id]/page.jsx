"use client";
import Form from "@/components/Form";
import { useRouter } from "next/router"; // Asegúrate de que la importación sea correcta
import { useState, useEffect } from 'react'; // Asegúrate de importar useState y useEffect

const uri = "http://localhost:3000/api/student";

const getDataById = async (id) => {
  try {
    const response = await fetch(`${uri}/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ID ${id}.`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
};

const Edit = ({ params }) => {
  const router = useRouter();
  const id = params.id;
  console.log("ID:", id);

  const [data, setData] = useState(null);

  useEffect(() => {
    getDataById(id)
      .then(setData)
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, [id]);

  const onSubmitEdit = async (formData) => {
    console.log("formData:", formData);
    const { name, age } = formData;
    try {
      const response = await fetch(`${uri}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update for ID ${id}.`);
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div>
      {data ? (
        <Form onSubmitForm={onSubmitEdit} formValues={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Edit;
