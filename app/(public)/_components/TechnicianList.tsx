"use client";

import React from "react";
import TechnicianCard from "./TechnicianCard";


interface TechnicianListProps {
  technicians: {
    id: string;
    location: string;
    rating: number;
    experience?: string;
    price?: number;
    skills?: string[];
    user: {
      name: string;
      image?: string;
    };
  }[];
}

export default function TechnicianList({ technicians }: TechnicianListProps) {
  if (!technicians || technicians.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed rounded-2xl bg-muted/20">
        <p className="text-sm font-medium text-muted-foreground">No technicians found at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
      {technicians.map((tech) => (
        <TechnicianCard 
          key={tech.id} 
          technician={tech}
        />
      ))}
    </div>
  );
}
