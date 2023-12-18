import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined';
import SettingsInputHdmiOutlinedIcon from '@mui/icons-material/SettingsInputHdmiOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  IRONIPTV
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Hatim
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>

          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notifications"
              to="/alert"
              icon={<NotificationImportantOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Firewall"
              to="/faq"
              icon={<ShieldOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tickets"
              to="/code"
              icon={<LocalActivityOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              MANAGE LINES
            </Typography>
            <Item
              title="Create Line"
              to="/payment"
              icon={<ConnectedTvOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Line"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Mass Edit Bouquets"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              MANAGE MAG
            </Typography>
            <Item
              title="Create MAG"
              to="/line"
              icon={<RouterOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage MAG"
              to="/invoices"
              icon={<SettingsInputHdmiOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              MANAGE ENIGMA2
            </Typography>
            <Item
              title="Create Enigma2"
              to="/line"
              icon={<RouterOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Enigma2"
              to="/invoices"
              icon={<StorageOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              MANAGE ACTIVECODE
            </Typography>
            <Item
              title="Generate Codes"
              to="/code"
              icon={<DynamicFormOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage ActiveCode"
              to="/invoices"
              icon={<StorageOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              MANAGE PROFILE
            </Typography>
            <Item
              title="Change Password"
              to="/form"
              icon={<PasswordOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              BOUQUET TEMPLATES & DNS
            </Typography>
            <Item
              title="Manage Templates"
              to="/template"
              icon={<DnsOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage DNS"
              to="/line"
              icon={<RssFeedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              MANAGE LOGS
            </Typography>
            <Item
              title="Credits Log"
              to="/geography"
              icon={<InputOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Activation Log"
              to="/geography"
              icon={<ToggleOnOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Access Log"
              to="/geography"
              icon={<SensorDoorOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              MANAGE LOGS
            </Typography>
            <Item
              title="APP Center"
              to="/FAQ"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Help Center"
              to="/FAQ"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
