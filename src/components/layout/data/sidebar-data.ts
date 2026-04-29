import {

  LayoutDashboard,
  ListTodo,
  Settings,
  Wrench,
  UserCog,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  PhoneCallIcon, 
  Package2Icon,
  PackageCheckIcon,
  Printer,
  ToolCase,
  BottleWineIcon,
  User
  
} from 'lucide-react'

import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [

    // Dashboard
    {
      title: '',
      items: [
        {title: 'Dashboard',
         url: '/',
         icon: LayoutDashboard
        }
      ]
    },

    // Menu
    {
      title: 'Menu',
      items: [
        {title: 'Komplain',
         url: '/komplain',
         icon: PhoneCallIcon
        },
        {title: 'Surat Tugas',
         url: '/surat-tugas',
         icon: ListTodo
        },
      ]
    },

    // Dataset
    {
      title: 'Dataset',
      items: [
        {
          title: 'Stok Barang',
          icon: PackageCheckIcon,
          items: [
            {
              title: 'Printer',
              url: '/stock/printer',
              icon: Printer,
            },
            {
              title: 'Toner',
              url: '/stock/toner',
              icon: BottleWineIcon,
            },

            // {
            //   title: 'Sparepart',
            //   url: '/',
            //   icon: ToolCase,
            // },


          ],
        },

        {
          title: 'Master Data',
          icon: Package2Icon,
          items: [
            {
              title: 'Printer',
              url: '/master/printer',
              icon: Printer,
            },
            {
              title: 'Toner',
              url: '/master/toner',
              icon: BottleWineIcon,
            },
            {
              title: 'Sparepart',
              url: '/master/sparepart',
              icon: ToolCase,
            },
            {
              title: 'User',
              url: '/master/user',
              icon: User,
            },


          ],
        }
      ]
    },

    // Setting
    {
      title: 'Sistem',
      items: [
        {
          title: 'Pengaturan',
          icon: Settings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: Wrench,
            },
            // {
            //   title: 'Appearance',
            //   url: '/settings/appearance',
            //   icon: Palette,
            // },
            // {
            //   title: 'Notifications',
            //   url: '/settings/notifications',
            //   icon: Bell,
            // },
            // {
            //   title: 'Display',
            //   url: '/settings/display',
            //   icon: Monitor,
            // },
          ],
        },
        
      ],
    },

    // {
    //   title: 'Menu',
    //   items: [
    //     {
    //       title: 'Dashboard',
    //       url: '//',
    //       icon: LayoutDashboard,
    //     },
    //     {
    //       title: 'Tasks',
    //       url: '/tasks_',
    //       icon: ListTodo,
    //     },
    //     {
    //       title: 'Apps',
    //       url: '/apps',
    //       icon: Package,
    //     },
    //     {
    //       title: 'Chats',
    //       url: '/chats',
    //       badge: '3',
    //       icon: MessagesSquare,
    //     },
    //     {
    //       title: 'Users',
    //       url: '/users',
    //       icon: Users,
    //     },
    //     {
    //       title: 'Secured by Clerk',
    //       icon: ClerkLogo,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/clerk/sign-in',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/clerk/sign-up',
    //         },
    //         {
    //           title: 'User Management',
    //           url: '/clerk/user-management',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: 'Pages',
    //   items: [
    //     {
    //       title: 'Auth',
    //       icon: ShieldCheck,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/sign-in',
    //         },
    //         {
    //           title: 'Sign In (2 Col)',
    //           url: '/sign-in-2',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/sign-up',
    //         },
    //         {
    //           title: 'Forgot Password',
    //           url: '/forgot-password',
    //         },
    //         {
    //           title: 'OTP',
    //           url: '/otp',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Errors',
    //       icon: Bug,
    //       items: [
    //         {
    //           title: 'Unauthorized',
    //           url: '/errors/unauthorized',
    //           icon: Lock,
    //         },
    //         {
    //           title: 'Forbidden',
    //           url: '/errors/forbidden',
    //           icon: UserX,
    //         },
    //         {
    //           title: 'Not Found',
    //           url: '/errors/not-found',
    //           icon: FileX,
    //         },
    //         {
    //           title: 'Internal Server Error',
    //           url: '/errors/internal-server-error',
    //           icon: ServerOff,
    //         },
    //         {
    //           title: 'Maintenance Error',
    //           url: '/errors/maintenance-error',
    //           icon: Construction,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: 'Other',
    //   items: [
    //     {
    //       title: 'Settings',
    //       icon: Settings,
    //       items: [
    //         {
    //           title: 'Profile',
    //           url: '/settings',
    //           icon: UserCog,
    //         },
    //         {
    //           title: 'Account',
    //           url: '/settings/account',
    //           icon: Wrench,
    //         },
    //         {
    //           title: 'Appearance',
    //           url: '/settings/appearance',
    //           icon: Palette,
    //         },
    //         {
    //           title: 'Notifications',
    //           url: '/settings/notifications',
    //           icon: Bell,
    //         },
    //         {
    //           title: 'Display',
    //           url: '/settings/display',
    //           icon: Monitor,
    //         },
    //       ],
    //     },
        
    //   ],
    // },
    
  ],
}
