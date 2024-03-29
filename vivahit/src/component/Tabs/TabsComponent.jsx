import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { ThemeProvider, } from "@mui/material";
import { Grid } from "../Grid/Grid";
import { createTheme } from '@mui/material/styles';

import './Tabs.css'
import { List } from "../List/List";
export default function TabsComponent({coins}) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const style ={
       color:"var(--white)",
       width:"50vw",
          fontWeigth:600,
            fontSize:"1.2rem",
            fontFamily:'inter',
              textTranformation:"capitalize",
                marginTop:"1em"
}
   const theme = createTheme({
        palette:{
               primary:{
                   main :"#3aBBe9"
               }
        }
   })
  return (
    <ThemeProvider theme={theme} >
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="grid" value="grid" sx={style}/>
          <Tab label="list" value="list" sx={style}/>
        </TabList>
        <TabPanel value="grid" sx={{color:'#fff'}}>
              <div className="grid-flex">
                { coins.length>0 && coins?.map((coin)=>{
                       return   <Grid coin={coin} key={coin.id}/>
                })}
              </div>
        </TabPanel>
        <TabPanel value="list" sx={{color:'#fff'}}> 
        
        <table className="list-table">
          {coins.length>0 && coins?.map((coin)=>{
             return <List coin={coin} key={coin.id}/> 
          })}
        </table>
        
        </TabPanel>
      </TabContext>
    </ThemeProvider >
  );
}
