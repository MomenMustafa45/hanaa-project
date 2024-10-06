import React from 'react'

export default function ChangLang() {
  return (
    <div className="pt-4">
    <select
      onChange={(e) => handleChangeLanguage(e.target.value)}
      className="p-2 rounded-md bg-slate-400"
      defaultValue="ar"
    >
      <option value="en">English</option>
      <option value="ar">الغة العربية</option>
    </select>
  </div>
  )
}
