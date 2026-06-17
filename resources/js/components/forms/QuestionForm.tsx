
import { ChangeEvent, useState, FormEvent } from "react";
import Input from "@/components/Input";
import { FaPlus, FaTrash } from "react-icons/fa6";

export interface QuestionFormData {
  name: string;
  category: string;
  nivel: string;
  options: string[];
  correctOption: number | null;
  explanation: string;
}

interface QuestionFormProps {
  initialData?: QuestionFormData;
  onSubmit: (data: QuestionFormData) => void;
  buttonLabel: string;
}

export default function QuestionForm({
  initialData,
  onSubmit,
  buttonLabel,
}: QuestionFormProps) {
  const [form, setForm] = useState<QuestionFormData>(
    initialData || {
      name: "",
      category: "",
      nivel: "",
      options: [""],
      correctOption: null,
      explanation: "",
    }
  );

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleOptionChange(index: number, value: string) {
    const newOptions = [...form.options];
    newOptions[index] = value;
    setForm((prev) => ({ ...prev, options: newOptions }));
  }

  function handleCorrectOptionChange(index: number) {
    setForm((prev) => ({ ...prev, correctOption: index }));
  }

  function handleNewOption() {
    if (form.options.length < 6) {
      setForm((prev) => ({
        ...prev,
        options: [...prev.options, ""],
      }));
    }
  }

  function handleRemoveOption(index: number) {
    if (form.options.length > 1) {
      const newOptions = form.options.filter((_, i) => i !== index);
      let newCorrectOption = form.correctOption;

      if (form.correctOption === index) {
        newCorrectOption = null;
      } else if (form.correctOption !== null && form.correctOption > index) {
        newCorrectOption = form.correctOption - 1;
      }

      setForm((prev) => ({
        ...prev,
        options: newOptions,
        correctOption: newCorrectOption
      }));
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(form);
  }

  return (
    <section className="w-full overflow-hidden rounded-2xl border border-slate-300 shadow-md bg-white">
      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-slate-800 font-semibold">
            Enunciado
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Digite o enunciado da questão"
          />

          <label htmlFor="category" className="text-slate-800 font-semibold">
            Categoria
          </label>
          <select
            name="category"
            id="category"
            value={form.category}
            onChange={handleChange}
            className="border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <option value="">Selecione</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            <option value="categoria3">Categoria 3</option>
          </select>

          <label htmlFor="nivel" className="text-slate-800 font-semibold">
            Nível
          </label>
          <select
            name="nivel"
            id="nivel"
            value={form.nivel}
            onChange={handleChange}
            className="border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <option value="">Selecione</option>
            <option value="nivel1">Nível 1</option>
            <option value="nivel2">Nível 2</option>
            <option value="nivel3">Nível 3</option>
          </select>
        </div>

        <hr />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <label className="text-slate-800 font-semibold">
              Opções de Resposta ({form.options.length}/6)
              <span className="text-slate-400 mt-1 italic block font-normal">
                Marque o radio para definir a resposta correta
              </span>
            </label>
            <button
              type="button"
              onClick={handleNewOption}
              disabled={form.options.length >= 6}
              className="flex items-center gap-2 text-sm font-semibold p-2 rounded-lg transition-colors"
              style={{
                backgroundColor: form.options.length >= 6 ? "#f1f5f9" : "#fffbeb",
                color: form.options.length >= 6 ? "#94a3b8" : "#D79D28",
                cursor: form.options.length >= 6 ? "not-allowed" : "pointer"
              }}
            >
              <FaPlus />
              <span>Adicionar</span>
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {form.options.map((option, index) => (
              <div key={index} className="flex gap-3 items-center">
                <input
                  type="radio"
                  name="correct-option"
                  checked={form.correctOption === index}
                  onChange={() => handleCorrectOptionChange(index)}
                  className="w-5 h-5 cursor-pointer"
                  style={{ accentColor: "#D79D28" }}
                  title="Marcar como correta"
                />
                <span className="text-slate-400 font-medium w-4">{String.fromCharCode(65 + index)}.</span>
                <div className="flex-1">
                  <Input
                    type="text"
                    id={`option-${index}`}
                    name={`option-${index}`}
                    value={option}
                    class="w-full border border-slate-300 rounded-md p-2"
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Opção ${String.fromCharCode(65 + index)}`}
                  />
                </div>
                {form.options.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    title="Remover opção"
                  >
                    <FaTrash size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-3">
          <label htmlFor="explanation" className="text-slate-800 font-semibold">
            Explicação da Resposta
          </label>
          <textarea
            id="explanation"
            name="explanation"
            value={form.explanation}
            onChange={handleChange}
            placeholder="Deixe uma explicação sobre por que esta resposta é a correta"
            rows={4}
            className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-700 leading-relaxed"
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#11161D",
            color: "#D79D28"
          }}
          className="hover:opacity-90 font-bold py-3 px-4 w-full transition-all shadow-md active:scale-95 rounded-md"
        >
          {buttonLabel}
        </button>
      </form>
    </section>
  );
}
