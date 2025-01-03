import SideNav from '@/app/ui/dashboard/sidenav';

// Children can either be a page or another layout
export default function Layout({children}:{children:React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className='w-full flex-none md:w-64'>
                <SideNav />
            </div>
            {/* Pages inside /dashboard like customer will be automatically nested inside the layout */}
            <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
        </div>
    )
}