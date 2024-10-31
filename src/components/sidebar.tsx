import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MENU_ITEMS from '../_mock/menu';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <aside>
            <List>
                {MENU_ITEMS.map(menu => (
                    <Link to={menu.path as string}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon color='#fff' icon={menu.icon} style={{ fontSize: '24px' }} />
                                </ListItemIcon>
                                <ListItemText primary={<Typography color='#fff' variant='subtitle2'>{menu.title}</Typography>} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </aside>
    );

}
