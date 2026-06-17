
import { useState } from "react";
import { GiBookmark } from "react-icons/gi";
import PageHeader from "@/components/layouts/PageHeader";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function QuestionPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const question = {
    id: 1,
    enunciado:
      "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Mussum Ipsum, cacilds vidis litro abertis.",
    options: [
      {
        id: "a",
        text: "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
      },
      {
        id: "b",
        text: "Mauris nec dolor in eros commodo tempor. Mussum Ipsum, cacilds vidis litro abertis.",
      },
      {
        id: "c",
        text: "Deserunt mollit anim id est laborum. Mussum Ipsum, cacilds vidis litro abertis.",
      },
      {
        id: "d",
        text: "Ut enim ad minim veniam. Mauris nec dolor in eros commodo tempor.",
      },
      {
        id: "e",
        text: "Quis nostrud exercitation ullamco. Mussum Ipsum, cacilds vidis litro abertis.",
      },
    ],
  };

  return (
    <>
      <PageHeader icon={GiBookmark} title="Responda" />
      <section className="p-5 flex flex-col gap-6 w-full max-w-4xl mx-auto">
        <div className="p-6 w-full overflow-hidden rounded-2xl border border-slate-300 shadow-md bg-white">
          <div className="w-full">
            <h1 className="font-bold text-xl mb-4 text-slate-800">
              Enunciado:
            </h1>
            <p className="text-slate-700 leading-relaxed text-lg mb-8 py-2">
              {question.enunciado}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {question.options.map((option, index) => {
              const label = String.fromCharCode(65 + index); // A, B, C, D, E
              const isSelected = selectedOption === option.id;

              return (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  style={{
                    borderColor: isSelected ? "#D79D28" : "#e2e8f0",
                    backgroundColor: isSelected ? "#fffbeb" : "transparent",
                    borderStyle: "solid",
                    borderWidth: "2px",
                  }}
                  className="group cursor-pointer p-2 rounded-lg transition-all duration-200 flex items-center gap-2"
                >
                  {/* Radio */}
                  <div className="flex items-center justify-center">
                    <input
                      type="radio"
                      name="question-option"
                      checked={isSelected}
                      readOnly
                      style={{display: 'none' }}
                      className="hide w-5 h-5 cursor-pointer"
                    />
                  </div>
                  {/* Letra */}
                  <div
                    style={{
                      borderColor: isSelected ? "#D79D28" : "#FFF",
                      backgroundColor: isSelected ? "#D79D28" : "#ffffff",
                      color: isSelected ? "#ffffff" : "#64748b",
                      borderStyle: "solid",
                      borderWidth: "1px",
                    }}
                    className="w-6 h-6 rounded-full p-1 flex items-center justify-center font-bold"
                  >
                    {label}
                  </div>
                  {/* Texto Opção */}
                  <div className="grow">
                    <span
                      style={{ color: isSelected ? "#92400e" : "#334155" }}
                      className={`text-base leading-relaxed ${isSelected ? "font-semibold" : ""}`}
                    >
                      {option.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: "1rem",
              paddingTop: "1rem",
              borderTop: "2px solid #e2e8f0",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button
              disabled={!selectedOption}
              style={{
                backgroundColor: selectedOption ? "#11161D" : "#e2e8f0",
                color: selectedOption ? "#D79D28" : "#94a3b8",
                borderRadius: "0.75rem",
                padding: "0.75rem 2rem",
                fontWeight: "bold",
                fontSize: "1.125rem",
                border: "none",
                cursor: selectedOption ? "pointer" : "not-allowed",
              }}
              className={
                selectedOption
                  ? "hover:shadow-md active:scale-95 transition-all"
                  : ""
              }
            >
              Responder
            </button>
          </div>
          <div className="flex flex-row justify-between items-center gap-4 mt-4">
            <div className="w-full">
              <button className="border p-2 hover:bg-brand-gold  text-slate-700 hover:text-white rounded-md w-full flex justify-center items-center gap-2">
                <FaRegArrowAltCircleLeft />
                Anterior
              </button>
            </div>
            <div className="w-full">
              <button className="border hover:bg-brand-gold  hover:text-white  text-slate-700 p-2 rounded-md w-full flex justify-center items-center gap-2">
                Próxima
                <FaRegArrowAltCircleRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
