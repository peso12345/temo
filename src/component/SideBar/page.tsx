import Link from "next/link";

export default function LeftSideBar() {
    const sidebarItems = [
        {
            title: 'Home',
            index: 0,
            url: '/home',
            icon: 'home-icon',
            backgroundColor: '#F0F0F0'
        },
        {
            title: 'Profile',
            index: 1,
            url: '/profile',
            icon: 'profile-icon',
            backgroundColor: '#E0E0E0'
        },
        {
            title: 'Settings',
            index: 2,
            url: '/settings',
            icon: 'settings-icon',
            backgroundColor: '#D0D0D0'
        },
        {
            title: 'Messages',
            index: 3,
            url: '/messages',
            icon: 'messages-icon',
            backgroundColor: '#C0C0C0'
        },
        {
            title: 'Notifications',
            index: 4,
            url: '/notifications',
            icon: 'notifications-icon',
            backgroundColor: '#B0B0B0'
        },
        {
            title: 'Talk',
            index: 5,
            url: '/talk',
            icon: 'notifications-icon',
            backgroundColor: '#A0A0A0'
        },
        {
            title: 'About',
            index: 6,
            url: '/about',
            icon: 'notifications-icon',
            backgroundColor: '#A0A0A0'
        }
    ];
    return <div className={'h-full'}>
        {
            sidebarItems.map(item => {
                return <div key={item.index} style={{backgroundColor: item.backgroundColor}}><Link
                    href={item.url}>{item.title}</Link></div>
            })
        }
    </div>
}