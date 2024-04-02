import React from 'react'
import Header from './_components/component/nav/Header'
import Footer from './_components/component/Footer'

const LandingpageLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className='relative'>
            <Header />
            {children}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default LandingpageLayout