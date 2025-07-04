import type React from "react";

export interface MetricData {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

export interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  href?: string;
  subItems?: SidebarItem[];
}

export interface ChartData {
  title: string;
  period: string;
  data: number[];
  labels: string[];
}

export interface User {
  name: string;
  role: string;
  avatar?: string;
  initials: string;
}

export interface UserProfileType {
  name: string;
  role: string;
  avatar?: string;
  initials: string;
}

export interface AuthFormData {
  email?: string;
  password?: string;
  confirmPassword?: string;
  code?: string[];
}

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showCloseButton?: boolean;
  className?: string;
}

export interface AdminUser {
  id: string;
  profile: string;
  name: string;
  email: string;
  role: "Super Admin" | "Admin";
  status: "active" | "inactive";
}

export interface RegularUser {
  id: string;
  profile: string;
  name: string;
  email: string;
  phone: string;
  groupsJoined: string[];
  flags: "green" | "red" | "yellow";
  rating: number;
  status: "active" | "inactive";
}

export interface FailedPayment {
  id: string;
  profile: string;
  name: string;
  email: string;
  phone: string;
  groupName: string;
  date: string;
  reason: string;
  retryCount: number;
}

export interface PayoutHistory {
  id: string;
  profile: string;
  name: string;
  email: string;
  phone: string;
  groupName: string;
  payoutDate: string;
  amountFee: string;
}

export interface Group {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  frequency: string;
  cycleProgress: string;
  slotsAvailable: number;
  date: string;
  members: string[];
  role: "Admin" | "Super Admin";
  linkColor: string;
}

export interface GroupJoinRequest {
  id: string;
  profile: string;
  name: string;
  email: string;
  groupJoin: string;
  date: string;
  rating: number;
}

export interface GroupLeaveRequest {
  id: string;
  profile: string;
  name: string;
  email: string;
  group: string;
  reason: string;
  flags: "green" | "red" | "yellow";
  rating: number;
}

export interface Dispute {
  id: string;
  profile: string;
  name: string;
  email: string;
  subject: string;
  description: string;
  date: string;
  status: "Resolved" | "Pending";
}

export interface GroupDetail {
  id: string;
  name: string;
  description: string;
  frequency: string;
  availableSlots: number;
  contributionAmount: number;
  totalPooled: number;
  cycleProgress: string;
  createdBy: {
    name: string;
    avatar: string;
  };
  members: Array<{
    id: string;
    name: string;
    email: string;
    avatar: string;
    status: "Received" | "Pending";
  }>;
  payoutTimeline: Array<{
    month: string;
    member?: {
      name: string;
      avatar: string;
      date: string;
      time: string;
    };
  }>;
}

export interface CommunityRequest {
  id: string;
  profile: string;
  username: string;
  email: string;
  requestTitle: string;
  description: string;
  amount: string;
  date: string;
}
