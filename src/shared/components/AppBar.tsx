import { Box, IconButton, useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import menu_icon from '../../assets/menu_icon.svg'
import { TypographyMain } from '../ui/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import storage from '../../utils/storage';

export default function AppBar() {
    const isMobile = useMediaQuery('(max-width:900px)');
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    pathSegments.shift();

    const pathText: { [key: string]: string } = {
        'home': 'Дашборд',
        'createAlgorithm': 'Создать алгоритм',
        'profile': 'Профиль',
        'myAlgorithms': 'Мои Алгоритмы',
    };

    return (
        <>
            <Box sx={{ height: '60px', backgroundColor: 'primary.main', p: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Logo />
                <Box sx={{
                    width: 'calc(100% - 310px)',
                    backgroundColor: 'white',
                    height: '90%',
                    borderRadius: '24.5px',
                    display: 'flex',
                    justifyContent: !isMobile ? 'space-between' : 'flex-end',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    marginTop: 0.5,
                }}>
                    {!isMobile &&
                        <Box sx={{ ml: 5, display: 'flex' }}>
                            <img src={menu_icon} width="20px" height="20px" />
                            {pathSegments.map((path: string, index: number) => (
                                <TypographyMain sx={{ ml: 2 }}>
                                    {pathText[path]} {index < pathSegments.length - 1 && "/"}
                                </TypographyMain>
                            ))}
                        </Box>}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2}}
                        onClick={() => { storage.clearAll(); window.location.reload() }}
                    >
                        <LogoutIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
}