// src/models/User.ts
export interface User {
  userId: string;
  username: string;
  email: string;
  fullName?: string;
  displayName?: string;
  avatarUrl?: string;
  bio?: string;
  timezone: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  accountStatus: 'active' | 'inactive' | 'suspended' | 'deleted';
  emailVerified: boolean;
}

export interface UserPreferences {
  preferenceId: string;
  userId: string;
  notificationSettings: {
    email: boolean;
    push: boolean;
    sms: boolean;
    [key: string]: boolean;
  };
  theme: 'light' | 'dark' | 'system';
  language: string;
  privacySettings: {
    shareProgress: boolean;
    publicProfile: boolean;
    [key: string]: boolean;
  };
  aiPersonalitySettings?: {
    supportStyle: 'encouraging' | 'direct' | 'analytical' | 'empathetic';
    messageTone: 'casual' | 'formal' | 'friendly' | 'motivational';
    responseLength: 'concise' | 'detailed';
    [key: string]: string;
  };
  updatedAt: Date;
}

// src/models/Auth.ts
export interface AuthProvider {
  providerId: string;
  userId: string;
  providerName: 'google' | 'apple' | 'email' | string;
  providerUserId: string;
  providerData?: Record<string, any>;
  createdAt: Date;
}

export interface Session {
  sessionId: string;
  userId: string;
  token: string;
  deviceInfo?: {
    deviceType?: string;
    browser?: string;
    os?: string;
    [key: string]: any;
  };
  ipAddress?: string;
  createdAt: Date;
  expiresAt: Date;
  isActive: boolean;
}

