"use client"
import React, { useState } from 'react';
import NotificationCard from '@/components/Dashboard/NotificationCard';

const initialNotifications = [
  {
    date: '20 July 2024',
    title: 'Upcoming meeting',
    description: 'You have an onboarding meeting by 4pm today',
    isRead: false,
    showJoinButton: true,
  },
  {
    date: '12 July 2024',
    title: 'Upcoming meeting',
    description: 'You have an offboarding meeting by 4pm today',
    isRead: true,
    showJoinButton: false,
  },
  {
    date: '10 July 2024',
    title: 'Project Update',
    description: 'Your project status has been updated.',
    isRead: false,
    showJoinButton: false,
  },
  {
    date: '5 July 2024',
    title: 'New Message',
    description: 'You have received a new message from John.',
    isRead: true,
    showJoinButton: false,
  },
  {
    date: '1 July 2024',
    title: 'System Alert',
    description: 'There is a scheduled maintenance on 3rd July.',
    isRead: false,
    showJoinButton: false,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleNotificationClick = (index: number) => {
    const updatedNotifications = notifications.map((notification, i) =>
      i === index ? { ...notification, isRead: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <section className="container mx-auto py-8 space-y-6 md:space-y-10">
      {notifications.map((notification, index) => (
        <div  key={index} onClick={() => handleNotificationClick(index)}>
          <NotificationCard
            date={notification.date}
            title={notification.title}
            description={notification.description}
            isRead={notification.isRead}
            showJoinButton={notification.showJoinButton}
          />
        </div>
      ))}
    </section>
  );
}
