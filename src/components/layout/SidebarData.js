// This component holds all of the redirects to different pages for the SideNav Bar

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Library',
    path: '/atlas-library',
    icon: <FaIcons.FaBook />,
    cName: 'nav-text'
  },
  {
    title: 'Quizzes',
    path: '/quizdirectory',
    icon: <FaIcons.FaListUl />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <FaIcons.FaCog />,
    cName: 'nav-text'
  },
    {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];