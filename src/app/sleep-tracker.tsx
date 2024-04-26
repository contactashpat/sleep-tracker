"use client"
import {useState} from "react";

interface FormData {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  sleepDuration: number;  // in hours
}

export  function SleepTracker() {
  const [formData, setFormData] = useState<FormData>({ name: '', gender: 'Male', sleepDuration: 8 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('console1 Form data submitted:', formData);
  };

  return (
    <div className="flex flex-col my-5">
      <h1 className="text-3xl font-bold underline text-center">
        Sleep Tracker
      </h1>
      <form className="mx-10 mt-10 p-5 border-white border-2" onSubmit={handleSubmit}>
        <div className="my-5">
          <label htmlFor="name" className="me-5">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name.toString()}
            onChange={handleChange}
            className="border-gray-300 border rounded p-1 text-black bg-white visible"
          />
        </div>
        <div className="my-5">
          <label htmlFor="gender" className="me-5">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border-gray-300 border rounded p-1 text-black bg-white visible"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="sleepDuration" className="me-5">Sleep Duration (hours):</label>
          <input
            type="number"
            id="sleepDuration"
            name="sleepDuration"
            value={formData.sleepDuration}
            onChange={handleChange}
            className="border-gray-300 border rounded p-1 text-black bg-white visible"
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
