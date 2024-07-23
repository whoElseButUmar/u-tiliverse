import { useState } from "react";

interface NotesFormData {
  title: string;
  content: string;
  tags: string;
  createdAt: string;
}

export const useNoteForm = () => {
  const [formData, setFormData] = useState<NotesFormData>({
    title: "Note Title",
    content: "Note Content",
    tags: "",
    createdAt: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return { formData, handleInputChange };
};
