"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, Table } from "lucide-react";

const mockData = [
  {
    id: 1,
    title: "Insight 1",
    description: "Increase in sales by 20%",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Insight 2",
    description: "Customers prefer product A",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Insight 3",
    description: "Decrease in sales by 10%",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Insight 4",
    description: "Customers prefer product B",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Insight 5",
    description: "Increase in sales by 30%",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Insight 6",
    description: "Customers prefer product C",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Insight 7",
    description: "Decrease in sales by 5%",
    image: "https://via.placeholder.com/150",
  },
];

export default function DashboardContent() {
  const [viewMode, setViewMode] = useState("card"); // State to manage view mode: 'card' or 'table'

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-end space-x-2">
        <button
          onClick={() => setViewMode("card")}
          className={`p-2 rounded-full ${
            viewMode === "card" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          <Grid className="h-6 w-6" />
        </button>
        <button
          onClick={() => setViewMode("table")}
          className={`p-2 rounded-full ${
            viewMode === "table" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          <Table className="h-6 w-6" />
        </button>
      </div>

      {viewMode === "card" ? (
        //responsive grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockData.map((item) => (
            <Card key={item.id} className="h-full flex flex-col items-center">
              <CardHeader>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[150px] h-[150px] object-cover mb-2 rounded-md"
                />
                <CardTitle>
                  <p className="text-center"> {item.title}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-start">ID</th>
                <th className="px-4 py-2 border-b text-start">Title</th>
                <th className="px-4 py-2 border-b text-start">Description</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 border-b">{item.id}</td>
                  <td className="px-4 py-2 border-b">{item.title}</td>
                  <td className="px-4 py-2 border-b">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
