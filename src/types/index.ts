// src/types/index.ts

// Comprehensive TypeScript types for CRM data models.

// Type for a Contact
export type Contact = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
    createdAt: Date;
    updatedAt: Date;
};

// Type for an Account
export type Account = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
};

// Type for an Opportunity
export type Opportunity = {
    id: string;
    name: string;
    accountId: string;
    stage: string;
    amount: number;
    closeDate: Date;
    createdAt: Date;
    updatedAt: Date;
};

// Type for an Activity
export type Activity = {
    id: string;
    type: string;
    description: string;
    date: Date;
    contactId: string;
    createdAt: Date;
    updatedAt: Date;
};

// Type for a Dashboard
export type Dashboard = {
    id: string;
    name: string;
    metrics: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
};

// Type for an AI Insight
export type AIInsight = {
    id: string;
    insightType: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
};

// Exporting all types
export type CRMTypes = {
    Contact: Contact;
    Account: Account;
    Opportunity: Opportunity;
    Activity: Activity;
    Dashboard: Dashboard;
    AIInsight: AIInsight;
};