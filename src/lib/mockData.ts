// mockData.ts

// Mock data for accounts
export const mockAccounts = [
    { id: 1, name: "Account A", type: "Customer", industry: "Software" },
    { id: 2, name: "Account B", type: "Partner", industry: "Finance" },
];

// Mock data for contacts
export const mockContacts = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", accountId: 1 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", accountId: 2 },
];

// Mock data for opportunities
export const mockOpportunities = [
    { id: 1, title: "Opportunity 1", accountId: 1, stage: "Proposal" },
    { id: 2, title: "Opportunity 2", accountId: 2, stage: "Negotiation" },
];

// Mock data for activities
export const mockActivities = [
    { id: 1, type: "Call", date: "2026-02-26", contactId: 1, opportunityId: 1 },
    { id: 2, type: "Meeting", date: "2026-02-25", contactId: 2, opportunityId: 2 },
];

// Mock data for dashboard
export const mockDashboardData = {
    totalAccounts: mockAccounts.length,
    totalContacts: mockContacts.length,
    totalOpportunities: mockOpportunities.length,
    totalActivities: mockActivities.length,
};
