import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import './style.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function BasicList() {
	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: 360,
				bgcolor: 'background.paper',
				boxShadow: 'inherit',
			}}>
			<nav aria-label="main mailbox folders">
				<List style={{ color: 'black' }}>
					<ListItem disablePadding>
						<ListItemButton style={{ fontSize: '12px' }}>
							<ListItemText primary="Update Threshold" />
							<ListItemIcon>
								<ArrowForwardIosIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary="Set Priority" />
							<ListItemIcon>
								<ArrowForwardIosIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary="Change Device Name" />
							<ListItemIcon>
								<ArrowForwardIosIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary="Change Room" />
							<br />
							<ListItemIcon>
								<ArrowForwardIosIcon />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
			<nav aria-label="secondary mailbox folders">
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText style={{ color: 'black' }} primary="Set Alarm" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemText style={{ color: 'red' }} primary="Delete" />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	)
}
