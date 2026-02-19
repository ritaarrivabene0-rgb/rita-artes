import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}