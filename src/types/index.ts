// src/types/index.ts

// Define Contact Type
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
}

// Define Account Type
export interface Account {
  id: string;
  name: string;
  type: 'Customer' | 'Partner' | 'Vendor';
  owner: string;
  contacts: Contact[];
}

// Define Opportunity Type
export interface Opportunity {
  id: string;
  title: string;
  account: Account;
  value: number;
  stage: 'Prospecting' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  closeDate?: string; // ISO Date
}

// Define Activity Type
export interface Activity {
  id: string;
  type: 'Call' | 'Email' | 'Meeting';
  date: string; // ISO Date
  description: string;
  relatedTo: Contact | Account | Opportunity;
}

// Define AI Insight Type
export interface AIInsight {
  id: string;
  type: 'Sales Prediction' | 'Customer Behavior Analysis' | 'Opportunity Suggestion';
  result: string;
  createdAt: string; // ISO Date
}

// Export Types
export type CRMTypes = Contact | Account | Opportunity | Activity | AIInsight;