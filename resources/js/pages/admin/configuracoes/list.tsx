"use client";

import { IoSettings } from "react-icons/io5";
import PageHeader from "@/components/layouts/PageHeader";
import Input from "@/components/Input";
import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Questione",
    siteDescription: "Pratique, evolua e conquiste seus objetivos",
    supportEmail: "suporte@questione.com",
    maxOptions: "6",
    maintenanceMode: false,
  });

  return (
    <>
      <PageHeader icon={IoSettings} title="Configurações do Sistema" />
      <div className="p-5 flex flex-col gap-6 w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Configurações Gerais */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Geral</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Nome da Plataforma</label>
                <Input
                  type="text"
                  name="siteName"
                  id="siteName"
                  value={settings.siteName}
                  placeholder="Ex: Questione"
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Descrição/Slogan</label>
                <Input
                  type="text"
                  name="siteDescription"
                  id="siteDescription"
                  value={settings.siteDescription}
                  placeholder="Slogan da plataforma"
                  onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">E-mail de Suporte</label>
                <Input
                  type="email"
                  name="supportEmail"
                  id="supportEmail"
                  value={settings.supportEmail}
                  placeholder="email@suporte.com"
                  onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Configurações de Questões */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Questões e Provas</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Máximo de Opções por Questão</label>
                <Input
                  type="number"
                  name="maxOptions"
                  id="maxOptions"
                  value={settings.maxOptions}
                  placeholder="Padrão: 6"
                  onChange={(e) => setSettings({ ...settings, maxOptions: e.target.value })}
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md border border-slate-200 mt-2">
                <div>
                  <p className="font-semibold text-slate-800">Modo de Manutenção</p>
                  <p className="text-xs text-slate-500">Impede o acesso de alunos à plataforma</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.maintenanceMode}
                  onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})}
                  className="w-10 h-5 bg-slate-300 rounded-full appearance-none cursor-pointer checked:bg-brand-gold transition-colors relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all checked:after:translate-x-5"
                />
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-end gap-3">
          <button className="px-6 py-2 border border-slate-300 rounded-md text-slate-600 font-semibold hover:bg-slate-50 transition-colors">
            Descartar
          </button>
          <button className="px-6 py-2 bg-slate-900 text-white rounded-md font-semibold hover:bg-slate-800 transition-colors shadow-md">
            Salvar Configurações
          </button>
        </div>
      </div>
    </>
  );
}