// src/models/Subscription.ts
export interface SubscriptionPlan {
  planId: string;
  name: string;
  description?: string;
  price: number;
  billingInterval: 'monthly' | 'yearly' | 'weekly' | 'quarterly';
  features?: {
    maxGoals?: number;
    maxAiChats?: number;
    communityAccess?: boolean;
    premiumContent?: boolean;
    [key: string]: any;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSubscription {
  subscriptionId: string;
  userId: string;
  planId: string;
  status: 'active' | 'canceled' | 'expired' | 'trial';
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
  trialEndDate?: Date;
  externalSubscriptionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentMethod {
  paymentMethodId: string;
  userId: string;
  paymentType: 'credit_card' | 'paypal' | 'apple_pay' | 'google_pay' | string;
  provider: 'stripe' | 'paypal' | string;
  tokenReference: string;
  isDefault: boolean;
  lastFour?: string;
  expiryDate?: string;
  billingAddress?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    [key: string]: any;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentTransaction {
  transactionId: string;
  userId: string;
  subscriptionId?: string;
  paymentMethodId?: string;
  amount: number;
  currency: string;
  status: 'succeeded' | 'pending' | 'failed';
  transactionDate: Date;
  externalTransactionId?: string;
  details?: Record<string, any>;
}

// src/models/Chat.ts
export interface Conversation {
  conversationId: string;
  userId: string;
  title?: string;
  context?: {
    mood?: string;
    goal?: string;
    focusArea?: string;
    [key: string]: any;
  };
  createdAt: Date;
  updatedAt: Date;
  isArchived: boolean;
  goalId?: string;
  category?: 'emotional_support' | 'goal_planning' | 'reflection' | 'accountability' | string;
}

export interface Message {
  messageId: string;
  conversationId: string;
  senderType: 'user' | 'ai';
  content: string;
  createdAt: Date;
  messageType: 'text' | 'image' | 'audio' | 'video';
  mediaUrl?: string;
  isRead: boolean;
  sentimentScore?: number;
  metadata?: {
    aiModel?: string;
    tokensUsed?: number;
    referencedGoals?: string[];
    intent?: string;
    [key: string]: any;
  };
}

export interface PromptCategory {
  categoryId: string;
  name: string;
  description?: string;
  icon?: string;
  isSystem: boolean;
  createdAt: Date;
}

export interface SavedPrompt {
  promptId: string;
  userId: string;
  categoryId?: string;
  title: string;
  content: string;
  isFavorite: boolean;
  usageCount: number;
  isSystem: boolean;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageReaction {
  reactionId: string;
  messageId: string;
  userId: string;
  reactionType: 'helpful' | 'not_helpful' | 'bookmark' | 'love' | string;
  createdAt: Date;
}

// src/models/Timeline.ts
export interface EventCategory {
  categoryId: string;
  userId: string;
  name: string;
  color?: string;
  icon?: string;
  isDefault: boolean;
  createdAt: Date;
}

export interface Event {
  eventId: string;
  userId: string;
  categoryId?: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime?: Date;
  allDay: boolean;
  location?: string;
  isCompleted: boolean;
  priority?: 'low' | 'medium' | 'high';
  recurringEventId?: string;
  goalId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RecurringEvent {
  recurringId: string;
  userId: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  daysOfWeek?: number[]; // For weekly recurrences (0=Sunday, 6=Saturday)
  dayOfMonth?: number; // For monthly recurrences
  monthOfYear?: number; // For yearly recurrences
  startDate: Date;
  endDate?: Date;
  maxOccurrences?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventReminder {
  reminderId: string;
  eventId: string;
  remindBeforeMinutes: number;
  notificationType: ('email' | 'push' | 'sms')[];
  createdAt: Date;
}

// src/models/Goals.ts
export interface GoalCategory {
  categoryId: string;
  userId: string;
  name: string;
  color?: string;
  icon?: string;
  isDefault: boolean;
  createdAt: Date;
}

export interface Goal {
  goalId: string;
  userId: string;
  categoryId?: string;
  title: string;
  description?: string;
  startDate?: Date;
  targetDate?: Date;
  completionDate?: Date;
  status: 'active' | 'completed' | 'abandoned' | 'paused';
  progressPercent: number;
  priority: 1 | 2 | 3 | 4 | 5; // 1 (highest) to 5 (lowest)
  visibility: 'private' | 'public' | 'friends';
  parentGoalId?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface GoalMilestone {
  milestoneId: string;
  goalId: string;
  title: string;
  description?: string;
  targetDate?: Date;
  completionDate?: Date;
  isCompleted: boolean;
  orderIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GoalMetric {
  metricId: string;
  goalId: string;
  name: string;
  description?: string;
  unit?: string;
  targetValue: number;
  currentValue: number;
  isHigherBetter: boolean;
  displayType: 'number' | 'percentage' | 'boolean';
  createdAt: Date;
  updatedAt: Date;
}

export interface GoalCheckIn {
  checkInId: string;
  goalId: string;
  checkInDate: Date;
  notes?: string;
  moodRating?: number;
  progressUpdate?: {
    metricId: string;
    newValue: number;
    [key: string]: any;
  }[];
  challenges?: string;
  wins?: string;
  aiFeedback?: string;
  createdAt: Date;
}

// src/models/Gamification.ts
export interface Achievement {
  achievementId: string;
  name: string;
  description: string;
  icon?: string;
  category: 'consistency' | 'milestones' | 'special' | string;
  requirements: {
    type: 'streak' | 'count' | 'completion' | string;
    threshold: number;
    metric?: string;
    [key: string]: any;
  };
  points: number;
  isHidden: boolean;
  createdAt: Date;
}

export interface UserAchievement {
  userAchievementId: string;
  userId: string;
  achievementId: string;
  earnedAt: Date;
  progress: number;
  isShared: boolean;
}

export interface Streak {
  streakId: string;
  userId: string;
  streakType: 'daily_login' | 'goal_tracking' | 'journal_writing' | string;
  currentCount: number;
  longestCount: number;
  lastActivityDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Reward {
  rewardId: string;
  name: string;
  description?: string;
  pointsRequired: number;
  rewardType: 'badge' | 'feature_unlock' | 'discount' | string;
  icon?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface SupportResource {
  resourceId: string;
  title: string;
  content: string;
  resourceType: 'article' | 'video' | 'exercise' | 'contact';
  category: 'motivation' | 'mental_health' | 'productivity' | string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface JournalPrompt {
  promptId: string;
  title: string;
  content: string;
  category: 'reflection' | 'gratitude' | 'challenge' | string;
  moodTags?: string[];
  isSystem: boolean;
  userId?: string;
  createdAt: Date;
}

export interface Journal {
  journalId: string;
  userId: string;
  title?: string;
  content: string;
  moodRating?: number;
  promptId?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
  isPrivate: boolean;
}

// src/models/Social.ts
export interface AccountabilityPartner {
  partnershipId: string;
  userId: string;
  partnerId: string;
  status: 'pending' | 'active' | 'declined' | 'ended';
  createdAt: Date;
  updatedAt: Date;
  permissions: {
    viewGoals: boolean;
    viewJournals: boolean;
    [key: string]: boolean;
  };
}

export interface Group {
  groupId: string;
  name: string;
  description?: string;
  createdBy: string;
  isPrivate: boolean;
  maxMembers?: number;
  coverImageUrl?: string;
  category?: 'fitness' | 'career' | 'learning' | string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GroupMembership {
  membershipId: string;
  groupId: string;
  userId: string;
  role: 'admin' | 'moderator' | 'member';
  joinedAt: Date;
  status: 'active' | 'invited' | 'requested' | 'banned';
}

export interface Challenge {
  challengeId: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  createdBy: string;
  groupId?: string;
  challengeType: 'habit' | 'milestone' | 'competition';
  rules?: {
    criteria: string;
    frequency?: string;
    verification?: string;
    [key: string]: any;
  };
  rewardDescription?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}