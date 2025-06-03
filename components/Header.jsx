import Link from 'next/link'
import Image from 'next/image'
import { ArrowBigLeft, CarFront, Heart, Layout } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

import { Button } from './ui/button';
import { checkUser } from '@/lib/checkUser';


const Header = async ({ isAdminPage = false }) => {

    const user = await checkUser();

    const isAdmin = user?.role==='ADMIN';

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className='mx-auto px-4 py-2 flex items-center justify-between'>

                <Link href={isAdminPage ? '/admin' : '/'}>
                    <Image className='h-16 w-auto object-contain'
                        src={'/logo.png'} alt='GemCar AI logo' width={80} height={50} />
                    {isAdminPage && (
                        <span className='text-xs font-extralight'>Admin</span>
                    )}
                </Link>

                <div className='flex items-center space-x-4'>

                    {
                        isAdminPage
                            ? (
                                <Link href='/'>
                                    <Button variant='outline' className='flex items-center gap-2'>
                                        <ArrowBigLeft size={18} />
                                        <span >Back to App</span>
                                    </Button>
                                </Link>
                            )
                            : (
                                <SignedIn>
                                    <Link href='/saved-cars'>
                                        <Button>
                                            <Heart size={18} />
                                            <span className='hidden md:inline'>Saved Cars</span>
                                        </Button>
                                    </Link>
                                    {
                                        isAdmin
                                            ? (
                                                <Link href='/admin'>
                                                    <Button variant='outline' className=''>
                                                        <Layout size={18} />
                                                        <span className='hidden md:inline'>Admin</span>
                                                    </Button>
                                                </Link>
                                            )
                                            : (
                                                <Link href='/reservations'>
                                                    <Button variant='outline' className=''>
                                                        <CarFront size={18} />
                                                        <span className='hidden md:inline'>My Reservations</span>
                                                    </Button>
                                                </Link>
                                            )
                                    }


                                </SignedIn>
                            )
                        }


                    <SignedOut>
                        <SignInButton forceRedirectUrl='/'>
                            <Button variant='outline'>
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox:'w-20 h-20'
                            }
                        }}/>
                    </SignedIn>

                </div>
            </nav>
        </header>
    )
}

export default Header