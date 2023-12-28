import { SidebarName, SidebarsState } from "@/@types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


  
  const initialSideBarStates: SidebarsState = {
    sidebars: {
      menu: {
        isOpen: false,
        name: 'menu'
      },
      cart: {
        isOpen: false,
        name: 'cart'
      },
      wish: {
        isOpen: false,
        name: 'wish'
      },
      category: {
        isOpen: false,
        name: 'category'
      },
    },
    darkenBackground: false,
  }
  
  const sidebarsSlice = createSlice({
      name: 'sidebars',
      initialState: initialSideBarStates,
      reducers: {
          openSidebar: (state, action: PayloadAction<SidebarName>) => {
              const sidebarName = action.payload
              state.sidebars[sidebarName].isOpen = true
              state.darkenBackground = true
          },
          closeSidebar: (state, action: PayloadAction<SidebarName>) => {
              const sidebarName = action.payload
              state.sidebars[sidebarName].isOpen = false
              state.darkenBackground = Object.values(state.sidebars).some(sidebar => sidebar.isOpen)
          },
          toggleSidebar: (state, action: PayloadAction<SidebarName>) => {
              const sidebarName = action.payload
              state.sidebars[sidebarName].isOpen = !state.sidebars[sidebarName].isOpen
              state.darkenBackground = Object.values(state.sidebars).some(sidebar => sidebar.isOpen)
          }
      }
  })
  
  export const { openSidebar, closeSidebar, toggleSidebar } = sidebarsSlice.actions
  
  export default sidebarsSlice.reducer