import Head from 'next/head';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estateanator</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                NAVBAR-anator
            </header>
            <main>
                {children}
            </main>
            <footer>
                FOOTER-anator
            </footer>
        </Box>
    </>
)

export default Layout;