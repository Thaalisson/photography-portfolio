import React from 'react';

export type Category = 'All' | 'Wedding' | 'Editorial' | 'Portrait';

export interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  year: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  priceStart?: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role?: string;
}