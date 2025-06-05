import { getAdmin } from '@/actions/admin'
import Header from '@/components/Header';
import { notFound } from 'next/navigation';
import SideBar from './components/SideBar';

const AdminLayout = async ({children}) => {

    const admin = await getAdmin();

    if (!admin) {
        return notFound();
    }

    return (
        <div className='h-full'>
            <Header isAdminPage={true} />
            <div className='flex flex-col h-full w-56 top-26 fixed inset-y-0 z-50'>
                <SideBar />
            </div>
            <main className='md:pl-56 pt-[110px] h-full'>{ children}</main>
        </div>
    )
}

export default AdminLayout